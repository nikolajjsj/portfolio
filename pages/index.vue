<template>
  <div class="home">
    <client-only>
      <Particles class="index__particles h-screen" />
    </client-only>

    <section class="home__section">
      <div class="home__section-container">
        <h1 class="home__section-container__title">Software Developer</h1>
        <p class="home__section-container__paragraph">
          Experienced Developer proficient in Dart, JavaScript, and Python. I've
          mainly worked on frontend development for both web and mobile. Mobile
          development has been with either Flutter or some native Android
          development. Whereas web development have been done with Vue and
          React.
        </p>
        <p class="home__section-container__paragraph">
          I also have a education as a biologist, where my speciality is within
          Zoophysiology. This includes laboratory work with several mammals,
          reptiles, amphibians, and insects. This work has led to a published
          peer-reviewed article, on insect cold physiology. Dataanalysis has
          been performed with Python, MatLab, and R.
        </p>
        <a href="mailto:nikolajjsj@gmail.com" class="btn"> Contact </a>
      </div>
    </section>
  </div>
</template>

<script>
import Particles from '@/components/Particles'

export default {
  components: {
    Particles,
  },
}
</script>

<style scoped>
.index__particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.home {
  width: 80%;
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0 0 2rem;
  text-align: center;
}

.home section {
  position: relative;
}

.home__section {
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;
}

.home__section-container {
  width: 100%;
  text-align: center;
}

.home__section-container__title {
  color: var(--color-secondary);
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: 0.025em;
}

.home__section-container__paragraph {
  /* text-sm */
  line-height: 2;
  margin: 1rem 0 1.5rem 0;
}

@media screen and (min-width: 768px) {
  .home section {
    padding-top: 4rem;
  }

  .home__section-container__paragraph {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .home__section-container__title {
    font-size: 3.75rem;
    line-height: 1;
  }
}

@media screen and (min-width: 1024px) {
  .home__section {
    flex-direction: row;
    align-items: center;
  }

  .home__section-container {
    text-align: right;
    width: 50%;
  }
}
</style>
