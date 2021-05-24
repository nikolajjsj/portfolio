<template>
  <div class="card">
    <NuxtLink :to="`blog/${article.path}`" class="card__link">
      <img v-if="article.img" class="card__image" :src="article.img" />

      <div class="card__content">
        <h3 class="card__content-title text-2-lines">
          {{ article.title }}
        </h3>

        <small class="card__content-time"> {{ article.readingTime }}⏱ </small>

        <p class="card__content-desc text-2-lines">
          {{ article.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      required: true,
      type: Object,
    },
  },
})
</script>

<style scoped>
.card {
  background: var(--bg-secondary);
  color: var(--color);
  margin: 1rem 0;
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.card__link {
  display: flex;
}

.card__image {
  height: 8rem;
  width: 8rem;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  object-fit: cover;
  opacity: 50%;
}

.card:hover .card__image {
  opacity: 100%;
}

.card__content {
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card__content-title {
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0;
}

.card__content-time {
  margin: 0.25rem 0 0.5rem 0;
}

.card__content-desc {
  font-size: 1rem;
  font-weight: normal;
}

.text-2-lines {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 600px) {
  .card__link {
    flex-direction: column;
  }

  .card__image {
    width: 100%;
  }
}
</style>
