<template>
  <button class="my-button">{{ title }}</button>
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
.my-button {
  padding: 1rem;
  margin: 0.5rem;
  background-color: white;
  color: gray;
  font-weight: 900;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 0.5px solid #000;
  text-decoration: none;
}

.my-button:hover {
  background-color: #355c7d;
  color: white;
  cursor: pointer;
}
</style>
