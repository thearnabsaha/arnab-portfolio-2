import {
  appwrite,
  arc,
  aws,
  css,
  des,
  fan,
  figma,
  firebase,
  git,
  html,
  java,
  javascript,
  lead,
  mob,
  mongodb,
  newLogo2,
  nodejs,
  per,
  reach,
  reactImage,
  reactjs,
  redux,
  sass,
  scale,
  software,
  typescript,
  world,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "React",
    icon: reactImage,
    hide: false,
  },
  {
    title: "Frontend",
    icon: fan,
    hide: false,
  },
  {
    title: "UI/UX",
    icon: des,
    hide: false,
  },
  {
    title: "Figma",
    icon: reach,
    hide: true,
  },
  {
    title: "Design",
    icon: arc,
    hide: true,
  },
  {
    title: "Responsive",
    icon: mob,
    hide: false,
  },
  {
    title: "Scalable",
    icon: scale,
    hide: true,
  },
  {
    title: "Performance",
    icon: per,
    hide: true,
  },
];

const technologies = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SASS",
    icon: sass,
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Appwrite",
    icon: appwrite,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Frontend/UI-UX Freelancer",
    company_name: "10+ projects",
    icon: newLogo2,
    iconBg: "black",
    date: "July 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company_name: "Grevelops",
    icon: lead,
    iconBg: "black",
    date: "Oct 2020 - Feb 2022",
    points: [
      "Developed and maintained the whole front-end framework.",
      "API Integration, Authentication and Authorization using AWS, State management.",
      "UI Development, Optimizations, debugging, testing and designs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Education",
    company_name: "IIEST SHIBPUR",
    icon: world,
    iconBg: "black",
    date: "Dec 2020 - Dec 2024",
    points: [
      "Contributed as a student developer as Google developer member",
      "8+ CGPA",
      "Contributed to many startups",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arnab proved me wrong.",
    name: "Vinayak Kalra",
    designation: "Tech Lead",
    company: "QuadB Tech",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arnab does.",
    name: "Ankush Das",
    designation: "Co-fonder",
    company: "Grevelops",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Arnab designed our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Amit Singh",
    designation: "Founder",
    company: "Elicipt",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
 
];

export { services, technologies, experiences, testimonials, projects };
