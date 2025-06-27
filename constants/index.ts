import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "@/public/carhub.jpg";
import realtorImg from "@/public/realtor.jpg";
import ecommerceImg from "@/public/ecommerce.jpg";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/prince-kumar-546b28237/",
  github: "https://github.com/princekumarg",
  resume: "/resume.pdf",
  source_code: "https://github.com/princekumarg/portfolio",
  email: "agarwal8789@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Passed B.Tech in Computer Science Engineering",
    location: "Chittoor, IN",
    description:
      "Completed B.Tech Degree, gaining a solid foundation in various subjects and essential skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Open Source At SSOC",
    location: "Remote, IN",
    description:
      "Successfully completed an Open Source Contribution 6-month HTML,CSS,JS Contribution. Acquired expertise in HTML,CSS,JS and animation",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelancer React.js Developer",
    location: "Bangalore, IN",
    description:
      "Working as a freelance React.js Developer, I have collaborated with various clients to create responsive and dynamic web applications.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "CarHub",
    description:
      "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: carhubImg,
    projectUrl: "https://carhb.vercel.app/",
  },
  {
    title: "Realtor",
    description:
      "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "https://real-estate-app-react.vercel.app/",
  },
  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Shadcn UI",
  "Three.js",
  "Framer Motion",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "Redux",
  "Express",
  "Python",
  "Django",
] as const;

// Owner name
export const OWNER_NAME = "Shubham Kumar";
