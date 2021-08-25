<template>
<!-- contact introduction -->
<div class="row">
    <div class="col-xl-3">
    </div>

    <div class="col-xl-9">
        <div class="container">
            <div class="row justify-content-start">
                <div class='card mb-4 ml-0 mr-0 col-xl-6'>
                    <div class='info'>
                        <h1 class='title'>{{project_name}}</h1>
                        <p class='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.</p>
                    </div>
                </div>
                <div class='card mb-4 ml-0 mr-0 col-xl-6'>
                    <div class='info'>
                        <h1 class='title'>{{project_name}}</h1>
                        <p class='description'>{{project_description}}</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cards_project_section',
    props: {
        project_name: String,
        project_description: String,
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400");

main {
    padding: 0 64px 64px;
}

.card {
    border-radius: 16px;
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    min-height: 500px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    background-image: url(https://source.unsplash.com/collection/905011/1000x1000);
    background-size: cover;
}

.info {
    position: relative;
    width: 100%;
    height: 500px;
    background-color: #fff;
    transform: translateY(100%) translateY(-88px) translateZ(0);
    transition: transform 0.5s ease-out;
}

.info:before {
    z-index: -1;
    display: block;
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(https://source.unsplash.com/collection/905011/1000x1000);
    filter: blur(10px);
    background-size: cover;
    opacity: 0.25;
    transform: translateY(-100%) translateY(88px) translateZ(0);
    transition: transform 0.5s ease-out;
}

.card:hover .info,
.card:hover .info:before {
    transform: translateY(0) translateZ(0);
}

.title {
    margin: 0;
    padding: 35px;
    font-size: 30px !important;
    line-height: 1;
    color: rgba(0, 0, 0, 0.87);
}

.description {
    margin: 0;
    padding: 0 24px 24px;
    font-size: 18px;
    line-height: 1.5;
}

/* General layout and typography stuff */
* {
    box-sizing: border-box;
    position: relative;
    transition: all 0.3s ease;
}

html {
    font-size: 16px;
}

body {
    font-family: Open Sans, Verdana, sans-serif;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
    line-height: 1.45;
}

body,
header {
    background: #fafafa;
}

header {
    padding: 40px;
    min-height: 200px;
    text-align: center;
    color: rgba(0, 0, 0, 0.87);
}

header>* {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

header> :last-child {
    margin-bottom: 0;
}

h1 {
    margin-bottom: 0.5em;
    font-weight: inherit;
    line-height: 1.2;
    color: #1c5b72;
    font-size: 2.618em;
}

@media (min-width: 800px) {
    h1 {
        font-size: 4.236em;
        font-weight: 300;
    }
}

p {
    margin-bottom: 1.3em;
    line-height: 1.618;
}

@media (min-width: 800px) {
    p {
        font-size: 1.3em;
    }
}

a {
    color: #e03616;
    text-decoration: none;
}
</style>
