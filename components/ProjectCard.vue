<template>
  <div class="project-card">
    <img class="project-card__image" :src="image" alt="Image of project" />
    <div class="project-card__content">
      <h3 class="content__title">
        {{ title }}
      </h3>

      <p class="content__details">
        {{ details }}
      </p>

      <div v-if="!weblink" class="content__links">
        <a :href="googlelink" target="_blank" rel="noopener noreferrer">
          <img
            class="links__logo"
            src="https://cdn.svgporn.com/logos/google-play-icon.svg"
            alt="Google Play icon"
          />
        </a>
        <a :href="applelink" target="_blank" rel="noopener noreferrer">
          <img
            class="links__logo"
            src="https://cdn.svgporn.com/logos/apple.svg"
            alt="Apple icon"
          />
        </a>
      </div>

      <div v-else class="content__links content__links--center">
        <a :href="weblink" target="_blank" rel="noopener noreferrer">
          <img
            class="links__logo"
            src="https://cdn.svgporn.com/logos/chrome.svg"
            alt="Chrome browser logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      default: '',
    },
    weblink: {
      type: String,
      default: '',
    },
    googlelink: {
      type: String,
      default: 'https://play.google.com/store/apps/developer?id=Nikolaj+Jensen',
    },
    applelink: {
      type: String,
      default:
        'https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697',
    },
  },
}
</script>

<style scoped>
.project-card {
  margin: 1rem 0;
  background: white;
  border-radius: var(--border-radius);
}

.project-card__image {
  height: 6rem;
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.project-card__content {
  padding: 0.5rem;
}

.content__title {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: bold;
}

.content__details {
  font-size: 0.75rem;
  line-height: 1.25rem;
}

.content__links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem 0;
}

.content__links--center {
  justify-content: center;
}

.links__logo {
  height: 2rem;
  width: 2rem;
}

@media screen and (min-width: 1024px) {
  .project-card {
    padding: 0;
    margin-bottom: 0;
  }
}
</style>
