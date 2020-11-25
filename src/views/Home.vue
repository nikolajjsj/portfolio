<template>
  <div class="home">
    <Frontpage />
    <About />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Frontpage from '@/components/Frontpage.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'Home',
  components: {
    Frontpage,
    About,
    Projects,
  },
};
</script>
