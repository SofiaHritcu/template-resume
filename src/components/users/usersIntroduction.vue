<template>
<!-- users cards section -->
<div>
<div class="users-introduction p-3 p-lg-5">
    <div class="container text-center contact-intro ">
        <div class="text-section pb-md-0 pb-4">
            <h2>Other users</h2>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'UsersIntroduction',

   
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

.users-introduction {
    background: #fafafa !important;
}

.contact-intro {
    max-width: 780px;
}
</style>