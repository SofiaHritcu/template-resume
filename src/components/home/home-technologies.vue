<template>

<!-- technologies section (home) -->
<div class="overview-section p-3 p-lg-5">
    <div class="container">
        <!-- Skills with image section -->
        <div class="row pt-5">
            <div class="pt-5 skill-cols col-lg-4">
                <div class="image-skill text-center">
                     <img :src="require ('@/assets/' + skill_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{skill_title_image_section}}</h3>
                </div>
            </div>
            <div class="pt-5 skill-cols col-lg-4">
                <div class="image-skill text-center">
                     <img :src="require ('@/assets/' + skill_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{skill_title_image_section}}</h3>
                </div>
            </div>
            <div class="pt-5 skill-cols col-lg-4">
                <div class="image-skill text-center">
                     <img :src="require ('@/assets/' + skill_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{skill_title_image_section}}</h3>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home_technologies',

    props: {
        skill_title: String,
        skill_details: String,
        skill_image:String,
        skill_title_image_section:String,
    }
}
</script>

<style scoped>
.image-skill img {
    width: 120px;
    height: 120px;
    object-fit: contain;
}
</style>
