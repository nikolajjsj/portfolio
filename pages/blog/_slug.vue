<template>
  <article>
    <img class="blog-header" :src="article.img" :alt="article.alt" />

    <div class="blog-content">
      <h1>{{ article.title }}</h1>

      <small>{{ article.readingTime }}⏱</small>

      <br />

      <small>Updated at {{ humanDate }}</small>

      <hr />

      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
  computed: {
    humanDate() {
      return new Date(this.article.updatedAt).toLocaleDateString()
    },
  },
}
</script>

<style>
.blog-header {
  width: 100%;
  height: 15rem;
  object-fit: cover;
  margin-bottom: 1rem;
  margin-top: 0;
  border-radius: 0;
}

.blog-content {
  width: 60%;
  margin: 0 auto;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

article {
  margin-bottom: 5rem;
}

article a:active,
article a:hover {
  outline-width: 0;
  text-decoration: underline;
}

article strong {
  font-weight: 600;
}

article img {
  border-style: none;
  width: 100%;
  max-height: 20rem;
  box-sizing: content-box;
  background-color: black;
  margin: 1rem 0;
  border-radius: var(--border-radius);
  object-fit: cover;
}

article svg:not(:root) {
  overflow: hidden;
}

article input {
  font: inherit;
  margin: 0;
  overflow: visible;
}

article hr {
  margin: 15px 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #ddd;
  box-sizing: content-box;
  height: 0;
  padding: 0;
}

article hr::before {
  display: table;
  content: '';
}

article hr::after {
  display: table;
  clear: both;
  content: '';
}

article table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: 100%;
  overflow: auto;
}

article h1,
article h2,
article h3,
article h4,
article h5,
article h6 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

article p,
article blockquote,
article ul,
article ol,
article dl,
article table,
article pre {
  margin-top: 0;
  margin-bottom: 16px;
}

article p {
  margin-top: 0;
  margin-bottom: 10px;
}

article blockquote {
  margin: 0;
  border-left: 4px solid var(--button-color);
  padding-left: 1rem;
}

article pre {
  margin-bottom: 0;
  font: 12px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  word-wrap: normal;
}

article code {
  margin: 0;
  padding: 0.2em 0;
  border-radius: var(--border-radius);
  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 0.9rem;
}

article pre > code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  border: 0;
}

article pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  border: 0;
}

article pre code::before,
article pre code::after {
  content: normal;
}

@media screen and (max-width: 900px) {
  .blog-content {
    width: 90%;
  }
}
</style>
