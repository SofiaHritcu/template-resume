<template>
<!-- home slider -->
<div class="p-3 p-lg-5">

    <div class="container pl-5 mb-4 pt-0">
        <div class=" what-i-do">
            <h3>My projects </h3>
        </div>
    </div>
    <div class="container">
        <b-carousel id="carousel-1" class="carousel-projects" v-model="slide" :interval="5000" controls indicators img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide img-src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg">
                <h2>{{project_name}} </h2>
                <p> {{project_description}}</p>
            </b-carousel-slide>
            <b-carousel-slide caption="Second Slide" img-src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg"></b-carousel-slide>
            <b-carousel-slide caption="Third Slide" img-src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg"></b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home_slider_projects',
    props: {
        project_name: String,
        project_description: String,
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

<style>
.what-i-do {
    font-size: 2rem;
    position: relative;
    padding-left: 1.5rem;
}

.what-i-do h3 {
    font-size: 2rem;
}

.what-i-do:before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    background: #3366cc;
    position: absolute;
    left: 0;
    top: 0;
}

.sr-only {
    display: none !important;
}

.carousel-projects p {
      text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

@media only screen and (max-width: 768px) {
    .carousel-projects h2 {
        font-size: 20px
    }

    .carousel-projects p {
        font-size: 14px
    }

    .carousel-caption {
        bottom: 0.5rem !important;
    }
}
</style>
