<template>
  <div class="home">
    <Introduction />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'Home',
  components: {
    Introduction,
    Projects,
  },
};
</script>
