<template>
  <div class="py-5 my-4 shadow lg:py-0 lg:mb-0">
    <img
      class="h-24 w-full object-cover rounded-t"
      :src="image"
      alt="Image of project"
    >

    <div class="p-2">
      <h3 class="text-lg font-bold">
        {{ title }}
      </h3>

      <p class="text-sm">
        {{ details }}
      </p>

      <div v-if="!weblink" class="flex flex-row items-center justify-around w-full py-2">
        <a :href="googlelink" target="_blank" rel="noopener noreferrer">
          <img
            class="w-8 h-8"
            src="https://cdn.svgporn.com/logos/google-play-icon.svg"
            alt="Google Play icon"
          >
        </a>
        <a :href="applelink" target="_blank" rel="noopener noreferrer">
          <img
            class="w-8 h-8"
            src="https://cdn.svgporn.com/logos/apple.svg"
            alt="Apple icon"
          >
        </a>
      </div>

      <div v-else class="flex items-center justify-center w-full py-2">
        <a :href="weblink" target="_blank" rel="noopener noreferrer">
          <img
            class="w-8 h-8"
            src="https://cdn.svgporn.com/logos/chrome.svg"
            alt="Chrome browser logo"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    details: {
      type: String,
      default: ''
    },
    weblink: {
      type: String,
      default: ''
    },
    googlelink: {
      type: String,
      default: 'https://play.google.com/store/apps/developer?id=Nikolaj+Jensen'
    },
    applelink: {
      type: String,
      default: 'https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697'
    }
  }
}
</script>
∏
