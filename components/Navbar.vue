<template>
  <nav
    class="bg-white w-screen shadow sticky top-0 z-50 p-4"
  >
    <div class="flex flex-wrap items-center justify-between mx-auto max-w-6xl md:w-4/5">
      <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
        Nikolaj Jensen.
      </NuxtLink>

      <div class="flex md:hidden">
        <button @click="openCloseMenu">
          <img
            class="toggle block h-8"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            alt="Open menu icon"
            aria-label="Button used to open menu"
          >
          <img
            class="toggle hidden h-8"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            alt="Close menu icon"
            aria-label="Button used to close menu"
          >
        </button>
      </div>

      <div
        class="toggle hidden w-full flex flex-col items-center my-4 md:flex md:flex-row md:my-0 md:w-auto md:mt-0 md:space-x-4"
      >
        <NuxtLink to="/" class="block md:inline-block text-gray-900 hover:text-gray-500">
          Home
        </NuxtLink>

        <NuxtLink to="/cv" class="block md:inline-block text-gray-900 hover:text-gray-500">
          CV
        </NuxtLink>

        <NuxtLink to="/contact" class="block md:inline-block text-gray-900 hover:text-gray-500">
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openCloseMenu () {
      const navToggle = document.getElementsByClassName('toggle')
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle('hidden')
      }
    }
  }
}
</script>
