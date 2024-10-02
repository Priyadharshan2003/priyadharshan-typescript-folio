import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  infobyte,
  ss,
  delloite,
  jpm,
  shogi,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "App Developer Intern",
    companyName: "Sona Star",
    icon: ss,
    iconBg: "#383E56",
    date: "May 2023 – Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed and prototyped UI/UX for an app using Figma and Flutter.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed frontend code while working with cross-functional teams to integrate backend APIs.",
    ],
  },
  {
    title: "Data Analyst Intern",
    companyName: "Oasis Infobyte",
    icon: infobyte,
    iconBg: "#383E56",
    date: "Mar 2023 – May 2023",
    points: [
      "Remotely served as a Data Science intern, utilizing skills in Data Analysis, Machine Learning, and Microsoft Power BI.",
      "Analyzed intricate datasets and developed predictive models to drive efficiency improvements.",
      "Presented data-driven insights through compelling Power BI visualizations.",
    ],
  },
  {
    title: "Software Analyst Intern (Virtual Experience Program)",
    companyName: "JPMorgan Chase & Co",
    icon: jpm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 – Mar 2023",
    points: [
      "Collaborated on software projects using Python, React.js, and TypeScript for developing user interfaces and backend APIs.",
      "Employed Git for version control, streamlining team collaboration and reducing development time by 10%.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Virtual Experience Program Participant (STEM)",
    companyName: "Deloitte",
    icon: delloite,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Gained practical skills and experience to prepare for the world of work. Programmes are self-paced so I leant on my own time.",
      "Applied newly acquired skills in Tableau and Data Structures to solve real-world technical scenarios.",
      "tasks across consulting, financial advisory, risk advisory, corporate tax.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Shogi-Tech Received ₹2Lakh Seed Funding",
    description:
      "Shogi Live Game Play Tracking is an innovative project designed to provide real-time tracking of Shogi (Japanese chess) game plays using sensors and web technologies. The project integrates hardware and software to automate the detection of Shogi piece movements on a physical board and display the live game state on a web application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shogi,
    sourceCodeLink: "https://github.com/Priyadharshan2003/Shogi-Live-Game-play-Tracking.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
