---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-03-30T17:30:00Z
title: "How I Implemented Stripe Payments in My Go-based RSS Reader App"
slug: implementing-stripe-in-go
featured: true
draft: false
tags:
  - go
  - stripe
ogImage: ""
description: ""
liveUrl: ""
time: 8
---

# How I Implemented Stripe Payments in My Go-based RSS Reader App  

I've implemented Stripe multiple times across different projects, and I recently integrated it into my RSS reader app, [Feedify](https://feedify.app). I generally like Stripe and wouldn't want to add payments to my app without it. But still, it takes me some time to set up every single time I have to do it.  

However, I've developed a reliable approach that works well with Go backends, and this is what I want to write about today.  

I will share the way I implemented subscriptions/payments to my RSS Reader (Feedify), which will hopefully help you earn some money from your projects.  

---

## What You'll Need  

- **Go backend**  
- **User authentication system** (Goth - OAuth)  
- **Database storage** (I'm using PostgreSQL)  
- **Stripe account** with API keys  

## The Core Problems with Stripe Integrations  

### Syncing  
We have a situation in which a user makes a payment, and the transaction state lives in Stripe. This state needs to be reflected in our database so we can show the correct feature set, limits, and access types for the user.  

### All the Events!  
Stripe has around **250** different event types. It was overwhelming to figure out which ones were necessary for syncing the correct data to my database.  

### Race Conditions  
Webhook events from Stripe don't always arrive in the expected order, leading to data consistency issues. For example, a subscription update event might arrive before the initial subscription creation event.  

For the third problem, I haven't found a perfect solution, other than having a central `syncStripe` function that synchronizes all Stripe customer data to the database whenever a relevant event occurs.  

---

## Implementation Flow  

Here's how I implemented Stripe payments in Feedify:  

``` bash
=> FRONTEND: User clicks "Subscribe" button
=> BACKEND: Create or retrieve a Stripe customer for the user (before the user is redirected to the checkout session page)
=> BACKEND: Generate a checkout session with the customer ID
=> USER: Payment completion and redirected back to the app
=> BACKEND: Process webhooks and sync all the data!
=> FRONTEND: Return the updated subscription status
```

---

## Creating the Checkout Session  

When a user wants to subscribe, we first ensure they have a Stripe customer ID associated with their account. If not, we create one:  

```go
func (s *Application) createPaymentIntent(w http.ResponseWriter, r *http.Request) {
    user := r.Context().Value("user").(types.Authed)
    stripe.Key = s.Config.StripeSecretKey

    // Check if user is already subscribed
    if !user.IsFree() {
        w.WriteHeader(http.StatusConflict)
        return
    }

    // Create a Stripe customer if one doesn't exist
    if user.CustomerID == "" {
        params := &stripe.CustomerParams{
            Email: stripe.String(user.Email),
        }
        customer, err := customer.New(params)
        if err != nil {
            s.Log.Error("customer.New: ", err)
            w.WriteHeader(http.StatusInternalServerError)
            return
        }

        // Store customer ID in our database
        err = s.Storage.Customers.SetID(r.Context(), user.ID, customer.ID)
        if err != nil {
            s.Log.Error("Set customer ID", err)
            w.WriteHeader(http.StatusInternalServerError)
            return
        }

        user.CustomerID = customer.ID
    }

    // Decode request body to get product ID
    var body PaymentIntentRequest
    err := json.NewDecoder(r.Body).Decode(&body)
    if err != nil {
        s.Log.Error("Create payment intent request decode error", err)
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    // Get product details from Stripe
    params := &stripe.ProductParams{}
    expanded := "default_price"
    params.Expand = []*string{&expanded}
    prod, err := product.Get(body.ProductID, params)
    if err != nil || prod == nil {
        s.Log.Error("product.Get: ", err)
        w.WriteHeader(http.StatusInternalServerError)
        return
    }

    // Create checkout session
    successURL := s.Config.FrontendURL() + "/payment/completion"
    failureURL := s.Config.FrontendURL() + "/payment/failure"

    checkout := &stripe.CheckoutSessionParams{
        Customer:          stripe.String(user.CustomerID),
        SuccessURL:        stripe.String(successURL),
        CancelURL:         stripe.String(failureURL),
        ClientReferenceID: stripe.String(strconv.FormatInt(user.ID, 10)),
        LineItems: []*stripe.CheckoutSessionLineItemParams{
            {
                Price:    stripe.String(prod.DefaultPrice.ID),
                Quantity: stripe.Int64(1),
            },
        },
        Mode: stripe.String(string(stripe.CheckoutSessionModeSubscription)),
    }
    session, err := session.New(checkout)
    if err != nil {
        s.Log.Error("session.New: ", err)
        w.WriteHeader(http.StatusInternalServerError)
        return
    }

    // Return checkout URL to frontend
    response := Response{Success: true, Data: PaymentIntentResponse{
        Location: session.URL,
    }}
    response.RespondWithJSON(w, r, http.StatusCreated)
}

This approach ensures that:

    Each user has a unique Stripe customer ID.

    The checkout session is associated with that customer.

    We store the relationship between our user ID and the Stripe customer ID.

Handling Webhooks

The webhook handler processes all the subscription events from Stripe:

func (s *Application) stripeWebhook(w http.ResponseWriter, r *http.Request) {
    // Limit body size to prevent abuse
    const MaxBodyBytes = int64(65536)
    r.Body = http.MaxBytesReader(w, r.Body, MaxBodyBytes)
    payload, err := io.ReadAll(r.Body)
    if err != nil {
        s.Log.Error("Error reading request body: %v\n", err)
        w.WriteHeader(http.StatusServiceUnavailable)
        return
    }

    // Verify webhook signature
    sigHeader := r.Header.Get("Stripe-Signature")
    event, err := webhook.ConstructEvent(payload, sigHeader, s.Config.StripeWebhookSecret)
    if err != nil {
        log.Printf("Error verifying webhook signature: %v\n", err)
        http.Error(w, "Invalid signature", http.StatusBadRequest)
        return
    }

    // Process relevant events
    switch event.Type {
    case "checkout.session.completed", "invoice.paid", "customer.subscription.updated", "customer.subscription.deleted":
        stripeWebhookEventHandler(s, w, r, event)
        return
    default:
        s.Log.Info(fmt.Sprintf("Unhandled event type: %s\n", event.Type), nil)
    }
    
    w.WriteHeader(http.StatusNotFound)
}

Other Tips for Go/Stripe Implementations
1. Use Metadata Effectively

I store additional information in Stripe metadata to make my integration more robust.
2. Enable "Limit Customers to One Subscription"

This helps prevent users from checking out multiple times accidentally.
3. Handle Webhook Signature Verification Carefully

Always verify webhook signatures to prevent malicious requests:

sigHeader := r.Header.Get("Stripe-Signature")
event, err := webhook.ConstructEvent(payload, sigHeader, s.Config.StripeWebhookSecret)
if err != nil {
    log.Printf("Error verifying webhook signature: %v\n", err)
    http.Error(w, "Invalid signature", http.StatusBadRequest)
    return
}

4. Test Webhooks Locally During Development

Use Stripe CLI to forward webhooks:

stripe listen --forward-to localhost:8080/api/stripe/webhook

Conclusion

Implementing Stripe in a Go application doesn't have to be painful. With the right approach—focusing on a central sync function and careful webhook handling—you can build a reliable payment system that keeps your application and Stripe in sync.

This implementation has worked well for Feedify, and I hope it helps you with your own Go applications. If you have any questions or suggestions, feel free to reach out! 🚀
