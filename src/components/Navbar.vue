<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-item"> HOME </router-link>
    <router-link to="/contact" class="navbar-item"> CONTACT </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  color: black;
}

.navbar-item {
  font-weight: 900;
  transition: 0.2s;
  color: black;
  text-decoration: none;
}

.navbar-item:hover {
  transform: scale(1.1);
}
</style>
