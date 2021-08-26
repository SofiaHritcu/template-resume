<template>
 <div>
     <Introduction_project_section description_projects="Here you can check all of my projects."/>
     <Cards_project_section background="profile.jpg" project_name="Proiectul no1" project_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit."/>
 </div>
</template>

<script>

import Introduction_project_section from '../../src/components/projects/introduction-project-section.vue'
import Cards_project_section from '../../src/components/projects/cards-project-section.vue'

  export default {
    name: 'Projects',

    components: {
    Introduction_project_section,
    Cards_project_section
    }
  }
</script>
