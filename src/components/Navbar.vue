<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="navbar-item"> HOME </router-link>
      <router-link to="/contact" class="navbar-item"> CONTACT </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  height: 60px;
  width: 100%;
  position: fixed;
  background: #ca3433;
  z-index: 1000;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
}

.container {
  height: 100%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-item {
  font-weight: 900;
  color: white;
  text-decoration: none;
}
</style>
