<template>
  <span class="skill-pill">
    <img class="skill-pill__image" :src="image" />
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.skill-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 1rem;
  border-radius: 16px;
  font-weight: 400;
  line-height: 1.25rem;
  background-color: rgb(229, 230, 233);
  color: black;
  margin: 0 0.5rem 0.5rem 0;
  border: 1px solid black;
}

.skill-pill__image {
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 0.25rem 0 -0.5rem;
  border-radius: 50%;
}
</style>
