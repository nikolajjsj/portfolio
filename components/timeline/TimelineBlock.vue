<template>
  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-picture">
      <img
        v-if="image"
        :src="image"
        alt="company logo"
        height="50"
        width="50"
      />
    </div>

    <div class="cd-timeline-content">
      <h2>{{ company }}</h2>
      <div class="timeline-content-info">
        <span class="timeline-content-info-title">
          <i class="fa fa-certificate" aria-hidden="true"></i>
          {{ position }}
        </span>
        <span class="timeline-content-info-date">
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          {{ time }}
        </span>
      </div>
      <p>{{ description }}</p>
      <ul class="content-skills">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      default: Array,
    },
    time: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.cd-timeline-block {
  position: relative;
  margin: 1em 0;
}

.cd-timeline-block:after {
  content: '';
  display: table;
  clear: both;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

.cd-timeline-content {
  position: relative;
  margin-left: 70px;
  background: white;
  border-radius: 5px;
  padding: 1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.content-skills {
  font-size: 12px;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.content-skills li {
  background: var(--cv-header);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  padding: 2px 10px;
  margin: 3px 2px;
  text-align: center;
  flex-grow: 1;
}

.timeline-content-info {
  padding: 5px 0;
  font-size: 12px;
  border-radius: 5px;
}

.timeline-content-info-title,
.timeline-content-info-date {
  width: calc(50% - 2px);
  display: inline-block;
}

.cd-timeline-content:after {
  content: '';
  display: table;
  clear: both;
}

.cd-timeline-content h2 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 14px;
}

.cd-timeline-content p,
.cd-timeline-content .cd-date {
  font-size: 12px;
  font-size: 0.8125rem;
}

.cd-timeline-content p {
  margin: 1em 0;
}

.cd-timeline-img {
  position: absolute;
  top: 10px;
  left: 0px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  background: var(--cv-bg);
  box-shadow: 0 0 0 4px var(--cv-header), inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 24px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid var(--cv-header);
}

@media (max-width: 500px) {
  .timeline-content-info-title,
  .timeline-content-info-date {
    display: block;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }

  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }

  .cd-read-more,
  .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: -3em 0;
  }

  .cd-timeline-content {
    margin-left: 0;
    padding: 1.25em;
    width: 38%;
    margin: 0 5%;
  }

  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: var(--cv-header);
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: var(--cv-header);
  }

  .cd-timeline-img {
    width: 50px;
    height: 50px;
    left: 50%;
    margin-left: -25px;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
}
</style>
