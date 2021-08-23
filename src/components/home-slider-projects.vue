<template>
<!-- home slider -->
<div>
  <b-carousel
     id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      img-src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg"
    >
    <h2>{{project_name}} </h2>
    <p> {{project_description}}</p>
    </b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>

</template>

<script>
export default {
    name: 'Home_slider_projects',
    props:{
        project_name:String,
        project_description:String,
    },
     data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }

}
</script>

<style >
.sr-only {
 display: none !important;
}



</style>
