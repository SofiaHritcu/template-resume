<template>
<!-- technologies section (home) -->
<div class="overview-section p-3 p-lg-5">
    <div class="container">
        <div class="what-i-do pl-5 mb-4">
            <h3>What I do </h3>
        </div>
        <div class="skills_description pb-5">
            <p>{{skills_description}}</p>
        </div>
        <div class="row pt-5">
            <div class="technology-col col-xl-4">
                <h4>{{skill_title}}</h4>
                <p>{{skill_details}}</p>
            </div>
            <div class="technology-col col-xl-4">
                <h4>{{skill_title}}</h4>
                <p>{{skill_details}}</p>
            </div>
             <div class="technology-col col-xl-4">
                <h4>{{skill_title}}</h4>
                <p>{{skill_details}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home_technologies',

    props: {
        skills_description: String,
        skill_title: String,
        skill_details: String,
    }
}
</script>

<style scoped>
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
</style>
