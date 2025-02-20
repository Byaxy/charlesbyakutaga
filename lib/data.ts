import primegenebiomedicalsolutions from "@/public/primegenebiomedicalsolutions.png";
import inventory from "@/public/inventory.png";
import cverify from "@/public/cverify.png";

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
    name: "Skills",
    id: "#skills",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Contact",
    id: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Sales and Inventory Management App",
    description:
      "A comprehensive sales and inventory management system with real-time tracking of sales transactions and inventory levels. Secure user authentication, scalable database management, and efficient file storage. Interactive dashboards including revenue tracking, sales analysis, and purchase orders. Admin Login credentials: Email:- admin@gmail.com. Password:- 12345678 / User Login credentials: Email:- user@gmail.com. Password:- 12345678",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Appwrite",
      "Shadcn UI",
      "Tanstack Query",
      "Zustand",
      "TypeScript",
      "Zod",
      "React Hook Form",
    ],
    imageUrl: inventory,
    demoUrl: "https://homelandinteriors-demo.vercel.app",
    sourceCodeUrl: "https://github.com/Byaxy/homeland-interiors",
  },
  {
    title: "Prime Gene Biomedical Solutions",
    description:
      "I am serving as a web developer for this project, which is website for Prime Gene Biomedical Solutions. They are suppliers of biomedical equipment, reagents, and solutions. I handled the design of the website though mainly dictated by the client. The website is hosted on Hostinger. Please note that some parts of the website are still under development.",
    tags: [
      "React",
      "React Router DOM",
      "Tailwind CSS",
      "react-i18next",
      "Hostinger",
      "Next UI",
      "Swiper",
    ],
    imageUrl: primegenebiomedicalsolutions,
    demoUrl: "https://primegenebiomedicalsolutions.com/",
    sourceCodeUrl: "https://github.com/Byaxy/primegenebiomedicalsolutions",
  },
  {
    title: "CVerify",
    description:
      "I served as the lead front-end developer for this project during the Zidio Development Internship, which is a web application that simplifies certificate management and authentication. Administrators can: Upload certificate data via Excel. Manage certificates digitally Control access and verification Users can: Search and verify certificates Download PDF certificates instantly. Admin credentials: Demo email: cverify.admin@gmail.com, Demo password: 12345678, Sample certificate IDs: CERT-M42UG4OK-9F1AC7E2",
    tags: [
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tanstack Query",
    ],
    imageUrl: cverify,
    demoUrl: "https://cverify.vercel.app/",
    sourceCodeUrl: "https://github.com/Byaxy/certificate-verification-system",
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
  "Zustand",
  "Tanstack Query",
  "Node.js",
  "Git",
  "GitHub",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Framer Motion",
  "REST APIs",
] as const;
