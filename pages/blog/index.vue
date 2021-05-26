<template>
  <div class="home">
    <input
      v-model="searchQuery"
      class="home__input"
      type="text"
      placeholder="Search..."
    />

    <div>
      <button
        :class="[{ 'btn--selected': block == 'JavaScript' }, 'btn']"
        @click="setBlock('JavaScript')"
      >
        JavaScript
      </button>
      <button
        :class="[{ 'btn--selected': block == 'Example' }, 'btn']"
        @click="setBlock('Example')"
      >
        Example
      </button>
    </div>

    <div class="article-grid">
      <ArticleCard
        v-for="article of articles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  data() {
    const arts: IContentDocument | IContentDocument[] = []

    return {
      block: '',
      searchQuery: '',
      articles: arts,
    }
  },
  computed: {
    combined(): string {
      return this.block + this.searchQuery
    },
  },
  watch: {
    combined: {
      async handler() {
        const blogs = await this.$content('')
          .limit(6)
          .only(['title', 'description', 'img', 'readingTime', 'path', 'slug'])
          .search(this.searchQuery)
          .where(this.block ? { block: this.block } : {})
          .fetch()
        this.articles = []
        this.articles = blogs.slice(0, blogs.length)
      },
      immediate: true,
    },
  },
  methods: {
    setBlock(blockName: string) {
      if (this.block === blockName) {
        this.block = ''
      } else {
        this.block = blockName
      }
    },
  },
})
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
