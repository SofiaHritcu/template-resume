<template>
  <!-- users cards section -->
  <div class="col-sm-4" @click="seeUser(userID)">
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <img class="lazyload" :src="image" alt="skill-to-learn" />
          <h3 class="pb-2">{{ name }}</h3>
        </div>
        <div
          class="back d-flex flex-column align-items-center justify-content-center"
        >
          <h3 class="mt-3">{{ name }}</h3>
          <h4 class="mr-0">{{ role }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersCards",

  props: {
    image: String,
    name: String,
    role: String,
    userID: String
  },

  methods: {
    seeUser(userID) {
            console.log('visit user '+userID);
            this.$router.push({ path: `/profile/home/${this.userID}` }) 
        }
  },

};
</script>

<style scoped>
.front h3 {
  font-size: 25px !important;
}

.back {
  background: #2952a3 !important;
}

.front {
  background: #3366cc !important;
}

.front img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.our-services {
  margin-top: 50px;
}
.flip-container {
  -webkit-perspective: 1000;
  margin: 0 auto 60px auto;
  width: 320px;
  height: 200px;
  border-radius: 15px;
  cursor: pointer;
}

.flip-container:hover .flipper {
  -webkit-transform: rotateY(180deg);
  cursor: pointer;
}
.flip-container.hover .flipper {
  -webkit-transform: rotateY(180deg);
  cursor: pointer;
}

.front {
  width: 320px;
  height: 200px;
  border-radius: 15px;
  -webkit-backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.front h3 {
  text-align: center;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: white;
}

.front img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

.back {
  width: 320px;
  height: 200px;
  border-radius: 15px;
  -webkit-backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: rotateY(180deg);
  text-align: center;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: white;
}

.back h3 {
  margin-top: 20px;
}

.back p {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  margin-right: 15px;
}

.flipper {
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  position: relative;
}
</style>
