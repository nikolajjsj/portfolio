<template>
  <div class="home">
    <input
      v-model="query"
      class="home__input"
      type="text"
      placeholder="Search..."
    />

    <div class="article-grid">
      <ArticleCard
        v-for="article of articles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    query: '',
    articles: [],
  }),
  watch: {
    query: {
      async handler() {
        this.articles = await this.$content('blog')
          .only(['title', 'description', 'img', 'readingTime', 'path', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(this.query)
          .fetch()
      },
      immediate: true,
    },
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
}

.home__input {
  background: var(--bg-secondary);
  color: var(--color);
  width: 100%;
  margin: 2rem 0 1rem 0;
  padding: 1rem;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  font-size: 1rem;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 30ch);
  grid-gap: 1rem;
  width: 100%;
  place-content: center;
}

@media screen and (max-width: 900px) {
  .home {
    width: 90%;
  }
}
</style>
