<template>
  <NuxtLink class="card" :to="article.path">
    <div class="card__content">
      <h3 class="card__title">
        {{ article.title }}
      </h3>

      <small class="card__time"> {{ article.readingTime }}⏱ </small>

      <p class="card__desc">
        {{ article.description }}
      </p>
    </div>
  </NuxtLink>
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
  height: 20rem;
  max-width: 30ch;
  background: url('/programming.jpg');
  background-color: #091a28;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  margin: 1rem 0 0;
  border-radius: var(--border-radius);
  overflow: hidden;
  color: white;
  transition: 0.2s;
}

.card:hover {
  transform: scale(1.025);
}

.card:hover .card__title {
  width: calc(100% + 1.5rem);
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  --padding: 1.5rem;
  padding: var(--padding);
  height: 100%;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.5) 20%,
    hsl(0 0% 0% / 1)
  );
}

.card__title {
  position: relative;
  width: max-content;
  padding: 0.5rem 0;
}

.card__title::after {
  content: '';
  position: absolute;
  height: 4px;
  width: calc(100% + var(--padding));
  left: calc(var(--padding) * -1);
  bottom: 0;
  background: var(--button-color);
}

.card__desc {
  color: rgb(255 255 255 / 0.9);
}
</style>
