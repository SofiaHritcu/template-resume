<template>
<div>
<Home_introduction_section picture_user="profile.jpg" user_name="Simon Doe" job_name="Software developer" job_description="I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume." />
</div>
</template>

<script>

import Home_introduction_section from '../../src/components/home-introduction-section.vue'

  export default {
    name: 'Home',

    components: {
    Home_introduction_section,
    },
  }
</script>
