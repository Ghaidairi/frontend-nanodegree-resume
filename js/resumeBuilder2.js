/*
This is empty on purpose! Your code to build the resume will go here.

///$("#main").append("Ghaida");
var awesomeThoughts = "I am Ghaida and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
//$("#main").append(awesomeThoughts);
*/
/*
var formattedName = HTMLheaderName.replace("%data%", "Ghaida Aldairi");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
  "name": "Ghaida",
  "role": "Web Developer",
  "contactInfo": {
    "twitter":"ghaidairi",
    "mobile":"0504892748"
  },
  "pictureURL": "https://images-na.ssl-images-amazon.com/images/I/31YYKAVK11L._SY300_.jpg",
  "message": "Hello there",
  "skills": ["paint"]
}
if(bio["skills"].length > 0){
  $("#header").append(HTMLskillsStart);

  var
}
$("#main").prepend(bio);

*/
/*
var work = {};
  work.position = "manager";
  work.employer = "Majed";
  work.experiance = 5;
  work.city = "alahsa";

var education = {};
  education["lastSchool"] = "nukbah";

$("#main").append(work["position"]);
$("#main").append(education.lastSchool);

*/
/* there is a mistake and I dont know it
var education = {
  "school": [
    {
  "name": "Ghaida",
  "role": "Web Developer"
  },{
    "name": "Ghaida",
    "role": "Web Developer"
  }]
}

var work = {};
  work.position = "manager";
  work.employer = "Majed";
  work.experiance = 5;
  work.city = "alahsa";

var project = {};
    work.name = "maintanance";
    work.department = "hr";
    work.city = "alahsa";

var skills = ["paint", "read"];
var bio = {
  "name": "Ghaida",
  "role": "Web Developer",
  "contactInfo": {
    "twitter":"ghaidairi",
    "mobile":"0504892748"
  },
  "pictureURL": "https://images-na.ssl-images-amazon.com/images/I/31YYKAVK11L._SY300_.jpg",
  "message": "Hello there",
  "skills": skills

}

if(bio["skills"].length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkills);
}
*/
var formattedEmployer = HTMLworkEmployer.replace("%data%", "Mollie Marie Pettit");
$("#header").append(formattedEmployer);
//Got the above two lines of code from forum. Not sure if it's in the right place
var bio = {
  name : string
      role : string
      contacts : an object with
            mobile: string
            email: string
            github: string
            twitter: string (optional)
            location: string
      welcomeMessage: string
      skills: array of strings
      biopic: string url
      display: function taking no parameters
}



var skills = ["awesomeness", "programming", "teaching", "CSS"];

var bio = {
	"name": "Mollie Marie Pettit",
	"title": "Geoscientist",
	"picture": "images/me.jpg",
	"contacts": {
		"mobile": "056-985-3123",
		"email": "mollie.pettit@alumni.stanford.edu",
		"github": "molliemarie",
		"location": "Abu Dhabi, UAE"
	},
	"WelcomeMessage": "Welcome and stuff and stuff and stuff.",
	"skills": skills
};

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$('#header').append(formattedHeaderName);

//if statement Quiz
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",
		bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[3]);
	$("#skills").append(formattedSkill);
}


var work = {
    "jobs": [
        {
            "employer": "Abdulateef Alarfaj",
            "city": "Alahsa, KSA",
            "title": "IT Specialist",
            "years": "2017 - Present"
        },
        {
            "employer": "Stanford University",
            "city": "Palo Alto, CA, USA",
            "title": "Researcher",
            "years": "2010-2013"
        }
    ]
}

//for-in loop Quiz
var formattedWork;
for(job in work.jobs){
  $('#workExperience').append(HTMLworkStart);
  var formattedEmployer2 = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer2 + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}

/*
var education = {
	"schools": [
		{
			"school": "Stanford University",
			"city": "Palo Alto",
			"degree": "Masters",
			"major": ["Geology"]
		},
		{
			"school": "West Virginia University",
			"city": "Morgantown",
			"degree": "BS",
			"major": ["Mathematics", "Geology"]
		}
	],
	"online courses": [
		{
			"class":"Javascript Basics",
			"school":"Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"class": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"

		},
		{
			"class": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud775"
		}
	]
}


var projects = {
	"projects": [
		{
			"name":"Mockup to Website",
			"number":"P1",
			"description":"You will be provided with a design
			mockup as a PDF-file and must replicate that design
			in HTML and CSS. You will develop a responsive website
			that will display images, descriptions and links to each
			of the portfolio projects you will complete throughout the
			course of the Front-End Web Developer Nanodegree."
		},
		{
			"name":"Interactive Resume",
			"number":"P2",
			"description":"You'll demonstrate your mastery of the
			language's syntax through a series of challenges. Each
			multipart problem mimics a real-life challenge that
			front-end developers face. You'll be required to write
			clean code and to apply your knowledge of variables,
			objects, JSON, functions and control flow to successfully
			solve the challenges."
		},
		{
			"name":"Classic Arcade Game Clone",
			"number": "P3",
			"description":"You will be provided with visual assets
			and a game loop engine; using these tools you must add
			a number of entities to the game including the player
			characters and enemies to recreate the classic arcade
			game Frogger."
		},
		{
			"name": "Website Optimization",
			"number":"P4",
			"description": "You will optimize a provided website
			with a number of optimization- and performance-related
			issues so that it achieves a target PageSpeed score and
			runs at 60 frames per second."
		},
		{
			"name":"Neighborhood Map Project",
			"number":"P5",
			"description": "You will develop a single-page
			application featuring a map of your neighborhood or a
			neighborhood you would like to visit. You will then add
			additional functionality to this application, including:
			map markers to identify popular locations or places you’d
			like to visit, a search function to easily discover these
			locations, and a listview to support simple browsing of all
			locations. You will then research and implement third-party
			APIs that provide additional information about each of these
			locations (such as StreetView images, Wikipedia articles, Yelp
			reviews, etc)."
		},
		{
			"name": "Feed Reader Testing",
			"number": "P6",
			"description": "In this project, you will be learning
			about testing with Javascript. Testing is an important
			part of the development process and many organizations
			practice a standard known as 'test-driven development'
			or TDD. This is when developers write tests first,
			before they ever start developing their application.
			Whether you work in an organization that writes tests
			extensively to inform product development or one that
			uses tests to encourage iteration, testing has become an
			essential skill in modern web development!"
		}
	]
}

/*
for (var job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
*/
