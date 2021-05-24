<template>
  <component :is="`icon-${$colorMode.preference}`" @click="toggleTheme" />
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconDark,
    IconLight,
  },
  data() {
    return {
      colors: ['light', 'dark'],
    }
  },
  methods: {
    toggleTheme() {
      if (this.$colorMode.preference === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
}
</script>

<style scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: var(--border-radius);
}
</style>
