//__________________ bio obj _______________________
var bio = {
  "name" : "Ghaida Aldairi",
      "role" : "Web Developer",
      "contacts" : {
            "mobile": 0504923984,
            "email": "Ghaidairi@hotmail.com",
            "github": "Ghaidairi",
            "twitter": "@Ghaidairi",
            "location": "Dammam - KSA"
          },
      "welcomeMessage": "Welcome to my Resume",
      "skills": ["Communication","Programming", "Photografer"],
      "biopic": "images/personal.jpg"
};
//display header info
bio.display = function(){
  //Role and Name
  var role = HTMLheaderRole.replace("%data%", bio.role);
  $('#header').prepend(role);
  var name = HTMLheaderName.replace("%data%", bio.name);
  $('#header').prepend(name);
  //Contact info
  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $('#topContacts').append(mobile);
  $('#lets-connect').append(mobile);
  var email = HTMLemail.replace("%data%", bio.contacts.email);
  $('#topContacts').append(email);
  $('#lets-connect').append(email);
  var github = HTMLtwitter.replace("%data%", bio.contacts.github);
  $('#topContacts').append(github);
  $('#lets-connect').append(github);
  var twitter = HTMLgithub.replace("%data%", bio.contacts.twitter);
  $('#topContacts').append(twitter);
  $('#lets-connect').append(twitter);
  var location = HTMLlocation.replace("%data%", bio.contacts.location);
  $('#topContacts').append(location);
  $('#lets-connect').append(location);
  //personal img
  var img = HTMLbioPic.replace("%data%", bio.biopic);
  $('#header').append(img);
  //welcomeMessage
  var welcomeM = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $('#header').append(welcomeM);
  //skills
  $('#header').append(HTMLskillsStart);
  for(var i=0; i<bio.skills.length; i++){
    var skill = HTMLskills.replace("%data%", bio.skills[i]);
    $('#header').append(skill);
  }
};
//call bio function
bio.display();


//__________________ work obj _______________________
var work = {
  "jobs": [{"employer": "Al-jaber Eye and ENT specialist hospital",
           "title": "COOP Trainee",
           "location": "Alahsa - KSA",
           "dates": "May 2015 - Augest 2015",
           "description": "Cooperative Training Programme (COOP) is an important part of the talent management initiatives, and an essential component of our recruitment strategy to provide an opportunity for Saudi students to integrate their academic learning, theoretical knowledge learned in the classrooms and laboratories with some real work experience."
         },
          {"employer": "Abdulateef Alarfaj Holding Company",
           "title": "IT specialist",
           "location": "Alahsa - KSA",
           "dates": "2017 - Present",
           "description": "An information technology specialist applies technical expertise to the implementation, monitoring, or maintenance of IT systems. Specialists typically focus on a specific computer network, database, or systems administration function."
         }]
};
//display work experiance
work.display = function(){
  $('#workExperience').append(HTMLworkStart);
  for(var i=0; i<work.jobs.length; i++){
    var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $('.work-entry').append(workEmployer+workTitle);
    var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $('.work-entry').append(workDates);
    var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $('.work-entry').append(workLocation);
    var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $('.work-entry').append(workDescription);
  }
};
//call work function
work.display();


//__________________ projects obj _______________________
var projects = {
  "projects": [{
    "title": "1.Establishing a web developer mindset",
    "dates": "July-8-2017",
    "description": "In Establishing a Web Developer Mindset, you'll learn about the history of the languages you'll be studying, the Web, and our place today as Web Developers in an evolving story. After learning about problem solving strategies, you'll write a letter to your future self describing how you can overcome any challenge ahead in this Nanodegree, and set some goals for what you want to achieve. You'll also learn how to get feedback from Udacity Project Reviewers. Go ahead, get started now!",
    "images": []
  },
  {
    "title": "2.Animal trading cards",
    "dates": "July-15-2017",
    "description": "The design prototype used in this project is inspired by trading cards and features a fish you might recognize from a popular animated film. You’ll be creating the card and swapping out the fish with an animal of your choice.",
    "images": ["images/animal.png"]
  },
  {
    "title": "3.Build a portfolio site",
    "dates": "July-29-2017",
    "description": "The first thing potential employers look for isn’t which school you attended or what your GPA was; they want to see what you’ve built! You need a professional portfolio to show off your skills.",
    "images": ["images/portfolio1.png", "images/portfolio2.png"]
  },
  {
    "title": "4.Online resume",
    "dates": "Augest-12-2017",
    "description": "The resume you build will not only help you build important skills, but will also make it easy to show employers why you’re perfect for the job. As you progress through this nanodegree you can update this resume with your new skills and projects.",
    "images": []
  }
]
};
//display projects info
projects.display = function(){
  $('#projects').append(HTMLprojectStart);
  for(var i=0; i<projects.projects.length; i++){
    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $('.project-entry').append(projectTitle);
    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $('.project-entry').append(projectDates);
    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $('.project-entry').append(projectDescription);
    if(projects.projects[i].images.length>0){
      for(var j=0; j<projects.projects[i].images.length; j++){
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $('.project-entry').append(projectImage);
      }
    }
  }
};
//call projects function
projects.display();


//__________________ education obj _______________________
var education = {
  "schools": [{
         "name": "King Faisal University",
         "location": "Alahsa-Hufuf",
         "degree": "bachelor",
         "majors": ["Computer Science"],
         "dates": "2012-2017",
         "url": "https://www.kfu.edu.sa/ar/pages/email.aspx"
       },
       {
         "name": "AlNukbah Modern School",
         "location": "Alahsa-Qatar st.",
         "degree": "High school",
         "majors": ["Science"],
         "dates": "2009-2011",
         "url": "http://alnukhbah.net/Ar/"
        }
       ],
  "onlineCourses": [{
         "title": "[Front-End Web Developer]",
         "school": "Udacity",
         "dates": "July 2017 - Present",
         "url": "https://www.udacity.com/"
       }
       ]
};
education.display = function(){
  $('#education').append(HTMLschoolStart);
  for(var i=0; i<education.schools.length; i++){
    var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $('.education-entry').append(schoolName+schoolDegree);
    var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $('.education-entry').append(schoolDates);
    var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $('.education-entry').append(schoolLocation);
    var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $('.education-entry').append(schoolMajor);
  }

  $('#education').append(HTMLonlineClasses);
  for(var c=0; c<education.onlineCourses.length; c++){
    var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
    var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
    $('#education').append(onlineTitle+onlineSchool);
    var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
    $('#education').append(onlineDates);
    var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);
    $('#education').append(onlineURL);
  }
};
education.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

//
// var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// var mapOptions = {
//   zoom: 4,
//   center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });
//
// // To add the marker to the map, call setMap();
// marker.setMap(map);
