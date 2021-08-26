<template>
<!-- contact introduction -->
<div class="about-me-section p-3 p-lg-5">
    <div class="container text-center contact-intro ">
        <div class="text-section pb-md-0 pb-4">
            <h3>Projects</h3>
            <p class="pt-3">{{description_projects}} </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Introduction_project_section',

    props: {
        description_projects: String,

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

h2 {
    font-size: 3rem;
}

h3 {
    font-size: 2rem;
    font-weight:bold;
}

p {
    font-size: 1rem;
}

.about-me-section {
    background: #fafafa;
}

.contact-intro {
    max-width: 780px;
}

</style>
