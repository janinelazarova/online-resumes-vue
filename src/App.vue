<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand"><router-link to="/">Resumes App</router-link></a>
      View student resumes from potential applicants from all over the anglosphere! View student education, experience, capstone projects, skills.
      <a class="navbar-brand"><router-link to="/">Student Portal</router-link></a>
      <autocomplete :search="search" placeholder="Search Student Resumes" aria-label="Search"></autocomplete>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  // npm install --save @trevoreyre/autocomplete-vue
  import Autocomplete from '@trevoreyre/autocomplete-vue';
  import '@trevoreyre/autocomplete-vue/dist/style.css';
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
      console.log(this.students);
    });
  },
  methods: {
    search(input) {
      if (input.length < 1) { return [] }
      return this.students.filter(student => {
        return student["last_name"].toLowerCase()
          .startsWith(input.toLowerCase())
      })
    }
  }
}
</script>