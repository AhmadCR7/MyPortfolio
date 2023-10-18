/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmad Afghan",
  title: "Hi, I'm Ahmad",
  subTitle: emoji(
    "I am a Software Engineer specializing in Full-Stack Development. Experienced in crafting scalable and efficient software for Embedded System, Web & Mobile applications. Proficient in Software Testing, API design, cloud services, and leading cross-functional teams to deliver robust solutions.."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aEUFT0EVeBfuyKhxLdrhEUSo8TcjwSBy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AhmadCR7",
  linkedin: "https://www.linkedin.com/in/ahmadafghan/",
  gmail: "afghan.ahmadmujtaba@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/ahmad.mujtabaafghan/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-typo3"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-mail-bulk"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gatechLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2024 - May 2026"
    },
    {
      schoolName: "San Francisco State University",
      logo: require("./assets/images/sfsuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - May 2021",
      desc: "Classes taken: Software Engineering, Operating Systems, Data Structures, Algorithms Analysis, Database Management, Computer Architecture",
      descBullets: []
    },
    {
      schoolName: "Las Positas College",
      logo: require("./assets/images/lpcLogo.jpeg"),
      subHeader: "Associate in Mathematics and Computer Science",
      duration: "August 2015 - May 2018",
      desc: "Classes taken: Data Structures, Algorithms, Discrete Mathematics, Calculus I II III, Linear Algebra, Physics,Statistics",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Testing/Validation",
      progressPercentage: "95%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Zeiss",
      companylogo: require("./assets/images/zeissLogo.png"),
      date: "June 2021 – July 2023",
      desc: "Led the development and optimization of embedded firmware for IoT-enabled medical devices, emphasizing real-time per- formance, efficient memory use, and robust system reliability.",
      descBullets: []
    },
    {
      role: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      companylogo: require("./assets/images/jp.png"),
      date: "Jan 2021 – May 2021",
      desc: "Worked as a front end developer on a team of 6 to develop a web application that allows users to analyze and visualize stock data."
    },
    {
      role: "Full Stack Developer - Freelancer",
      company: "UpWork",
      companylogo: require("./assets/images/upworkLogo.png"),
      date: "Dec 2017 – Dec 2020",
      desc: "Worked as a full stack developer to develop web/ mobile applications for clients around the world."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Product Management Professional Certificate",
      subtitle:
        "I've honed my skills in strategic planning, roadmapping, and customer development. This certification has empowered me to lead product teams more effectively and make data-driven decisions for successful product launches.",

      image: require("./assets/images/LinkedinLearningLogo.png"),
      imageAlt: "LinkedIn Learning Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/67c2407dfbe583287f09403232d5ed26e1230fa1b387d40d95994f4fdffd4f7c"
        }
      ]
    },
    {
      title: "AWS Developer Associate",
      subtitle:
        "AWS Certified Developer – Associate validates your technical expertise in developing and maintaining applications on the AWS platform.",
      image: require("./assets/images/AWSDevCer.png"),
      imageAlt: "AWS Developer Associate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "AWS Certified Cloud Practitioner is an entry-level certification that is intended to demonstrate a basic level of knowledge and skills of Amazon AWS cloud.",
      image: require("./assets/images/AWSCloudCer.png"),
      imageAlt: "AWS Developer Associate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "The Web Developer Bootcamp",
      subtitle: "Full Stack Web Development Bootcamp: HTML, CSS, React & Node",
      image: require("./assets/images/UdemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-c6748bf1-4c0e-41ef-8163-2def828ec046/"
        }
      ]
    },
    {
      title: "Modern React with Redux",
      subtitle:
        "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
      image: require("./assets/images/UdemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-c6748bf1-4c0e-41ef-8163-2def828ec046/"
        }
      ]
    },
    {
      title: "Tosca Automation Specialist ",
      subtitle: "Automation Certification for Tosca",
      image: require("./assets/images/ToscaLogo.png"),
      imageAlt: "Tosca Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.tricentis.com/academy/certification/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {};

// Podcast Section

const podcastSection = {};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 4693210894",
  email_address: "afghan.ahmadmujtaba@gmail.com"
};

// Twitter Section

const twitterDetails = {};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
