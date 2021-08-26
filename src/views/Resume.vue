<template>
  <body>
    <div class="starts">
      <Navbar></Navbar>
    </div>
    <div class="resume container">
      <pdf src="testCV.pdf" class="pdff mr-0"></pdf>
    </div>
  </body>
</template>

<script>
import pdf from "vue-pdf";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    pdf,
    Navbar,
  },
  props: ["name"],
  data() {
    return {
      name: "Some Dude",
      //cv_src: testCV,
      description:
        "Hi, my name is Some Dude and I'm a senior software engineer. Welcome to my personal website!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pdff {
  width: 80%;
}
.resume {
  margin-left: 330px;
}

@media only screen and (max-width: 768px) {
  .resume {
    margin-left: 0px;
    margin-top: 85px;
  }
}
</style>
