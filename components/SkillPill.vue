<template>
  <span
    class="inline-flex items-center px-4 py-1 rounded-full font-medium leading-5 bg-gray-300 text-primary-600 mb-2 mr-2"
  >
    <img class="h-6 w-6 mr-1 -ml-2 rounded-full" :src="image">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
