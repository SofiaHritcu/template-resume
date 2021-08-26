<template>
  <!-- technologies section (home) -->
  <div class="pt-5 skill-cols col-lg-4">
    <div class="image-skill text-center">
      <img
        :src="require('@/assets/' + skill_title + '.png')"
        alt="skill-to-learn"
      />
    </div>
    <div class="title-learning text-center pt-3">
      <h3>{{ skill_title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTechnologies",

  props: {
    skill_title: String,
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
