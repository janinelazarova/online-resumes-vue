<template>
<div class ="show">

  
  <!-- Student Info  -->
  <div id="student-attributes">
    
  </div>

  <!-- Each div will pull data from each element of the array associated -->

  <!-- Capstones -->
  <div v-for="capstone in student.capstones">
    
  </div>
  <!-- Skills -->
  <div v-for="skill in student.skills">
    
  </div>
  <!-- Experiences -->
  <div v-for="experience in student.experiences">
    
  </div>
  <!-- Educations -->
  <div v-for="education in student.educations">
    
  </div>


</div>
</template>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      student: {}    
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
      console.log(this.student);
    });
  },
  methods: {

  }
};
// </script>