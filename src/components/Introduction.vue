<template>
  <div className="introduction">
    <h1 className="introduction--title">
      Hey, I'm <strong className="text__danger">Nikolaj Jensen</strong>.
    </h1>
    <p className="introduction--undertitle">
      Experienced <strong className="text__danger">developer</strong> as well as
      specialized <strong className="text__danger">biologist</strong>.
    </p>
    <img
      class="introduction--headshot"
      src="/assets/headshot.jpg"
      alt="Headshot"
    />
    <p class="introduction--paragraph">
      Experienced software developer proficient in Dart, JavaScript, and Python.
      I've mainly worked on frontend development for both web and mobile.
      Mobile development has been with either Flutter or some native Android development.
      Whereas web development have been done with Vue, React, and Angular.
      In adition to this i have used SCSS and/or CSS for styling, with the design paradigm being BEM.
      I also have a education as a biologist, where I've worked mainly within Zoophysiology.
      This includes laboratory work with several mammals, reptiles, amphibians, and insects.
      This work has led to a published peer-reviewed article, on insect cold physiology.
      Dataanalysis has been performed with the use of Python, MatLab, and R.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
};
</script>

<style scoped>
.introduction {
  width: 80%;
  margin: auto;
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.introduction--title {
  font-size: 3rem;
  margin-bottom: 10%;
}

.introduction--undertitle {
  font-size: 2rem;
  margin-bottom: 10%;
}

.introduction--headshot {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin: 1rem;
  border: 4px solid black;
}

.introduction--paragraph {
  margin: 1rem;
  text-align: justify;
  font-size: 0.9rem;
}

@media only screen and (min-width: 1024px) {
  .introduction {
    width: 50%;
  }
}
</style>
