import ustjhs from "../assets/education/ustjhs.png";
import ustshs from "../assets/education/ustshs.png";
import angular from "../assets/logo/angular.png";
import bootstrap from "../assets/logo/bootstrap.svg";
import cisco from "../assets/logo/cisco.png";
import css from "../assets/logo/css.png";
import dgraph from "../assets/logo/dgraph.png";
import docker from "../assets/logo/docker.png";
import express from "../assets/logo/express.png";
import fastify from "../assets/logo/fastify.png";
import firebaseHost from "../assets/logo/firebaseHost.png";
import firestore from "../assets/logo/firestore.png";
import gcp from "../assets/logo/gcp.png";
import gcpFx from "../assets/logo/gcpFx.png";
import golang from "../assets/logo/golang.png";
import java from "../assets/logo/java.png";
import javascript from "../assets/logo/javascript.png";
import material from "../assets/logo/material.png";
import mysql from "../assets/logo/mysql.png";
import oracle from "../assets/logo/oracle.png";
import postgresql from "../assets/logo/postgresql.png";
import premise from "../assets/logo/premise.png";
import python from "../assets/logo/python.png";
import react from "../assets/logo/react.svg";
import scss from "../assets/logo/sass.png";
import spring from "../assets/logo/spring.png";
import sql from "../assets/logo/sql.png";
import svelte from "../assets/logo/svelte.png";
import typescript from "../assets/logo/typescript.png";
import ubuntu from "../assets/logo/ubuntu.png";
import windows from "../assets/logo/windows.png";
import wsl from "../assets/logo/wsl.png";
import { Certifications, Education, Experience, Skill } from "../types";
import michigan from "../assets/certificates/michigan.jpg";
import comptia from "../assets/certificates/comptia.png";
import philnits from "../assets/certificates/philnits.png";
import ustcics from "../assets/education/ustcics.png";
import tvo from "../assets/experiences/tvo.png";
import linkedin from "../assets/contact/linkedin.png";

export const frontEndTech: Skill[] = [
  { name: "Angular", percent: 90, logo: angular },
  { name: "React", percent: 60, logo: react },
  { name: "Docker", percent: 25, logo: docker },
  { name: "Svelte", percent: 30, logo: svelte },
];

export const designing: Skill[] = [
  { name: "Material", percent: 55, logo: material },
  { name: "Bootstrap", percent: 70, logo: bootstrap },
  { name: "Vanilla CSS", percent: 80, logo: css },
];

export const deploymentStrategies: Skill[] = [
  { name: "Firebase Hosting", percent: 70, logo: firebaseHost },
  { name: "GCP", percent: 35, logo: gcp },
  { name: "On-Premise", percent: 40, logo: premise },
];

export const networkingTech: Skill[] = [
  { name: "Cisco", percent: 80, logo: cisco },
  { name: "Windows Server", percent: 50, logo: windows },
  { name: "Ubuntu", percent: 60, logo: ubuntu },
  { name: "WSL", percent: 75, logo: wsl },
];

export const backendTech: Skill[] = [
  { name: "Express", percent: 60, logo: express },
  { name: "Fastify", percent: 50, logo: fastify },
  { name: "Spring", percent: 40, logo: spring },
  { name: "Google Cloud Functions", percent: 60, logo: gcpFx },
];

export const languages: Skill[] = [
  { name: "TypeScript", percent: 80, logo: typescript },
  { name: "JavaScript", percent: 80, logo: javascript },
  { name: "CSS", percent: 60, logo: css },
  { name: "SCSS", percent: 50, logo: scss },
  { name: "Java", percent: 70, logo: java },
  { name: "Python3", percent: 60, logo: python },
  { name: "SQL", percent: 70, logo: sql },
  { name: "Go", percent: 60, logo: golang },
];

export const databases: Skill[] = [
  { name: "PostgreSQL", percent: 70, logo: postgresql },
  { name: "MySQL", percent: 40, logo: mysql },
  { name: "Dgraph", percent: 80, logo: dgraph },
  { name: "Oracle", percent: 35, logo: oracle },
  { name: "Firestore", percent: 70, logo: firestore },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science",
    school:
      "University of Santo Tomas College of Information and Computing Sciences",
    fieldOfStudy: "Information Technology",
    year: 2022,
    logo: ustcics,
    awards: [
      { description: "Dean's List", year: 2021, month: "June" },
      { description: "Dean's List: 1st Honors", year: 2020, month: "December" },
      { description: "Dean's List: 5th Honors", year: 2020, month: "June" },
      { description: "Dean's List: 4th Honors", year: 2019, month: "December" },
      { description: "Dean's List: 1st Honors", year: 2019, month: "June" },
      { description: "Dean's List: 2nd Honors", year: 2018, month: "December" },
    ],
  },
  {
    degree: "Secondary Education",
    school: "University of Santo Tomas Senior High School",
    year: 2018,
    logo: ustshs,
    awards: [{ description: "High Honors", year: 2018 }],
  },
  {
    degree: "Secondary Education",
    school: "University of Santo Tomas Junior High School",
    year: 2016,
    logo: ustjhs,
    awards: [{ description: "5th Honorable Mention", year: 2016 }],
  },
];

export const certifications: Certifications[] = [
  {
    name: "Python Data Structures",
    issuer: "University of Michigan",
    logo: michigan,
  },
  {
    name: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    logo: michigan,
  },
  {
    name: "Using Databases with Python",
    issuer: "University of Michigan",
    logo: michigan,
  },
  {
    name: "CompTIA IT Fundamentals+",
    issuer: "CompTIA",
    logo: comptia,
  },
  {
    name: "PhilNITS IP Certification",
    issuer: "PhilNITS",
    logo: philnits,
  },
];

export const experiences: Experience[] = [
  {
    company: "TVO Co Ltd",
    endDate: "Present",
    startDate: "January 2022",
    logo: tvo,
    position: "Full Stack Developer Intern",
  },
];

export const _links: { target: string; text: string }[] = [
  { target: "about", text: "About Me" },
  { target: "knowledge", text: "Education & Certificates" },
  { target: "experience", text: "Experience" },
  { target: "skills", text: "Skills" },
];

export const _contacts: {
  logo?: string;
  details: string;
  icon?: string;
  title?: string;
}[] = [
  {
    logo: linkedin,
    details: "https://www.linkedin.com/in/viany-manuel/",
    title: "LinkedIn",
  },
  { icon: "call", details: "09xx-123-xxxx" },
  { icon: "mail", details: "viany.manuel.iics@ust.edu.ph" },
];
