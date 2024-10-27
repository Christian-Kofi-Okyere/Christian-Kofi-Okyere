import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research Intern, Mathematics Department",
    company_name: "Colby College",
    // company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Developed a framework to explore happy numbers for S3,b​ using Python, pioneering a generalization for higher-dimensional cases of Sk,b​ for k>2",
      "Implemented simulations to analyze the behavior of happy numbers in negative base systems (bases ranging from -13 to 13), writing algorithms to convert numbers and calculate transformations efficiently.",
      "Created recursive Python functions to track the number of iterations needed for numbers to reach fixed points or cycles, executing simulations over thousands of runs to ensure consistency with theoretical predictions.",
      "Analyzed fixed points and cycles in the transformation process, identifying bounds and proving the absence of negative fixed points for specific base systems −10 ≤ b ≤ −2",
      "Optimized code performance, reducing simulation runtime while analyzing statistical trends across multiple base systems.",
    ],
  },
  // {
  //   title: "Software Developer",
  //   company_name: "Newgen Software",
  //   company_website: "https://newgensoft.com/home-india/",
  //   icon: newgen,
  //   iconBg: "#E6DEDD",
  //   date: "Mar 2021 - Dec 2021",
  //   points: [
  //     "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
  //     "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
  //     "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
  //     "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
  //   ],
  // },
  // {
  //   title: "Software Engineer Intern",
  //   company_name: "Skillrisers",
  //   company_website: "https://www.skillrisers.com/",
  //   icon: skillrisers,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2020 - Jul 2020",
  //   points: [
  //     "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
  //     "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
  //     "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
  //     "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Self-employed",
  //   company_website: "https://proximus.surge.sh/index.html",
  //   icon: proximus,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2018 - Jan 2021",
  //   points: [
  //     "Spearheaded the development of a fully responsive website for the college coding society.",
  //     "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
  //     "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
  //     "Curated and designed challenging coding problems for college competitions.",
  //   ],
  // },
];

const projects = [
  {
    name: "MIT Hackathon, MITHacks",
    description:
      "Meet Lingua Explorer: an AR-powered app that transforms everyday objects into interactive, multilingual learning experiences for children. Developed at HackMIT, it brings language learning to life by vocalizing object names in English, French, and Spanish, making exploration fun, immersive, and intuitive.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Vuforia Engine",
        color: "blue-text-gradient",
      },
    ],
    // image: aptihealthWeb,
    // hosted_link: "https://www.linkedin.com/feed/update/urn:li:activity:7111597593524121600/",
  },
  {
    name: "Sudoku Solver",
    description:
      "Meet Sudoku Solver: a stack-based tool designed to solve the classic 9x9 Sudoku puzzle efficiently. Using a depth-first search algorithm, it fills each cell with precision, ensuring no repeated numbers in rows, columns, or subgrids. With intuitive backtracking and a dynamic visualization, this solver brings the challenge of Sudoku to life in a structured, interactive way.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      // {
      //   name: "sendbird",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "twilio",
      //   color: "pink-text-gradient",
      // },
    ],
    // image: aptihealthApp,
    // hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
];

const personalInfo = {
  name: "Christian",
  fullName: "Christian Okyere",
  email: "okyerechristian101@gmail.com",
  role: "Software Developer",
  about: `I'm Christian Okyere, a dedicated software developer proficient in Python, Java and JavaScript, 
  with a strong command of frameworks like React.js, React Native, and Node.js. I'm quick to adapt and 
 passionate about collaborating with clients to deliver scalable, intuitive, and impactful solutions that 
 address real-world challenges. Let’s turn your vision into reality!"`,
  projectsIntro: `These projects highlight my skills and experience through real-world examples of my work. 
  Each project includes a brief description and live demos, showcasing my ability to tackle complex problems, 
  work across various technologies, and manage projects efficiently`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/christianokyere07/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Christian-Kofi-Okyere",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
