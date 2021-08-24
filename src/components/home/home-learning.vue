<template>
<!-- home slider -->
<div>
    <div class="container pl-5 mb-4 p-3 p-lg-5 ">
        <div class=" what-i-do">
            <h3>Learning </h3>
        </div>
        <div class="row pt-5">
            <div class="pt-5 learning-cols col-lg-3">
                <div class="image-learning text-center">
                    <img :src="require ('@/assets/' + learning_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{learning_name}}</h3>
                </div>
            </div>
             <div class="pt-5 learning-cols col-lg-3">
                <div class="image-learning text-center">
                    <img :src="require ('@/assets/' + learning_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{learning_name}}</h3>
                </div>
            </div>
             <div class="pt-5 learning-cols col-lg-3">
                <div class="image-learning text-center">
                    <img :src="require ('@/assets/' + learning_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{learning_name}}</h3>
                </div>
            </div>
             <div class="pt-5 learning-cols col-lg-3">
                <div class="image-learning text-center">
                    <img :src="require ('@/assets/' + learning_image )" alt="skill-to-learn" />
                </div>
                <div class="title-learning text-center pt-3">
                    <h3>{{learning_name}}</h3>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home_learning',
    props: {
        learning_name: String,
        learning_image: String
    }
}
</script>

<style scoped>
.image-learning img {
    width: 150px;
    height: 150px;
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
