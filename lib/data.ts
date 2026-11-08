import type { Project, Experience, SkillCategory, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/Sridioite",
  linkedin: "https://linkedin.com/in/abhishekkji",
  email: "abhikumar55789@gmail.com",
};

export const projects: Project[] = [
  {
    id: "inkflow",
    title: "InkFlow",
    description:
      "A full-stack blog platform with FastAPI, JWT authentication, PostgreSQL, and Docker/Nginx deployment.",
    longDescription:
      "Developed a full-stack blog platform using FastAPI exposing RESTful APIs for CRUD operations on blog posts. Integrated PostgreSQL with SQLAlchemy ORM, implemented JWT auth with password hashing, built a Jinja2 + Bootstrap frontend, managed schema migrations with Alembic, and deployed with Docker, AWS S3, Nginx, and SSL. Includes Pytest test coverage.",
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Docker",
      "Nginx",
      "AWS S3",
      "Pytest",
      "Jinja2",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github: "https://github.com/Sridioite/InkFlow",
    demo: "https://github.com/Sridioite/InkFlow",
    featured: true,
  },
  {
    id: "bytesniffer",
    title: "ByteSniffer",
    description:
      "A Python-based Deep Packet Inspection tool that parses PCAP captures and classifies network traffic by application.",
    longDescription:
      "Built a Deep Packet Inspection tool that reads PCAP captures, parses Ethernet, IPv4, TCP, and UDP headers, and tracks connections using 5-tuple flow identification. Extracts TLS SNI and HTTP Host headers to classify applications like YouTube and Google even in encrypted HTTPS traffic. Implements a rule-based blocking system and generates per-application traffic reports.",
    tags: ["Python", "TCP/IP", "TLS", "PCAP", "Deep Packet Inspection", "Networking"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    github: "https://github.com/Sridioite/ByteSniffer",
    demo: "https://github.com/Sridioite/ByteSniffer",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "intern-kodnest",
    type: "work",
    title: "Automation Testing Intern",
    organization: "KodNest (Online)",
    period: "Feb 2026 – May 2026",
    description:
      "Applied automation testing concepts, tools, and workflows to validate application functionality and identify defects. Practiced structured testing and debugging, building quality-assurance skills that complement backend and API development.",
    tags: ["Pytest", "Automation Testing", "QA", "Debugging"],
  },
  {
    id: "achievement-hacknoc",
    type: "work",
    title: "Contributor — Hack-Nocturne (NextKick) 2025",
    organization: "Hackathon",
    period: "March 2025",
    description:
      "Contributed to an AI-based football scouting platform built with Node.js, Prisma, PostgreSQL, and YOLOv8 during the Hack-Nocturne hackathon.",
    tags: ["Node.js", "Prisma", "PostgreSQL", "YOLOv8", "AI"],
  },
  {
    id: "edu-smvit",
    type: "education",
    title: "Bachelor of Engineering — Computer Science & Engineering",
    organization: "Sir M. Visvesvaraya Institute of Technology, Bengaluru",
    period: "2022 – 2026",
    description:
      "CGPA: 8.24. Relevant coursework includes Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Object-Oriented Programming, and Software Engineering.",
    tags: ["DSA", "OS", "DBMS", "Computer Networks", "OOP"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI" },
      { name: "RESTful API Design" },
      { name: "SQLAlchemy ORM" },
      { name: "Pydantic" },
      { name: "Alembic" },
      { name: "JWT Authentication" },
      { name: "Swagger / OpenAPI" },
      { name: "Node.js / Express" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "MongoDB" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Nginx" },
      { name: "AWS S3" },
      { name: "Git / GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Pytest" },
      { name: "Automation Testing" },
    ],
  },
  {
    category: "Frontend (Basic)",
    skills: [
      { name: "HTML / CSS" },
      { name: "Bootstrap" },
      { name: "Jinja2" },
      { name: "React.js" },
    ],
  },
];
