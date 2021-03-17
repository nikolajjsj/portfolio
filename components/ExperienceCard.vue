<template>
  <div class="py-5 my-4 lg:py-0 lg:mb-0">
    <div class="flex flex-row items-center">
      <img class="mr-2 h-6" :src="logo">
      <div>
        <h3 class="text-lg font-bold">
          {{ title }}
        </h3>
        <h5 class="text-m">
          {{ employer }}
        </h5>
      </div>
    </div>

    <p class="italic text-sm">
      {{ time }}
    </p>
    <p class="text-sm">
      {{ details }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    employer: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    details: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
