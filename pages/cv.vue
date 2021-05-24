<template>
  <div class="cv">
    <div class="cv__heading">
      <div class="cv__heading__main">
        <img
          class="cv__heading__main__headshot"
          src="/headshot.jpg"
          alt="Headshot"
        />
        <div>
          <h3 class="cv__heading__main__name">Nikolaj Jensen</h3>
          <p class="cv__heading__main__description">Software Developer</p>
        </div>
      </div>

      <div class="cv__heading__footer">
        <div class="cv__heading__footer__details">
          <svg
            class="cv__heading__footer__details__svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
          nikolajjsj.com
        </div>
        <div class="cv__heading__footer__details">
          <svg
            class="cv__heading__footer__details__svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          Aarhus, Denmark
        </div>
        <div class="cv__heading__footer__details">
          <svg
            class="cv__heading__footer__details__svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          nikolajjsj@gmail.com
        </div>
      </div>
    </div>

    <div class="cv__description">
      <div class="cv__description__column">
        <TitleWithBorder title="Skills" />
        <SkillPill
          image="https://cdn.svgporn.com/logos/flutter.svg"
          text="Flutter"
        />
        <SkillPill image="https://cdn.svgporn.com/logos/vue.svg" text="Vue" />
        <SkillPill
          image="https://cdn.svgporn.com/logos/react.svg"
          text="React"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/nuxt-icon.svg"
          text="Nuxt.js"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/nextjs-icon.svg"
          text="Next.js"
        />
        <SkillPill image="https://cdn.svgporn.com/logos/dart.svg" text="Dart" />
        <SkillPill
          image="https://cdn.svgporn.com/logos/javascript.svg"
          text="Javascript"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/typescript-icon.svg"
          text="Typescript"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/python.svg"
          text="Python"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/npm-icon.svg"
          text="NPM"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/nodejs-icon.svg"
          text="Node.js"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
          text="Tailwind"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/webpack.svg"
          text="Webpack"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/git-icon.svg"
          text="Git"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/github-icon.svg"
          text="GitHub"
        />
        <SkillPill image="https://cdn.svgporn.com/logos/aws.svg" text="AWS" />
        <SkillPill
          image="https://cdn.svgporn.com/logos/linux-tux.svg"
          text="Linux"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/bash-icon.svg"
          text="Bash scripts"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/terminal.svg"
          text="Terminal"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/trello.svg"
          text="Trello"
        />
        <SkillPill
          image="https://cdn.svgporn.com/logos/figma.svg"
          text="Figma"
        />
      </div>
      <div class="cv__description__column">
        <TitleWithBorder title="Profile" />
        I'm a self-motivated fast learner, with a a passion for programming and
        problem solving. This ensures continous improvement of the solutions I
        am doing.
        <br />
        <br />
        I'm always eager to learn more and happy to share what I've learnt or
        experienced. I've published several mobile Apps for both Android and
        iOS.
        <br />
        <br />
        I'm currently situated in Aarhus, where I enjoy my freetime reading a
        good book, going on a long walk, or tasting different types of whisky.
      </div>
    </div>

    <div class="cv__exp-proj">
      <TitleWithBorder title="Experience" />
      <div class="cv__exp-proj__section">
        <ExperienceCard
          title="Web Developer"
          employer="Novicell"
          time="Apr 2021 - now"
          details="Working on various projects mainly using Vue, but also Angular and Rect."
          logo="/novicell-icon.jpeg"
        />
        <ExperienceCard
          title="Web Developer"
          employer="Raven Biosciences"
          time="Feb 2021 - Mar 2021 ~ 2 months"
          details="Worked on a web app that were able to run cPython with webassembly, that could test PCR pipelines."
          logo="/raven-icon.png"
        />
        <ExperienceCard
          title="Flutter Developer"
          employer="LifeBonder"
          time="Aug 2020 - Sep 2020 ~ 2 months"
          details="Worked on their Flutter app, primarly on the onboarding flow."
          logo="/lifebonder-icon.png"
        />
      </div>
    </div>

    <div class="cv__exp-proj">
      <TitleWithBorder title="Projects" />
      <div class="cv__exp-proj__section">
        <ProjectCard
          :image="require(`~/assets/flutter/sialia.png`)"
          title="Sialia for Twitter"
          details="Unofficial Twitter app"
          applelink="https://apps.apple.com/us/app/sialia/id1539385837"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.osprey"
        />
        <ProjectCard
          image="https://play-lh.googleusercontent.com/tm-JkH54NQ5AhT1iVFIroyrSC1iRqwkCgxJexVgCqkNAWO89GRFTkrWwn7KKhBeaZoo=w3360-h1942-rw"
          title="Chess timer"
          details="Simple chess timer"
          applelink="https://apps.apple.com/us/app/chess-clock-timer/id1546595452"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.chessclock"
        />
        <ProjectCard
          :image="require(`~/assets/flutter/sygepleje.png`)"
          title="Sygeplejersken"
          details="Various usefull tools for health workers"
          applelink="https://apps.apple.com/us/app/sygeplejersken/id1487942456"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.sygeplejerskentool"
        />
        <ProjectCard
          :image="require(`~/assets/flutter/reddit.png`)"
          title="Speed for Reddit"
          details="Unofficial Reddit app"
          applelink="https://apps.apple.com/us/app/speed-for-r/id1513712753"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.speedyreddit"
        />
        <ProjectCard
          :image="require(`~/assets/flutter/pexels.png`)"
          title="Pexels"
          details="Wallpaper app using the Pexels API"
          applelink="https://apps.apple.com/us/app/wallpapers-from-pexels/id1505969872"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.pexelwalls"
        />
        <ProjectCard
          :image="require(`~/assets/web/sorting.png`)"
          title="Sorting visualizer"
          details="Visualizes various sorting algorhitms"
          weblink="https://nikolajjsj.github.io/Sorting-Visualization/"
        />
        <ProjectCard
          :image="require(`~/assets/web/pathfinder.png`)"
          title="Pathfinder"
          details="Visualizes various pathfinding algorhitms"
          weblink="https://nikolajjsj.github.io/Pathfinder/"
        />
      </div>
    </div>

    <p class="cv__footer">© 2021 nikolajjsj.com - All rights reserved</p>
  </div>
</template>

<script>
import SkillPill from '@/components/SkillPill.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import TitleWithBorder from '~/components/common/TitleWithBorder.vue'

export default {
  name: 'CV',
  components: {
    SkillPill,
    ExperienceCard,
    ProjectCard,
    TitleWithBorder,
  },
}
</script>

<style scoped>
.cv {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 2.5rem auto;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  max-width: 72rem;
  background: var(--cv-bg);
  color: var(--cv-color);
}

.cv__heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--cv-header);
  color: var(--cv-header-color);
}

.cv__heading__main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cv__heading__main__headshot {
  width: 80%;
  border-radius: var(--border-radius);
  margin: 1rem;
  box-shadow: var(--card-shadow);
}

.cv__heading__main__name {
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.cv__heading__main__description {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
}

.cv__heading__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cv__heading__footer__details {
  display: flex;
  align-items: center;
  margin: 0.5rem 1.5rem 0.5rem 0;
  font-size: 0.75rem;
  line-height: 1rem;
}

.cv__heading__footer__details__svg {
  margin-right: 0.25rem;
  height: 1.25rem;
  width: 1.25rem;
}

.cv__description {
  width: 100%;
  padding: 1rem;
}

.cv__description__column {
  width: 100%;
  padding: 1rem;
}

.cv__exp-proj {
  width: 100%;
  padding: 0 2.5rem;
  margin-top: 5rem;
}

.cv__exp-proj__section {
  margin: 1.5rem;
}

.cv__footer {
  padding: 0.5rem;
  margin-top: 2.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

@media screen and (min-width: 640px) {
  .cv {
    border-radius: var(--border-radius);
  }
}

@media screen and (min-width: 1024px) {
  .cv__heading__main {
    flex-direction: row;
  }

  .cv__heading__footer {
    flex-direction: row;
    justify-content: center;
  }

  .cv__heading__main__headshot {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  .cv__description {
    display: flex;
  }

  .cv__description__column {
    width: 50%;
  }

  .cv__exp-proj__section {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
