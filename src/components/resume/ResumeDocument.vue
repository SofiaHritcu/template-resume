<template>
      <pdf src="testCV.pdf" class="pdff mr-0"></pdf>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  props: ["resume"],
  data() {
    return {
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pdff {
    margin-top: 5%;
    margin-left: 15%;
    width: 70%;
    border: 1px solid rgba(0,0,0,0.025);
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
}
.resume {
    margin-left: 330px;
}

@media only screen and (max-width: 768px) {
    .resume {
        margin-left: 0px;
        margin-top: 650px;
    }
}
</style>
