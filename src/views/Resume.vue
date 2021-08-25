<template>
  <v-row>
    <v-col cols="3">
      <Navbar></Navbar>
    </v-col>
    <v-col cols="9">
      <introduction-resume-section></introduction-resume-section>
      <resume-document></resume-document>
    </v-col>
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
