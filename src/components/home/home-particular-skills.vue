<template>
  <!-- technologies section (home) -->
  <div class="row pt-5">
    <div class="technology-col col-xl-4">
      <h4>{{ skill_title }}</h4>
      <p>{{ skill_details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeParticularSkills",

  props: {
    skill_title: String,
    skill_details: String
  },
};
</script>

<style scoped>
.image-skill img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}
</style>
