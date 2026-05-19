import smartcartImg from './assets/smartcart.png';
import quantiumImg from "./assets/quantium.png";
import dashboardImg from './assets/dashboard.png';
import luxuryImg from './assets/luxury.png';
import ecommerceImg from './assets/ecommerce.png';
import trackhireImg from './assets/trackhire.png';
import portfolioImg from './assets/portfolio.png';
import emsImg from './assets/ems.png';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
  FaAws,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

import {
  MdAnalytics,
  MdDashboard,
  MdBarChart,
} from "react-icons/md";

import {
  HiBuildingOffice2,
} from "react-icons/hi2";

import { useEffect, useState } from "react";

export default function Portfolio() {

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const projects = [
  {
    title: "SmartCart – Full Stack E-Commerce Platform",

    desc:
      "Developed a full-stack e-commerce web application with secure authentication, product management, shopping cart functionality, order workflows, and responsive UI. Built REST APIs and integrated SQLite database for inventory and user management.",

    tech: [
      "Python",
      "Flask",
      "SQLite3",
      "REST APIs",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],

    github:
      "https://github.com/harshithaadicherla10/SmartCart_sqlite3",

    image: smartcartImg,
  },

  {
    title: "Employee Management System",

    desc:
      "Built a full-stack employee management application with authentication, CRUD operations, employee record management, session handling, and MySQL database integration using Flask backend architecture.",

    tech: [
      "Python",
      "Flask",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],

    github:
      "https://github.com/harshithaadicherla10/employee-management-system",

    image: emsImg,
  },

  {
    title: "Luxury Interior Design Website",

    desc:
      "Designed and developed a modern responsive interior design website with elegant UI, smooth scrolling effects, interactive sections, responsive layouts, and visually rich frontend design.",

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
      "UI/UX",
    ],

    github:
      "https://github.com/harshithaadicherla10/luxury-interior-website",

    image: luxuryImg,
  },

  {
    title: "SQL E-Commerce Database Analysis",

    desc:
      "Performed SQL-based analysis on e-commerce datasets using joins, aggregations, filtering, and KPI reporting to extract customer insights and business performance metrics.",

    tech: [
      "SQL",
      "MySQL",
      "Database Design",
      "Joins",
      "Aggregations",
      "Data Analysis",
    ],

    github:
      "https://github.com/harshithaadicherla10",

    image: ecommerceImg,
  },

  {
  title: "Modern React Portfolio Website",

  desc:
    "Modern responsive portfolio website built using React and Tailwind CSS showcasing projects, skills, certifications, and contact information with smooth UI animations, glassmorphism effects, and responsive layouts.",

  tech: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Vite",
    "Responsive Design",
    "UI/UX",
  ],

  github:
    "https://github.com/yourusername/react-portfolio",

  live:
    "https://yourportfolio.vercel.app",

  image: portfolioImg,
},

{
  title: "TrackHire – Full Stack Job Tracker",

  desc:
    "Modern full-stack job application tracking system with authentication, role-based access, analytics dashboard, filtering, and PostgreSQL integration built using Flask.",

  tech: [
    "Python",
    "Flask",
    "PostgreSQL",
    "Bootstrap",
    "JavaScript",
    "Chart.js",
    "Gunicorn",
  ],

  github:
    "https://github.com/harshithaadicherla10/trackhire-job-tracker",

  image: trackhireImg,
},

];

  const skills = {
  'Programming Languages': [
    'Python',
    'SQL',
    'JavaScript',
  ],

  'Frontend Development': [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'React.js',
    'Responsive Web Design',
    'Tailwind CSS',
  ],

  'Backend Development': [
    'Flask',
    'REST APIs',
    'Authentication & Authorization',
    'CRUD Operations',
    'API Integration',
    'JWT Authentication',
  ],

  Databases: [
    'MySQL',
    'SQLite3',
    'PostgreSQL',
    'Database Design',
  ],

  'Tools & Platforms': [
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
    'Jupyter Notebook',
  ],

  'Cloud & Deployment': [
    'AWS (Basics)',
    'PythonAnywhere',
    'Render',
    'Vercel',
    'Environment Variables',
  ],

  'Python Libraries': [
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Chart.js',
  ],

  'Data Analytics & Visualization': [
    'Power BI',
    'Excel',
    'Data Visualization',
    'Dashboard Development',
    'EDA',
    'Business Intelligence',
  ],

  'AI & Modern Tools': [
    'Generative AI',
    'OpenAI API',
    'ClaudeAI',
  ],

  Methodologies: [
    'Agile',
    'Scrum',
    'SDLC',
    'Responsive Design',
  ],
};
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/10 backdrop-blur-md"
      : "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
  }`}
>

  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* Logo */}
    <a
      href="#home"
      className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition duration-300"
    >
      Harshitha A.
    </a>

    {/* Nav Links */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

      <a
        href="#home"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Home
      </a>

      <a
        href="#about"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        About
      </a>

      <a
        href="#skills"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Projects
      </a>

      <a
        href="#education"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Education
      </a>

      <a
        href="#certifications"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Certifications
      </a>

      <a
        href="#contact"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Contact
      </a>

    </div>

  </div>

</nav>

 {/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 bg-gradient-to-br from-slate-950 via-[#07152d] to-slate-950"
>

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

    <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  </div>

  <div className="relative z-10 max-w-5xl mx-auto w-full text-center">

    {/* Intro */}
    <p className="text-cyan-400 text-lg md:text-xl font-medium mb-6 tracking-wide">
      Hello, I'm
    </p>

    {/* Name */}
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">

      Harshitha{" "}

      <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
        Adicherla
      </span>

    </h1>

    {/* Role */}
    <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8">
      Python Full Stack Developer
    </h2>

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-4 mb-10">

<span className="animate-float-delay bg-blue-500/10 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/10 hover:scale-105 hover:bg-blue-500/20 transition duration-300">
  Frontend Developer
</span>

<span className="animate-float bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/10 hover:scale-105 hover:bg-cyan-500/20 transition duration-300">
  SQL Developer
</span>

<span className="animate-float-slow bg-purple-500/10 border border-purple-400/20 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/10 hover:scale-105 hover:bg-purple-500/20 transition duration-300">
  Backend Developer
</span>



    </div>

    {/* Description */}
    <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
      Passionate Python Full Stack Developer focused on building scalable
      web applications, REST APIs, authentication systems, and responsive
      user experiences using Flask, React, SQL, and modern deployment
      technologies.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-5">

      {/* Projects */}
      <a
        href="#projects"
        className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-black px-8 py-4 rounded-2xl font-bold transition duration-300 shadow-lg shadow-cyan-500/20"
      >
        View Projects
      </a>

      {/* Resume */}
      <a
        href="#"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 text-white px-8 py-4 rounded-2xl font-bold transition duration-300 shadow-lg shadow-pink-500/20"
      >
        Download Resume
      </a>

    </div>

  </div>

</section>

      {/* About Section */}
<section
  id="about"
  className="min-h-screen flex items-center justify-center border-t border-white/10 py-24 px-6 bg-gradient-to-b from-[#071029] to-[#0f172a]"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Get To Know Me
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        About Me
      </h2>

    </div>

    {/* Main Card */}
    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition duration-500 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div>

          <h3 className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6">

            Building Modern &

            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}Scalable Web Applications
            </span>

          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I’m a passionate Python Full Stack Developer focused on building
            responsive, scalable, and user-friendly web applications using
            modern frontend and backend technologies.
          </p>

          {/* Roles */}
          <div className="flex flex-wrap gap-4 mb-8">

  <span className="animate-float bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/10 hover:scale-105 hover:bg-cyan-500/20 transition duration-300">
    Python Full Stack Developer
  </span>

  <span className="animate-float-slow bg-purple-500/10 border border-purple-400/20 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/10 hover:scale-105 hover:bg-purple-500/20 transition duration-300">
    Frontend Developer
  </span>

  <span className="animate-float-delay bg-blue-500/10 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/10 hover:scale-105 hover:bg-blue-500/20 transition duration-300">
    SQL Developer
  </span>

  <span className="animate-float-fast bg-pink-500/10 border border-pink-400/20 text-pink-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/10 hover:scale-105 hover:bg-pink-500/20 transition duration-300">
    Backend Developer
  </span>

  

</div>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            Skilled in developing full-stack applications with Python, Flask,
            React.js, SQL, REST APIs, authentication systems, and modern UI
            design. Passionate about creating clean, efficient, and impactful
            digital experiences.
          </p>

        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
              10+
            </h4>

            <p className="text-gray-400 text-sm">
              Projects Built
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
              8+
            </h4>

            <p className="text-gray-400 text-sm">
              Certifications
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-3xl font-bold text-cyan-300 mb-2">
              Frontend
            </h4>

            <p className="text-gray-400 text-sm">
              Modern UI Development
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-3xl font-bold text-cyan-300 mb-2">
              Backend
            </h4>

            <p className="text-gray-400 text-sm">
              Flask & REST APIs
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* Skills Section */}
<section
  id="skills"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-br from-slate-950 via-[#07152d] to-slate-950 overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Technical Expertise
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Skills
      </h2>

    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {Object.entries(skills).map(([category, items]) => (

        <div
          key={category}
          className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all duration-500"
        >

          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70"></div>

          {/* Card Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Category */}
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {category}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3">

            {items.map((skill) => (

              <span
                key={skill}
                className="bg-slate-900/70 border border-white/10 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Projects Section */}
<section
  id="projects"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-b from-[#071029] to-[#0f172a] overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        My Recent Work
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Projects
      </h2>

    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {projects.map((project) => (

        <div
          key={project.title}
          className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all duration-500"
        >

          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

          {/* Hover Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Project Image */}
          <div className="relative h-72 overflow-hidden bg-slate-950 flex items-center justify-center">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top bg-slate-950 group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          </div>

          {/* Content */}
          <div className="relative p-8">

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-7 text-center">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="bg-slate-900/70 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-slate-950 px-6 py-3 rounded-2xl font-bold transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                View Project
              </a>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


     {/* Education Section */}
<section
  id="education"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-b from-[#071029] to-[#0f172a] overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Academic Background
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Education
      </h2>

    </div>

    {/* Education Card */}
    <div className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 hover:shadow-cyan-500/10 rounded-[36px] p-8 md:p-10 shadow-2xl transition-all duration-500 overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* Left Side */}
        <div>

          <p className="text-cyan-300 font-semibold tracking-wide uppercase mb-3">
            Bachelor of Technology (B.Tech)
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            Electronics & Communication Engineering
          </h3>

          <p className="text-gray-400 text-lg">
            JNTUH College of Engineering
          </p>

        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 md:text-right">

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl px-6 py-4">

            <p className="text-gray-400 text-sm mb-1">
              Duration
            </p>

            <p className="text-white font-semibold text-lg">
              2021 - 2025
            </p>

          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl px-6 py-4">

            <p className="text-gray-400 text-sm mb-1">
              CGPA
            </p>

            <p className="text-cyan-300 font-bold text-xl">
              7.97 / 10
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Certifications Section */}
<section
  id="certifications"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-br from-slate-950 via-[#07152d] to-slate-950 overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Professional Learning
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Certifications
      </h2>

    </div>

    {/* Certifications Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Python */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-[32px] p-8 min-h-[380px] backdrop-blur-xl shadow-2xl hover:border-cyan-400/30 hover:-translate-y-3 hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-blue-500/10 border border-blue-400/20 p-3 rounded-2xl text-blue-300 text-2xl">
              <FaPython />
            </div>

            <p className="text-blue-300 font-semibold text-lg">
              Udemy
            </p>

          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Python Programming 
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Built strong foundations in Python programming, backend development,
            problem solving, data handling, and modern application development.
          </p>

          <a
            href="https://www.udemy.com/certificate/UC-104b11bc-e00e-4e08-afbf-c0a20cd3e739/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-300 px-5 py-3 rounded-2xl text-cyan-300 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            View Certificate

            <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

      {/* Frontend */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-[32px] p-8 min-h-[380px] backdrop-blur-xl shadow-2xl hover:border-cyan-400/30 hover:-translate-y-3 hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-cyan-500/10 border border-cyan-400/20 p-3 rounded-2xl text-cyan-300 text-2xl">
              <MdDashboard />
            </div>

            <p className="text-cyan-300 font-semibold text-lg">
              freeCodeCamp
            </p>

          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Front End Development Libraries
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Learned modern frontend development concepts including responsive
            UI design, reusable components, and interactive web applications.
          </p>

          <a
            href="https://freecodecamp.org/certification/AHarshitha1001/front-end-development-libraries"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-300 px-5 py-3 rounded-2xl text-cyan-300 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            View Certificate

            <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

      {/* Responsive Web Design */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-[32px] p-8 min-h-[380px] backdrop-blur-xl shadow-2xl hover:border-pink-400/30 hover:-translate-y-3 hover:shadow-pink-500/10 transition-all duration-500 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 opacity-80"></div>

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-pink-500/10 border border-pink-400/20 p-3 rounded-2xl text-pink-300 text-2xl">
              <MdBarChart />
            </div>

            <p className="text-pink-300 font-semibold text-lg">
              freeCodeCamp
            </p>

          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Responsive Web Design
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Learned responsive layouts, accessibility, mobile-first development,
            and modern CSS design principles for web applications.
          </p>

          <a
            href="https://freecodecamp.org/certification/AHarshitha1001/responsive-web-design"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20 hover:border-pink-300 px-5 py-3 rounded-2xl text-pink-300 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20"
          >
            View Certificate

            <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

      {/* GitHub */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-[32px] p-8 min-h-[380px] backdrop-blur-xl shadow-2xl hover:border-gray-400/30 hover:-translate-y-3 hover:shadow-gray-500/10 transition-all duration-500 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 via-slate-500 to-cyan-500 opacity-80"></div>

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-gray-500/10 border border-gray-400/20 p-3 rounded-2xl text-gray-300 text-2xl">
              <FaGithub />
            </div>

            <p className="text-gray-300 font-semibold text-lg">
              LetsUpgrade
            </p>

          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Git & GitHub Bootcamp
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Learned Git version control, GitHub workflows, repositories,
            branching strategies, commits, and collaborative development.
          </p>

          <a
            href="https://drive.google.com/file/d/1ypNPDrMladOUTu-CIU39zbeU8vfE_q8E/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-gray-500/10 to-slate-500/10 border border-gray-400/20 hover:border-gray-300 px-5 py-3 rounded-2xl text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View Certificate

            <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>


      {/* MySQL */}
<div className="group relative bg-white/[0.04] border border-white/10 rounded-[32px] p-8 min-h-[380px] backdrop-blur-xl shadow-2xl hover:border-sky-400/30 hover:-translate-y-3 hover:shadow-sky-500/10 transition-all duration-500 overflow-hidden">

  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500 opacity-80"></div>

  <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative">

    <div className="flex items-center gap-3 mb-5">

      <div className="bg-sky-500/10 border border-sky-400/20 p-3 rounded-2xl text-sky-300 text-2xl">
        <FaDatabase />
      </div>

      <p className="text-sky-300 font-semibold text-lg">
        LetsUpgrade
      </p>

    </div>

    <h3 className="text-2xl font-bold text-white mb-4">
      MySQL Bootcamp
    </h3>

    <p className="text-gray-400 leading-relaxed">
      Learned relational databases, SQL querying, joins, filtering,
      aggregations, schema design, and database management fundamentals.
    </p>

    <a
      href="https://drive.google.com/file/d/16tJg8d7YnqppZA6Dwh1NHhzx1AOXNm6I/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-400/20 hover:border-sky-300 px-5 py-3 rounded-2xl text-sky-300 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
    >
      View Certificate

      <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>

  </div>

</div>


{/* AWS */}
<div className="group relative bg-white/[0.04] border border-white/10 rounded-[32px] p-8 min-h-[380px] backdrop-blur-xl shadow-2xl hover:border-orange-400/30 hover:-translate-y-3 hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden">

  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-cyan-500 opacity-80"></div>

  <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative">

    <div className="flex items-center gap-3 mb-5">

      <div className="bg-orange-500/10 border border-orange-400/20 p-3 rounded-2xl text-orange-300 text-2xl">
        <FaAws />
      </div>

      <p className="text-orange-300 font-semibold text-lg">
        AWS
      </p>

    </div>

    <h3 className="text-2xl font-bold text-white mb-4">
      AWS Cloud & Solutions Architecture
    </h3>

    <p className="text-gray-400 leading-relaxed">
      Explored cloud infrastructure, deployment concepts, scalability,
      and modern cloud-based solution architecture fundamentals.
    </p>

    <a
      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_pqguAcG55mwmo4KLi_1745758253873_completion_certificate.pdf"
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/20 hover:border-orange-300 px-5 py-3 rounded-2xl text-orange-300 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20"
    >
      View Certificate

      <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>

  </div>

</div>

    </div>

  </div>

</section>


{/* Contact Section */}
<section
  id="contact"
  className="relative border-t border-white/10 py-24 px-6 overflow-hidden bg-gradient-to-b from-[#071029] to-[#0f172a]"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">

    {/* Heading */}
    <div className="mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Let’s Connect
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Contact
      </h2>

    </div>

    {/* Contact Card */}
    <div className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 rounded-[36px] p-10 md:p-14 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative">

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-14">
          Open to internships, freelance projects, collaborations,
          and full-time opportunities in Python Full Stack Development,
          Frontend Development, Backend Development, and SQL-based roles.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:harshithaadicherla03@gmail.com"
            className="group/card bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >

            <div className="text-5xl mb-5 text-cyan-300 group-hover/card:text-white flex justify-center transition duration-300">
              <MdEmail />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Email
            </h3>

            <p className="text-gray-400 text-sm break-all">
              harshithaadicherla03@gmail.com
            </p>

          </a>

          {/* GitHub */}
          <a
            href="https://github.com/harshithaadicherla10"
            target="_blank"
            rel="noreferrer"
            className="group/card bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >

            <div className="text-5xl mb-5 text-cyan-300 group-hover/card:text-white flex justify-center transition duration-300">
              <FaGithub />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              GitHub
            </h3>

            <p className="text-gray-400 text-sm break-all">
              github.com/harshithaadicherla10
            </p>

          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/harshithaadicherla10"
            target="_blank"
            rel="noreferrer"
            className="group/card bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >

            <div className="text-5xl mb-5 text-cyan-300 group-hover/card:text-white flex justify-center transition duration-300">
              <FaLinkedin />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm break-all">
              linkedin.com/in/harshithaadicherla10
            </p>

          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Footer Divider */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      {/* Footer */}
<footer className="bg-[#020617] py-10 px-6">

  <div className="max-w-7xl mx-auto gap-5">

    {/* Left */}
    <p className="text-gray-500 text-sm text-center ">
      <a href="#"><b>© 2026 Harshitha Adicherla. All rights reserved.</b></a>
    </p>

  </div>

</footer>
    </div>
  );
}
