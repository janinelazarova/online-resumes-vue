<template>

<div class ="show">
  <h1> First Name </h1>
  <h1> Last Name </h1>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBgZsX5yrGZAbwdWcJAyQ8Z4UIx0-QVMNZe6TvOrrkPci-3N_Uw87N9o">
</div>

<!-- Email
Phone Number
Short Bio
LinkedIn URL
Twitter Handle
Personal Blog/Website URL
Online Resume URL
Github URL -->



<!-- Experience
Start Date
End Date
Job Title
Company Name
Details (one long text field)
Education
Start Date
End Date
Degree
University Name
Details (one long text field)
Skill
Skill Name (E.g. Ruby, HTML, CSS)
Capstone
Name
Description
URL
Screenshot (Optional)
 -->

</template>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      photos: [],
      currentPhoto: {},
      
    };
  },
  created: function() {
    axios.get("/api/photos").then(response => {
      this.photos = response.data;
    });
  },
  methods: {
    
    showPhoto: function(photo) {
      if (this.currentPhoto === photo) {
        this.currentPhoto = {};
      } else {
        this.currentPhoto = photo;
      }
    }
  }
};
// </script>