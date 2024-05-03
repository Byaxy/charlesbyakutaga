import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import hoobankImg from "@/public/hoobank.png"
import primegenebiomedicalsolutions from "@/public/primegenebiomedicalsolutions.png"
import gpt3 from "@/public/gpt3.png"

export const links = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Skills",
    id: "#skills",
  },
  {
    name: "Experience",
    id: "#experience",
  },
  {
    name: "Contact",
    id: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Monrovia, Liberia",
    company: "Tracom Liberia Inc.",
    description:["Took part in implementing a tax collection system for the Liberia Revenue Authority.", "Handle the Electronic Fiscal Devices integration with the MILIKI system to facilitate taxpayer invoice monitoring.", "Debug and resolve any software-related issues with deployed Electronic Fiscal Devices to the taxpayer business area."],
    icon: React.createElement(FaJava),
    date: "Mar, 2023 - Present",
  },
  {
    title: "Information Technology Officer",
    location: "Monrovia, Liberia",
    company: "Fidelity Healthcare Services Inc.",
    description: ["Developed and led the implementation of the hospital website for long-term strategic plans and solutions.", "Supported the implementation and training of staff on the hospital management system. Conducted training sessions, created user guides, and provided personalized support to ensure high user adoption of the new system. Received positive feedback from management and staff.", "Provided technical support and leadership on a variety of hospital activities requiring expertise in Information Technology."],
    icon: React.createElement(FaReact),
    date: "Feb, 2022 - Jan, 2023",
  },
  {
    title: "Enrollment Officer",
    location: "Kampala, Uganda",
    company: "Uganda Electoral Commission",
    description: ["Reviewed voter’s application forms, recognizing and promptly addressing discrepancies.", "Registered new voters by inputting their bio-metric data into the Voter Registration System promptly."],
    icon: React.createElement(CgWorkAlt),
    date: "Nov, 2019 - Dec, 2019",
  },
  {
    title: "Data Assistant",
    location: "Kampala, Uganda",
    company: "Kampala Capital City Authority",
    description: ["Created and managed property files, recognizing and promptly addressing discrepancies.","On-boarded new properties by inputting their data into the Computer-Aided Mass Valuation Database system."],
    icon: React.createElement(CgWorkAlt),
    date: "Sept, 2018 - Oct, 2019",
  },
  
] as const;

export const projectsData = [
  {
    title: "Prime Gene Biomedical Solutions",
    description:
      "I am serving as a web developer for this project, which is website for Prime Gene Biomedical Solutions. They are suppliers of biomedical equipment, reagents, and solutions. I handled the design of the website though mainly dictated by the client. The website is hosted on Hostinger. Please note that some parts of the website are still under development.",
    tags: ["React", "React Router DOM", "Tailwind CSS", "react-i18next", "Hostinger", "Next UI", "Swiper"],
    imageUrl: primegenebiomedicalsolutions,
    demoUrl: "https://primegenebiomedicalsolutions.com/",
    sourceCodeUrl:"https://github.com/Byaxy/primegenebiomedicalsolutions"
  },
  {
    title: "HooBank",
    description:
      "I served as a web developer for this practice project, which is a single-page product landing page website for a bank product. The design was created by JS-Mastery using Figma, and the live website is hosted on Firebase. The website is fully responsive and visually appealing on all devices.",
    tags: ["React", "Tailwind CSS", "Firebase", "Figma"],
    imageUrl: hoobankImg,
    demoUrl: "https://modern-bank-web-app.web.app/",
    sourceCodeUrl:"https://github.com/Byaxy/bank-modern-app"
  },
  {
    title: "GPT-3",
    description:
      "I served as a web developer for this practice project, which is a single-page website of GPT-3, the predecessor of ChatGPT. An AI model by OpenAI that generates human-like text, completes language tasks, and generates code. The design was created by JS-Mastery using Figma, and the live website is hosted on Firebase. The website is fully responsive and visually appealing on all devices.",
    tags: ["React", "Tailwind CSS", "Firebase", "Figma"],
    imageUrl: gpt3,
    demoUrl: "https://openai-gpt3.web.app/",
    sourceCodeUrl:"https://github.com/Byaxy/GPT-3"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Framer Motion",
  "REST APIs",
] as const;