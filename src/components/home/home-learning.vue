<template>
  <div>
    <div class="pt-5 learning-cols col-lg-3">
      <div class="image-learning text-center">
        <img
          :src="require('@/assets/' +  'currently-learning.png')"
          alt="skill-to-learn"
        />
      </div>
      <div class="title-learning text-center pt-3">
        <h3 class="font-weight-thin text-subtitle">{{ learning_name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLearning",
  props: {
    learning_name: String,
  },
};
</script>

<style scoped>
.image-learning img {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.what-i-do {
  font-size: 2rem;
  position: relative;
  padding-left: 1.5rem;
}

.what-i-do h3 {
  font-size: 2rem;
}
</style>
