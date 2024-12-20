// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jacob",
  middleName: "",
  lastName: "Mukobi",
  message: " Driven to explore the universe. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jmukobi",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jacob-mukobi-6722ab168/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Wide_Headshot.jpg"),
  imageSize: 375,
  message:
    "I'm a master's student in Stanford's Aero/Astro program and a systems engineer at Zipline. I led Stanford's first two fully student-driven space missions and have worked at several space companies. Space exploration gets me out of bed in the morning, I'm great at building things, and I love solving hard problems.",
  resume: "https://drive.google.com/file/d/154AWhDrqMw7td-ZZMQYGkLnYmlCnYslQ/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jmukobi", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Wide_Headshot.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Wide_Headshot.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  softwareSkills: [
    { name: "Solidworks", value: 95 },
    { name: "NX", value: 85 },
    { name: "Ansys", value: 80 },
    { name: "Fusion 360", value: 95 },
    { name: "Inventor Pro", value: 85 },
    { name: "Onshape", value: 80 },
    { name: "STK", value: 70 },
    { name: "FreeFlyer", value: 60 },
  ],
  programmingSkills: [
    { name: "Python", value: 95 },
    { name: "MATLAB", value: 95 },
    { name: "JavaScript", value: 70 },
    { name: "C/C++", value: 80 },
    { name: "HTML", value: 75 },
    { name: "CSS", value: 70 },
  ],
  fabricationSkills: [
    { name: "CNC Mill", value: 90 },
    { name: "3D Printer", value: 95 },
    { name: "Composite Layup", value: 75 },
    { name: "Lathe", value: 80 },
    { name: "Milling Machine", value: 90 },
    { name: "Waterjet", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for opportunities in space! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jmukobi@stanford.edu",
};

const photography = {
  show: false,
  heading: "Photography",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, photography, experiences };
