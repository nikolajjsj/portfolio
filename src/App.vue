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
  color: black;
  font-family: "Montserrat";
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
