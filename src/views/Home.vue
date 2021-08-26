<template>
  <v-row>
    <div class="col-md-3">
      <navbar :onAbout="true"></navbar>
    </div>
  <div class="col-md-9 col-12">
      <Home_introduction_section picture_user="profile.jpg" user_name="Simon Doe" job_name="Software developer" job_description="I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume." />
      <Home_technologies skill_title_image_section="CSS" skill_image="css.png" skill_title="Vanilla JavaScript" skill_details="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor." skills_description="I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio." />
      <Home_slider_projects project_name="Proiectul NO1" project_description="Cel mai smecher proiect ever"/>
      <Home_learning learning_name="CSS" learning_image="css.png"/>
    </div>
  </v-row>
</template>

<script>

import Home_introduction_section from '../../src/components/home/home-introduction-section.vue'
import Home_technologies from '../../src/components/home/home-technologies.vue'
import Home_slider_projects from '../../src/components/home/home-slider-projects'
import Home_learning from '../../src/components/home/home-learning.vue'
import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Home',

    components: {
    Home_introduction_section,
    Home_technologies,
    Home_slider_projects,
    Home_learning,
        Navbar,
    }
  }
</script>
