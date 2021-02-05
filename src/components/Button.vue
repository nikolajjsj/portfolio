<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.button {
  padding: 1rem;
  margin: 0.5rem;
  background-color: white;
  color: gray;
  font-weight: 900;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 1px solid #000;
  text-decoration: none;
}

.button:hover {
  background-color: #ca3433;
  border: 1px solid white;
  color: white;
  cursor: pointer;
}
</style>
