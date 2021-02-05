<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(/assets/fonts/Montserrat-Regular.ttf) format("truetype");
}

* {
  font-family: "Montserrat";
  color: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text__danger {
  color: #ca3433;
}
</style>
