<template>
  <div class="index">
    <h1>Resume Index</h1>
    <!-- Index display div for students -->
    <div v-for="student in students">
      <!-- Button to show page -->
      <router-link v-bind:to="'/students/' + student.id"><button>Resume</button></router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      students: []
    };
  },
  created: function() {
    axios.get("/api/students").then(response => {
      this.students = response.data;
    });

  },
  methods: {

  }
};
</script>