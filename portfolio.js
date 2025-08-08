/* Updated Portfolio for Mohamed Niyaz */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import niyazProfile from "./assets/images/niyaz.jpg";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Mohamed Niyaz",
  title: "Hi all, I'm Mohamed Niyaz",
  subTitle: emoji("AI Student | Aspiring Full Stack Developer | Data Enthusiast 🚀"),
  resumeLink: "./assets/docs/Software.pdf", // Add link if needed
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/n1yxz",
  linkedin: "https://www.linkedin.com/in/mohamed-niyazii",
  gmail: "niyazmohamed14@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENTHUSIAST WITH GROWING FULL STACK SKILLS",
  skills: [
    emoji("⚡ Exploring web development using React, Node.js, and Flask"),
    emoji("⚡ Developing AI/ML pipelines with Python, scikit-learn, PyTorch"),
    emoji("⚡ Working with REST APIs, Firebase, and cloud deployments"),
    emoji("⚡ Creating dashboards with Power BI and automating insights")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Georgian College",
      logo: require("./assets/images/georgian.jpeg"),
      subHeader: "Post Graduate Certificate in Artificial Intelligence",
      duration: "Jan 2025 - Aug 2025",
      desc: "Focused on machine learning, deep learning, natural language processing, and cloud-based AI solutions."
    },
    {
      schoolName: "Amity University",
      logo: require("./assets/images/amity.jpeg"),
      subHeader: "Bachelor of Computer Applications",
      duration: "Sep 2021 - Jul 2024",
      desc: "Specialized in software development, machine learning fundamentals, data structures, and web technologies."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "55%" },
    { Stack: "Backend", progressPercentage: "85%" },
    { Stack: "AI/ML", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Tahir Hassan Electromechanical Services L.L.C, Dubai, United Arab Emirates",
      companylogo: require("./assets/images/the.png"),
      date: "Jul 2022 – Nov 2023",
      desc: (
      <ul style={{ textAlign: "left" }}>
      <li>Built automation tools, integrated APIs, and supported AI chatbot solutions using Flask and Dialogflow.</li>
      <li>Developed IoT-enabled HVAC monitoring and optimization tools for electromechanical systems, integrating real-time sensor data with predictive maintenance algorithms.</li>
      <li>Created dashboards and mobile tools for technicians to monitor chiller performance, reduce downtime, and improve energy efficiency by up to 20%.</li>
      </ul>
      )
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "Personal and Academic Work",
  projects: [
    {
      image: require("./assets/images/disaster.jpeg"),
      projectName: "Disaster Tweet Analysis with BERT",
      projectDesc: "Classified tweets related to disasters using BERT and NLP pipelines.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/n1yxz/Disaster_Tweet_Analysis_EDA-Cleaning-BERT" }
      ]
    },
    {
      image: require("./assets/images/alexa.png"),
      projectName: "Trivia Buddy – Alexa Voice Skill",
      projectDesc: "Voice-based trivia game built using Alexa Skills Kit and S3 persistence.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/n1yxz/ConvoAI" }
      ]
    }
  ],
  display: true
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Certifications and Credentials",
  achievementsCards: [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      subtitle:
        "Credential earned by completing foundational AWS Cloud concepts, services, security, and architecture.",
      image: require("./assets/images/aws.jpeg"),
      imageAlt: "AWS Logo",
      footerLink: [
        { name: "View Credential", url: "https://www.credly.com/go/qBbocjAe" }
      ]
    },
    {
      title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      subtitle:
        "Credential earned by completing AWS machine learning concepts including supervised/unsupervised learning, model deployment, and AWS ML services.",
      image: require("./assets/images/aws.jpeg"),
      imageAlt: "AWS Logo",
      footerLink: [
        { name: "View Credential", url: "https://www.credly.com/go/vgT0gn3e" }
      ]
    },
    {
      title: "HackerRank Certified Software Engineer",
      subtitle:
        "Certified problem-solving skills, focusing on algorithms, logic, and computational thinking.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        { name: "View Credential", url: "https://www.hackerrank.com/certificates/iframe/7b7be944979a" }
      ]
    }
  ],
  display: true,
  footerLink: [
    {
      name: "More Certificates",
      url: "https://www.linkedin.com/in/YOUR-LINKEDIN-ID/details/certifications/"
    }
  ]
};


const blogSection = {
  title: "Blogs",
  subtitle: "I enjoy writing about my learning and experiments.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Excited to share insights at future events"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
  link: "./assets/docs/software_CV.pdf"
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle: "Let's collaborate or connect.",
  number: "+1-705-305-1309",
  email_address: "niyazmohamed14@gmail.com",
  profile_image: niyazProfile,
  display: true,
};

const twitterDetails = {
  userName: "", 
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
