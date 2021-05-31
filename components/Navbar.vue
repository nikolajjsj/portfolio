<template>
  <nav class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar__title"> Nikolaj Jensen. </NuxtLink>

      <div class="navbar__links">
        <!-- <NuxtLink to="/blog"> Blog </NuxtLink> -->

        <NuxtLink to="/cv"> CV </NuxtLink>

        <NuxtLink to="/contact"> Contact </NuxtLink>

        <ColorModePicker />
      </div>
    </div>
  </nav>
</template>

<script>
import ColorModePicker from './ColorModePicker.vue'
export default {
  components: { ColorModePicker },
  methods: {
    openCloseMenu() {
      const x = document.querySelector('.navbar__links')
      if (x.style.flexDirection === 'row') {
        x.style.flexDirection = 'column'
      } else {
        x.style.flexDirection = 'row'
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  background: var(--bg-secondary);
  width: 100vw;
  box-shadow: var(--card-shadow);
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem;
}

.navbar-container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.navbar__title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
}

.navbar__links {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar__links > * {
  display: block;
  margin-left: 1rem;
}

@media screen and (min-width: 768px) {
  .navbar-container {
    width: 80%;
  }
}
</style>
