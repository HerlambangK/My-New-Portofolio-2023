import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAward, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsMicFill } from "react-icons/bs";
import BmResto from "@/public/img/restoweb.png";
import Quizmify from "@/public/img/quizmify.png";
import Niagaweb from "@/public/img/Niagaweb-studycase.png";
import pokedex from "@/public/img/pokedex.png";

export const links = [
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

export const experiencesData = [
  {
    title: "Bachelor’s degree, Information Technology",
    location: "UPN “VETERAN” YOGYAKARTA",
    description:
      "I graduated after studying at UPN Veteran Yogyakarta. I immediately found a job as a web developer",
    icon: React.createElement(LuGraduationCap),
    date: "Agust 2019",
    linkCV:
      "https://drive.google.com/file/d/1mG8LSaSVqrQGZA19GUgj_o15_NtiZUDR/view?usp=sharing",
  },
  {
    title: "TELKOM INDONESIA (INTERN)",
    location: "Telkom",
    description:
      "Make website system for internship students at PT. Telekomunikasi Indonesia Sleman, Yogyakarta. Provide assistance related to Indihome service disruptions",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Website Production Spesialist",
    location: "Niagahoster",
    description:
      "I design and develop website interfaces, create WordPress websites for clients, and ensure website responsiveness. I also develop interactive graphic layouts and collaborate with the Account Manager Team to meet customer needs.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
    linkCV: "https://www.niagaweb.co.id/",
  },
  {
    title: "Graduated bootcamp Binnar",
    location: "Binnar",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(FaAward),
    date: "2019",
    linkCV: "binar-certificate.pdf",
  },
  // talks
  {
    title: "Lite Bites: Cara Mudah Membuat Website",
    location: "Niagahoster -Talks",
    description: "Talking about wordpress website",
    icon: React.createElement(BsMicFill),
    date: "11 April 2022",
  },
  {
    title: "Tips Membangun Website Toko Online dengan WordPress ",
    location: "Hostinger Indonesia",
    description:
      "Talking about websites and their utilization and advantages in online shops.",
    icon: React.createElement(BsMicFill),
    date: "24 September 2021",
  },
  {
    title:
      "Kelas WA 16.0 : Panduan Membuat Website Company Profile Menggunakan WordPress ",
    location: "Niagahoster",
    description: "Discussing websites utilized in a company profile context.",
    icon: React.createElement(BsMicFill),
    date: "24 September 2021",
  },
];

export const projectsData = [
  {
    title: "Bembie Resto",
    description:
      "Bembie Resto is a website showcasing restaurant details, including menus.",
    tags: ["HTML", "Css", "Javascript", "Webpack", "Karma", "Jasmine"],
    imageUrl: BmResto,
    Github: "https://github.com/HerlambangK/Restoran-Kita",
    priview: "https://61ab76b6238b9566f4153916--restobembi.netlify.app/",
  },
  {
    title: "PokeDex",
    description:
      "Bembie Pokedex is a web app showing pokemon and user can get detail pokemon ",
    tags: ["React"],
    imageUrl: pokedex,
    Github: " https://github.com/HerlambangK/pokedex",
    priview: "https://bembiepokedex.netlify.app/",
  },
  {
    title: "Quizmify",
    description:
      "Quizmify is a quiz platform that offers a variety of questions",
    tags: ["Next Js", "TypeScript", "Prisma", "Tailwind", "ChatGPT", "Vercel"],
    imageUrl: Quizmify,
    Github: " https://github.com/HerlambangK/Quizymify",
    priview: "https://quizmify-herlambangk.vercel.app/",
  },
  {
    title: "Niagaweb",
    description:
      "Platform is a case study of creating an order system interface for users who want to easily customize and order a website.",
    tags: [
      "Next Js",
      "TypeScript",
      "Prisma",
      "Tailwind",
      "ChatGPT",
      "Vercel",
      "Midtrans",
    ],
    imageUrl: Niagaweb,
    Github: "https://github.com/HerlambangK/big-project",
    priview: "https://landing-page-niagaweb.vercel.app/",
  },
];

export const skillsData = [
  "HTML",
  "WordPress",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "AWS",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
