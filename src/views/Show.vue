<template>

<div class ="resume-show">

  <div>
    <div>
      <br>
      <h6> Profile of: </h6>
      <h1> {{ student.first_name }} {{ student.last_name }} </h1>
    </div>

    <div>
      <img v-bind:src="student.photo">
    </div>
  </div>
  <br>
  <br>


  <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <small>First Name:</small> 
        <h4>{{ student.first_name }}</h4> 
      </div>

      <div class="col">
        <small>Last Name:</small> 
         <h4>{{ student.last_name }}</h4>
      </div>

      <div class="col">
        <small>Email:</small> 
        <h4>{{ student.email }}</h4>
      </div>

      <div class="col">
        <small>Phone Number:</small> 
        <h4>{{ student.phone_number }}</h4>
      </div>

    </div>
  </div>
  <br>
  <br>
  <br>

  
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
        <h4>Short Bio:</h4>
      
        <h5> {{ student.bio }} </h5>
        </div>
      </div>
    </div>
    <br>
    <br>

    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <small>LinkedIn URL:</small> 
          <br>
          <h6> {{ student.linked_in }} </h6>
        </div>
      
        <div class="col">
          <small>Twitter Handle:</small> 
          <br>
          <h6> {{ student.twitter }} </h6>
        </div>
      </div>
    </div>
    <br>

    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <small>Personal Blog/Website URL:</small>
          <br> 
          <h6> {{ student.website }} </h6>
        </div>
        
        <div class="col">
          <small>Online Resume URL:</small>
          <br> 
          <h6> {{ student.resume }} </h6>
        </div>

        <div class="col">
          <small>Github URL:</small> 
          <br>
         <h6> {{ student.github }} </h6>
        </div>

      </div>
    </div>
    <br>
    <br>
    <br>
    <div>
      <h3> Capstone</h3>
    </div>
    <br>

    <div class="container">
      <div class="row align-items-start">
        <div class="col" id="student.capstone">
    
          <small>Name:</small> 
          <h5> {{ student.capstone.first.name  }} </h5>
          <small>Description:</small>
          <h5> {{ student.capstone.first.description }} </h5>
          <small>URL:</small>
          <h5> {{ student.capstone.first.url }} </h5> 
          <small> Screenshot:  (Optional)</small>
          <br>
          <img v-bind:src="student.capstone.first.screenshot">
        </div>

        <div class="col" id="student.capstone">
    
          <small>Name:</small> 
          <h5> {{ student.capstone.second.name  }} </h5>
          <small>Description:</small>
          <h5> {{ student.capstone.second.description }} </h5>
          <small>URL:</small>
          <h5> {{ student.capstone.second.url }} </h5> 
          <small> Screenshot:  (Optional)</small>
          <br>
          <img v-bind:src="student.capstone.second.screenshot">
        </div>

        <div class="col" id="student.capstone">
    
          <small>Name:</small> 
          <h5> {{ student.capstone.first.name  }} </h5>
          <small>Description:</small>
          <h5> {{ student.capstone.first.description }} </h5>
          <small>URL:</small>
          <h5> {{ student.capstone.first.url }} </h5> 
          <small> Screenshot:  (Optional)</small>
          <br>
          <img v-bind:src="student.capstone.first.screenshot">
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div>
      <h3> Education</h3>
    </div>
    
    <div class="container">
      <div class="row align-items-start">
        <div class="col" id="student.education">
          <small> Start Date: </small>
          <h5> {{ student.education.start_date  }} </h5>
          <small> End Date: </small>
          <h5> {{ student.education.end_date }} </h5>
          <small> Degree: </small>
          <h5> {{ student.education.degree }} </h5>
          <small> University Name: </small>
          <h5> {{ student.education.university }} </h5>
          <small> Details: </small>
          <h5> {{ student.education.details }} </h5>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    
    <div>
      <h3> Experiance</h3>
    </div>
    
    <div class="container">
      <div class="row align-items-start">
        <div class="col" id="student.experience">
          <small> Start Date: </small>
          <h5> {{ student.experiance.start_date  }} </h5>
          <small> End Date: </small>
          <h5> {{ student.experiance.end_date }} </h5>
          <small> Title: </small>
          <h5> {{ student.experiance.title }} </h5>
          <small> Company Name: </small>
          <h5> {{ student.experiance.company_name }} </h5>
          <small> Details: </small> 
          <h5> {{ student.experiance.details }} </h5>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>

    <div>
      <h3>Skills</h3>
    </div>
    
    <div class="container">
      <div class="row align-items-start">
        <div class="col" id="student.skills">
          
          <small> Name: </small>
          <h5> {{ student.skills.name  }} </h5>
        </div>
      </div>
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
          first: {
            name: "Bit-Please",
            description: "Actualize coding bootcamp",
            url: "anyonecanlearntocode.com",
            screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKjJ51adXD7gTLh2VUV1Dqow5-5QJi4rGJPLK59aYmkrNgjytQCiPPsfG"
            },
          second: {
            name: "Bit-Please",
            description: "Actualize coding bootcamp",
            url: "anyonecanlearntocode.com",
            screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKjJ51adXD7gTLh2VUV1Dqow5-5QJi4rGJPLK59aYmkrNgjytQCiPPsfG"
            },
          third: {
            name: "Bit-Please",
            description: "Actualize coding bootcamp",
            url: "anyonecanlearntocode.com",
            screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKjJ51adXD7gTLh2VUV1Dqow5-5QJi4rGJPLK59aYmkrNgjytQCiPPsfG"
            }
          
          // student_id
          },
        
        
        skills: {
          name: "Teaching"
          },
        experiance: {
          start_date: "Sept 1, 2008",
          end_date: "Sept 1, 2015",
          title: "Rabbi",
          company_name: "Veitzner",
          details: "4th grade Hebrew studies Rebbe"
          // student_id
          },
        education: {
          start_date: "July 19, 2018",
          end_date: "July 19, 2019",
          degree: "Computer Engeneering",
          university: "Actualize",
          details: "Coding details"
          // student_id
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

