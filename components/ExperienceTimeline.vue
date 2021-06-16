<template>
  <section id="cd-timeline" class="cd-container">
    <TimelineBlock
      company="Novicell"
      description="Web development working with Vue, Angular, and React."
      :skills="['Vue', 'Angular', 'React', 'JavaScript']"
      time="Apr 2021 - now"
      position="Web Developer"
      image="/novicell-icon.jpeg"
    />

    <TimelineBlock
      company="Raven Biosciences"
      description="Web app for testing PCR pipelines."
      :skills="['Vue', 'Python', 'WebAssembly', 'JavaScript']"
      time="Feb 2021 - Mar 2021 ~ 2 months"
      position="Web Developer"
      image="/raven-icon.png"
    />

    <TimelineBlock
      position="Flutter Developer"
      company="LifeBonder"
      description="Worked with Flutter, primarly on the onboarding flow."
      :skills="['Flutter', 'Dart', 'Android', 'iOS']"
      time="Aug 2020 - Sep 2020 ~ 2 months"
      image="/lifebonder-icon.png"
    />
  </section>
</template>

<script>
import TimelineBlock from '@/components/timeline/TimelineBlock.vue'

export default {
  components: {
    TimelineBlock,
  },
}
</script>

<style scoped>
.cd-container {
  height: 100%;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 10%;
  border-radius: 2px;
}
.cd-container::after {
  content: '';
  display: table;
  clear: both;
}

#cd-timeline {
  position: relative;
  padding: 2em 0;
}

#cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: var(--cv-header);
}

@media only screen and (min-width: 1170px) {
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}
</style>
