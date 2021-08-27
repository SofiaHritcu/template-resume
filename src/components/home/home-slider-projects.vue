<template>
<!-- home slider -->
<div>

    <div class="container pl-5 mb-4 p-3 p-lg-5 pt-0">
        <div class=" what-i-do">
            <h3>My projects </h3>
        </div>
    </div>
    <div class="container">
        <b-carousel id="carousel-1" class="carousel-projects" v-model="slide" :interval="5000" controls indicators img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide 
                v-for="project in projects"
                :key="project.title"
                :img-src="project.project_background">
                <h2>{{ project.project_name }} </h2>
                <p> {{ project.project_description }}</p>
            </b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
import db from "@/firebase/firebaseInit";

export default {
    name: 'Home_slider_projects',
    props: {
        project_name: String,
        project_description: String,
    },
    data() {
        return {
            userID: "",
            projects: [],
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
        },
        loginRedirect() {
        this.$router.push("/login");
        },

        async getAllData() {
        this.getUserID();
        this.fetchProjectsData();
        },

        getUserID() {
        //trebuie modificata putin functia asta!!
        this.userID = this.$route.params.userID;
        },

        fetchProjectsData() {
        var docRef = db
            .collection("projects")
            .where("userID", "==", this.userID)
            .get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.projects.push({project_name: doc.data().title, project_description: doc.data().description, project_background: doc.data().image});
            });
            })
            .catch((error) => {
            console.log("Error getting documents: ", error);
            });
        },
    },

    created() {
        this.getAllData();
    },

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
