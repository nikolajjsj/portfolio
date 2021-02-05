<template>
  <div class="cards__item">
    <a
      class="cards__item__link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure class="cards__item__pic-wrap" :data-category="label">
        <img class="cards__item__img" alt="Programming projects" :src="image" />
      </figure>
      <h5 class="cards__item__title">{{ title }}</h5>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    link: String,
    image: String,
    title: String,
    label: String,
  },
};
</script>

<style scoped>
.cards__item {
  min-width: 250px;
  width: 300px;
  display: flex;
  flex: 1;
  margin: 1rem;
}

.cards__item__link {
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
}

.cards__item__pic-wrap {
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
}

.cards__item__pic-wrap::after {
  content: attr(data-category);
  position: absolute;
  bottom: 0;
  margin-left: 5px;
  padding: 8px;
  max-width: calc((100%) - 60px);
  font-size: 12px;
  font-weight: 900;
  color: #fff;
  background-color: #ca3433;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.cards__item__img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.cards__item__img:hover {
  transform: scale(1.2);
}

.cards__item__title {
  padding: 1.25rem;
  font-size: 1rem;
  line-height: 22px;
}

@media only screen and (min-width: 1024px) {
  .cards__items {
    display: flex;
  }
}
</style>
