<template>
  <div class="contact">
    <div class="contact-link-icons">
      <a
        href="https://www.linkedin.com/in/nikolaj-jensen-73810b137/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/linkedin.svg" height="50px" />
      </a>
      <a
        href="https://github.com/nikolajjsj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/github.svg" height="50px" />
      </a>
      <a
        href="https://twitter.com/nikolaj_jsj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/twitter.svg" height="50px" />
      </a>
      <a
        href="https://www.instagram.com/nikolajjsj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/instagram.svg" height="50px" />
      </a>
    </div>
    <div class="contact-information">
      <h1>Nikolaj Johannes Skole Jensen</h1>
      <h2>
        <b>Personal</b>
      </h2>
      <h3>nikolajjsj@gmail.com</h3>
      <h2>
        <b>Developer</b>
      </h2>
      <h3 class="text">nikolaj.app.dev@gmail.com</h3>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.contact-link-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.contact-link-icons > * {
  margin: 1rem;
}

.contact-information {
  text-align: center;
}

.contact-information > * {
  margin: 1rem;
}

.contact-information > h2 > b {
  color: #ca3433;
}
</style>
