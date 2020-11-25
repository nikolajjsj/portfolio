<template>
  <div class="about">
    <h1 id="about-title">ABOUT</h1>
    <img class="headshot" src="/assets/headshot.jpg" alt="Headshot" />
    <div class="about-text-container">
      <h2 class="about-p-title">Developer</h2>
      <p class="about-paragraph">
        Innovative mind with experience working as a developer. Capable of
        working with a variety of technology and software solutions, and
        managing databases. Valuable team member who has experience diagnosing
        problems and developing solutions.
      </p>

      <h2 class="about-p-title">Biologist</h2>
      <p class="about-paragraph">
        Specialized biologist, with experience in dataanalysis in both Python,
        MatLab, and R. Also capable of doing experimental designs and performing
        said experiment, with insight into needed changes and improvements.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

};
</script>

<style scoped>
.about {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  width: 100%;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.headshot {
  height: 18rem;
  width: 18rem;
  border-radius: 50%;
  margin: 1rem;
}

#about-title {
  margin: 3rem;
}

.about-text-container {
  text-align: center;
  margin: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  width: 400px;
  text-align: justify;
}

.about-p-title {
  text-align: center;
  margin: 1rem;
}

.about-paragraph {
  margin: 1rem;
}
</style>
