<template>
  <div class="projects">
    <h1 class="projects--title">PROJECTS</h1>

    <div class="project--actions">
      <Button @click="newTab(googleLink)" title="Google Play" />
      <Button @click="newTab(appleLink)" title="Apple Store" />
    </div>

    <div class="project--cards">
      <Card
        image="/assets/flutter/reddit.png"
        label="FLUTTER APP"
        title="Speed (Reddit Client)"
      />
      <Card
        image="/assets/flutter/sygepleje.png"
        label="FLUTTER APP"
        title="Sygeplejersken"
      />
      <Card
        image="/assets/flutter/sialia.png"
        label="FLUTTER APP"
        title="Sialia for Twitter"
      />
      <Card
        image="/assets/flutter/walls.png"
        label="FLUTTER APP"
        title="Walls"
      />
      <Card
        image="/assets/flutter/physiology.png"
        label="FLUTTER APP"
        title="Physiology"
      />
      <Card
        image="/assets/flutter/pexels.png"
        label="FLUTTER APP"
        title="Pexels Wallpapers"
      />
      <Card
        image="/assets/react/sorting.png"
        link="http://nikolajjsj.github.io/Sorting-Visualization/"
        label="REACT - Web App"
        title="Sorting Visualizer"
      />
      <Card
        image="/assets/react/pathfinder.png"
        label="REACT - Web App"
        title="Pathfinding Visualizer"
        link="http://nikolajjsj.github.io/Pathfinder/"
      />
      <Card
        image="/assets/react/tictactoe.png"
        link="https://nikolajjsj.github.io/TicTacToe/"
        label="REACT - Web App"
        title="TicTacToe with AI"
      />
      <Card
        image="/assets/articles/bachelor.png"
        link="https://jeb.biologists.org/content/221/12/jeb179598"
        label="PEER-REVIEWED - ARTICLE"
        title="On insect cold tolerance"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Projects',
  components: {
    Card,
    Button,
  },
  setup() {
    const googleLink = 'https://play.google.com/store/apps/developer?id=Nikolaj+Jensen';
    const appleLink = 'https://apps.apple.com/us/developer/nikolaj-jensen/id1487634697';

    function newTab(url) {
      window.open(url, '_blank');
    }

    return {
      googleLink,
      appleLink,
      newTab,
    };
  },
};
</script>

<style scoped>
.projects {
  background: #f0f0f0;
  padding-top: 5%;
  padding-bottom: 10%;
}

.projects--title {
  margin: 3rem;
  text-align: center;
}

.project--actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project--cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1120px;
  width: 80%;
  margin: 0px auto;
}
</style>
