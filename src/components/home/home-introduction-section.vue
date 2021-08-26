
<template>
<!-- about me section -->
<div class="about-me-section p-3 p-lg-5">
    <div class="container">
        <div class="row align-items-center">
            <!-- left column (with text) -->
            <div class="text-section col-md-7 pb-md-0 pb-4">
                <h2>{{ firstName }}  {{ lastName }}</h2>
                <h3 class="pt-3">{{job_name}}</h3>
                <p class="pt-3">{{job_description}} </p>
                <a href="#" class="classic-button">View Resume </a>
            </div>
            <!-- photo column -->
            <div class="image-section col-md-5">
                <img :src="picture_user" />
            </div>
        </div>
        <br>
        <br>
        <div class="what-i-do pl-5 mb-4 mt-5">
            <h3>Technical Skills</h3>
        </div>
        <div class="skills_description pb-5">
            <p>{{ skillsDescription }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home_introduction_section',

    props:{
      firstName:String,
      lastName:String,
      job_name:String,
      job_description:String,
      picture_user:String,
      skillsDescription:String
    }
}
</script>

<style scoped>
p,
h2,
h3,
h4,
h5 {
    /* font color */
    color: #292929;
}

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

.classic-button {
    background-color: #85a3e0;
    color: white !important;
    line-height: 1.5;
    font-weight: bold;
    padding: .375rem 1rem;
    height: 2.5rem;
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}

.classic-button:hover{
    background-color:#3366cc;
}



h2{
    font-size:3rem;
}
h3{
    font-size: 1.5rem;
    font-weight: 300;
}
p{
    font-size: 1rem;
}

.image-section img{
    max-width: 400px;
}

@media only screen and (max-width: 600px) {
 .image-section img{
    max-width: 250px;
}
}


.about-me-section {
    background: #fafafa;
}
</style>
