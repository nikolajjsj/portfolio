<template>
  <div class="contact">
    <div class="contact__icons">
      <a
        href="https://www.linkedin.com/in/nikolaj-jensen-73810b137/"
        target="_blank"
      >
        <img
          class="contact__icons-image"
          src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
          alt="The LinkedIn logo"
        />
      </a>
      <a href="https://github.com/nikolajjsj" target="_blank">
        <img
          class="contact__icons-image"
          src="https://cdn.svgporn.com/logos/github-icon.svg"
          alt="The GitHub logo"
        />
      </a>
      <a href="https://twitter.com/nikolaj_jsj" target="_blank">
        <img
          class="contact__icons-image"
          src="https://cdn.svgporn.com/logos/twitter.svg"
          alt="The twitter logo"
        />
      </a>
    </div>
    <div class="contact__information">
      <h1 class="contact__information-name">Nikolaj Johannes Skole Jensen</h1>
      <h2 class="contact__information-subtitle">Personal</h2>
      <h3 class="contact__information-mail">nikolajjsj@gmail.com</h3>
    </div>
  </div>
</template>

<style scoped>
.contact {
  min-height: 80vh;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.contact__icons-image {
  height: 5rem;
  width: 5rem;
  margin: 1rem;
}

.contact__information {
  text-align: center;
}

.contact__information-name {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
}

.contact__information-subtitle {
  color: rgba(239, 68, 68, 1);
}

.contact__information-mail {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
</style>
