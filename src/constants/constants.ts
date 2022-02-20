import { Skill } from "../types";
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
import spring from "../assets/logo/spring.png";
import sql from "../assets/logo/sql.png";
import svelte from "../assets/logo/svelte.png";
import typescript from "../assets/logo/typescript.png";
import ubuntu from "../assets/logo/ubuntu.png";
import windows from "../assets/logo/windows.png";
import wsl from "../assets/logo/wsl.png";

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
  { name: "SCSS", percent: 50, logo: css },
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
