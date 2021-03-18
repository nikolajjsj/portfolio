<template>
  <div class="my-10 overflow-hidden shadow flex flex-col items-center w-3/4 max-w-6xl mx-auto sm:rounded-lg">
    <div class="flex flex-col p-4 bg-gray-900 w-full">
      <div class="flex flex-col items-center lg:flex-row">
        <img
          class="w-4/5 rounded-lg m-4 shadow lg:rounded-full lg:w-24 lg:h-24"
          src="~/assets/headshot.jpg"
          alt="Headshot"
        >
        <div>
          <h3 class="text-white font-bold text-4xl">
            Nikolaj Jensen
          </h3>
          <p class="text-gray-500 font-bold text-2xl">
            Freelance Developer
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center text-gray-500 lg:justify-center lg:flex-row">
        <div class="flex items-center my-2 mr-6 text-sm">
          <svg class="mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd" /></svg>
          nikolajjsj.com
        </div>
        <div class="flex items-center my-2 mr-6 text-sm">
          <svg class="mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" /></svg>
          Aarhus, Denmark
        </div>
        <div class="flex items-center my-2 mr-6 text-sm">
          <svg class="mr-1.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          nikolajjsj@gmail.com
        </div>
      </div>
    </div>

    <div class="w-full p-4 lg:flex">
      <div class="w-full p-4 lg:w-6/12">
        <div class="flex items-center mb-3">
          <h4 class="pr-4 text-xl font-bold leading-5 tracking-wider">
            Skills
          </h4>
          <div class="flex-1 border-t border-primary-200" />
        </div>
        <SkillPill image="https://cdn.svgporn.com/logos/flutter.svg" text="Flutter" />
        <SkillPill image="https://cdn.svgporn.com/logos/vue.svg" text="Vue" />
        <SkillPill image="https://cdn.svgporn.com/logos/react.svg" text="React" />
        <SkillPill image="https://cdn.svgporn.com/logos/nuxt-icon.svg" text="Nuxt.js" />
        <!-- <SkillPill image="https://cdn.svgporn.com/logos/nextjs-icon.svg" text="Next.js" /> -->
        <SkillPill image="https://cdn.svgporn.com/logos/dart.svg" text="Dart" />
        <SkillPill image="https://cdn.svgporn.com/logos/javascript.svg" text="Javascript" />
        <SkillPill image="https://cdn.svgporn.com/logos/typescript-icon.svg" text="Typescript" />
        <SkillPill image="https://cdn.svgporn.com/logos/python.svg" text="Python" />
        <SkillPill image="https://cdn.svgporn.com/logos/nodejs-icon.svg" text="Node.js" />
        <SkillPill image="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" text="Tailwind" />
        <SkillPill image="https://cdn.svgporn.com/logos/sass.svg" text="Sass" />
        <SkillPill image="https://cdn.svgporn.com/logos/webpack.svg" text="Webpack" />
        <SkillPill image="https://cdn.svgporn.com/logos/git-icon.svg" text="Git" />
        <SkillPill image="https://cdn.svgporn.com/logos/github-icon.svg" text="GitHub" />
        <SkillPill image="https://cdn.svgporn.com/logos/aws.svg" text="AWS" />
        <SkillPill image="https://cdn.svgporn.com/logos/linux-tux.svg" text="Linux" />
        <SkillPill image="https://cdn.svgporn.com/logos/bash-icon.svg" text="Bash scripts" />
        <SkillPill image="https://cdn.svgporn.com/logos/terminal.svg" text="Terminal" />
        <SkillPill image="https://cdn.svgporn.com/logos/trello.svg" text="Trello" />
        <SkillPill image="https://cdn.svgporn.com/logos/figma.svg" text="Figma" />
      </div>
      <div class="w-full p-4 lg:w-6/12">
        <div class="flex items-center mb-3">
          <h4 class="pr-4 text-xl font-bold leading-5 tracking-wider">
            Profile
          </h4>
          <div class="flex-1 border-t border-primary-200" />
        </div>
        I'm a self-motivated fast learner, with a a passion for programming and problem solving.
        This ensures continous improvement of the solutions I am doing.
        <br>
        <br>
        I'm always eager to learn more and happy to share what I've learnt or experienced.
        I've published several mobile Apps for both Android and iOS.
        <br>
        <br>
        I'm currently situated in Aarhus, where
        I enjoy my freetime with a good book, listening to music, or talking a long walk.
      </div>
    </div>

    <div class="px-10 mt-20 w-full">
      <div class="flex items-center mb-3">
        <h4 class="pr-4 text-xl font-bold leading-5 tracking-wider">
          Experience
        </h4>
        <div class="flex-1 border-t border-primary-200" />
      </div>
      <div class="my-10 lg:grid lg:grid-cols-3 lg:gap-8">
        <ExperienceCard
          title="Web Developer"
          employer="Raven Biosciences"
          time="Feb 2021 - Mar 2021 ~ 2 months"
          details="Worked primarly on the onboarding flow."
          logo="https://media-exp1.licdn.com/dms/image/C4E0BAQG0DO0QT1vjcg/company-logo_200_200/0?e=2159024400&v=beta&t=P3_MU87Kc9ZpOUvfOvbNyLy55P02BihI4FpoKPgjTzI"
        />
        <ExperienceCard
          title="Flutter Developer"
          employer="LifeBonder"
          time="Aug 2020 - Sep 2020 ~ 2 months"
          details="Worked primarly on the onboarding flow."
          logo="https://lifebonder.com/images/logo.png"
        />
      </div>
    </div>

    <div class="px-10 mt-20">
      <div class="flex items-center mb-3">
        <h4 class="pr-4 text-xl font-bold leading-5 tracking-wider">
          Projects
        </h4>
        <div class="flex-1 border-t border-primary-200" />
      </div>
      <div class="my-10 lg:grid lg:grid-cols-3 lg:gap-8">
        <ProjectCard
          :image="require(`~/assets/flutter/sialia.png`)"
          title="Sialia for Twitter"
          details="Unofficial Twitter client"
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
          details="Tool for health workers"
          applelink="https://apps.apple.com/us/app/sygeplejersken/id1487942456"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.sygeplejerskentool"
        />
        <ProjectCard
          :image="require(`~/assets/flutter/reddit.png`)"
          title="Speed for Reddit"
          details="Unofficial Reddit client"
          applelink="https://apps.apple.com/us/app/speed-for-r/id1513712753"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.speedyreddit"
        />
        <ProjectCard
          :image="require(`~/assets/flutter/pexels.png`)"
          title="Pexels"
          details="Tool for health workers"
          applelink="https://apps.apple.com/us/app/wallpapers-from-pexels/id1505969872"
          googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.pexelwalls"
        />
        <ProjectCard
          :image="require(`~/assets/web/sorting.png`)"
          title="Sorting visualizer"
          details="Sorting alghorhitms visualizer"
          weblink="https://nikolajjsj.github.io/Sorting-Visualization/"
        />
        <ProjectCard
          :image="require(`~/assets/web/pathfinder.png`)"
          title="Pathfinder"
          details="Pathfinding alghorhitm visualizer"
          weblink="https://nikolajjsj.github.io/Pathfinder/"
        />
      </div>
    </div>

    <p class="p-2 text-xs mt-10">
      © 2021 nikolajjsj.com - All rights reserved
    </p>
  </div>
</template>

<script>
import SkillPill from '@/components/SkillPill.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'CV',
  components: {
    SkillPill,
    ExperienceCard,
    ProjectCard
  }
}
</script>

<style scoped>
</style>
