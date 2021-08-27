<template>
  <v-row>
    <div class="col-xl-2 col-lg-3 col-md-4">
      <navbar></navbar>
   </div>
     <div class="col-xl-10 col-lg-9 col-md-8 col-12 pt-0">
      <introduction-resume-section></introduction-resume-section>
      <resume-document></resume-document>
  </div>
  </v-row>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import IntroductionResumeSection from '../components/resume/introduction-resume-section.vue';
import ResumeDocument from '../components/resume/ResumeDocument.vue';

export default {
  components: {
    Navbar,
    IntroductionResumeSection,
    ResumeDocument,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
