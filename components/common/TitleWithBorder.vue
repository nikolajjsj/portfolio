<template>
  <div class="heading">
    <h4 class="heading__title">{{ title }}</h4>
    <div class="heading__border" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.heading {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.heading__title {
  padding-right: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0.05em;
}

.heading__border {
  flex: 1;
  border: 1px solid gray;
}
</style>
