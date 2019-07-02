<template>

<div class ="resume-show">
  <div>
    <h6> Profile of: {{ student.first_name }} {{ student.last_name }} </h6>
    <div>
      <img v-bind:src="student.photo">
    </div><br>

    <h1> {{ student.first_name }} {{ student.last_name }} </h1>
    <h4> Email: {{ student.email }}</h4>
    <h4>  Phone Number: {{ student.phone_number }}</h4>
    <br>
    <p>  Short Bio: {{ student.bio }}</p>
    <br>
    <h4>  LinkedIn URL: {{ student.linked_in }} </h4>
    <h4>  Twitter Handle: {{ student.twitter }} </h4>
    <h4>  Personal Blog/Website URL: {{ student.website }} </h4>
    <h4>   Online Resume URL: {{ student.resume }} </h4>  
    <h4>  Github URL: {{ student.github }} </h4>  
  </div>
  <br>

  <div id="student.capstone">
    <h1>Capstone</h1>
    <h5> Name: {{ student.capstone.name  }}</h5>
    <h5> Description: {{ student.capstone.description }} </h5>
    <h5>  URL: {{ student.capstone.url }}  </h5>
    <h5> Screenshot: </h5>
    <p>(Optional)</p>
    <img v-bind:src="student.capstone.screenshot">
  </div>
  <br>

  <div id="student.education">
    <h1>Education</h1>
    <h5> Start Date: {{ student.education.start_date  }} </h5>
    <h5> End Date: {{ student.education.end_date }} </h5>
    <h5> Degree: {{ student.education.degree }} </h5>
    <h5> University Name: {{ student.education.university }} </h5>
    <h5> Details: {{ student.education.details }} </h5>
  </div>
  <br>

  <div id="student.experience">
    <h1>Experiance</h1>
    <h5> Start Date: {{ student.experiance.start_date  }} </h5>
    <h5> End Date: {{ student.experiance.end_date }} </h5>
    <h5> Title: {{ student.experiance.title }} </h5>
    <h5> Company Name: {{ student.experiance.company_name }} </h5>
    <h5> Details: {{ student.experiance.details }} </h5>
  </div>
  <br>

  <div id="student.skills">
    <h1>Skills</h1>
    <h5> Name: {{ student.skills.name  }} </h5>
  </div>
  <br>

</div>


</template>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      a: [],
      student: {
        first_name: "Israel", 
        last_name: "Hass",
        
        email: "israel@gmail.com",
        phone_number: "845-425-8555",
        bio: "I am working in a group, I am working in a group, I am working in a group, I am working in a group I am working in a group, I am working in a group, I am working in a group, I am working in a group" ,
        linked_in: "https://www.linkedin.com/in/israel-hass-60659/",
        twitter: "no twitter account",
        website: "http://www.no/website/yet.none",
        resume: "no resume to display now",
        github: "https://github.com/IsraelChicago",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBgZsX5yrGZAbwdWcJAyQ8Z4UIx0-QVMNZe6TvOrrkPci-3N_Uw87N9o",
        capstone: {
          name: "Bit-Please",
          description: "Actualize coding bootcamp",
          url: "anyonecanlearntocode.com",
          screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKjJ51adXD7gTLh2VUV1Dqow5-5QJi4rGJPLK59aYmkrNgjytQCiPPsfG"
          
          // student_id
        },
        education: {
          start_date: "July 19, 2018",
          end_date: "July 19, 2019",
          degree: "Computer Engeneering",
          university: "Actualize",
          details: "Coding details"
          // student_id
        },
        experiance: {
          start_date: "Sept 1, 2008",
          end_date: "Sept 1, 2015",
          title: "Rabbi",
          company_name: "Veitzner",
          details: "4th grade Hebrew studies Rebbe"
          // student_id
        },
        skills: {
          name: "Teaching"
        }



      },
      
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

