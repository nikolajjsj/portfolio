<template>
  <div class="card">
    <div class="card__top">
      <img class="card__top-image" :src="logo" />
      <div>
        <h3 class="card__top-title">
          {{ title }}
        </h3>
        <h5 class="card__top-employer">
          {{ employer }}
        </h5>
      </div>
    </div>

    <p class="card__time">
      {{ time }}
    </p>
    <p class="card__details">
      {{ details }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    employer: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.card {
  background: white;
  border-radius: var(--border-radius);
}

.card__top {
  padding: 1rem;
  display: flex;
  align-items: center;
}

.card__top-image {
  margin-right: 0.5rem;
  height: 1.5rem;
}

.card__top-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
}

.card__top-employer {
  font-size: 1rem;
  line-height: 1.5rem;
}

.card__time {
  padding: 0 1rem;
  font-style: italic;
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0.5rem 0;
}

.card__details {
  padding: 0 1rem;
  line-height: 1rem;
  margin: 0.5rem 0;
}

@media screen and (min-width: 1024px) {
  .card {
    padding: 0;
    margin-bottom: 0;
  }
}
</style>
