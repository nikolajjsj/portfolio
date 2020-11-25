<template>
  <div className="frontpage">
    <h1 className="frontpage-title">
      Hey, I'm <strong className="text-danger">Nikolaj Jensen</strong>.
    </h1>
    <p className="frontpage-undertitle">
      Specialized <strong className="text-danger">biologist</strong> and
      experienced <strong className="text-danger">developer</strong>
    </p>
    <!-- <Button title="See my work" /> -->
  </div>
</template>

<script>
/* import Button from '@/components/Button.vue'; */

export default {
  name: 'Frontpage',
  components: {
    /* Button, */
  },
};
</script>

<style scoped>
.frontpage {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.frontpage-title {
  font-size: 3rem;
}

.frontpage-title > strong {
  color: #ca3433;
}

.frontpage-undertitle {
  font-size: 2rem;
  margin: 2rem;
  margin-bottom: 4rem;
}

.frontpage-undertitle > strong {
  color: #ca3433;
}
</style>
