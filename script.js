// Data
const projects = [
  {
    title: "Proyecto Alpha",
    description: "Cómo diseñe UX/UI de una plataforma SaaS para creadores",
    tags: ["Investigación", "Diseño UX UI", "Proceso end-to-end"],
    image: "img/1creador.png",
    href: "project.html",
  },
  {
    title: "Proyecto Beta",
    description: "Cómo diseñé una app para gestionar inventario de forma simple, rápida y accesible",
    tags: ["Investigación", "Diseño UX UI", "Desarrollo"],
    image: "img/almacen inventopro.png",
    href: "project.html?id=2",
  },
  {
    title: "Proyecto Gamma",
    description: "Cómo diseñé un asistente digital para mejorar la organización y ejecución del proceso UX/UI",
    tags: ["Investigación", "V0vercel", "Diseño UX UI"],
    image: "img/ux process  progress.png",
    href: "project.html?id=3",
  },
  {
    title: "Proyecto Delta",
    description: "Cómo convertí investigación de mercado en una propuesta de valor para una app de bienestar emocional",
    tags: ["Investigación", "Diseño UX", "Estrategia de Producto"],
    image: "img/anima4.png",
    href: "project.html?id=4",
  },
];

const craftItems = [
  {
    title: "Diseño UX",
    description: "UX research, Prototipado, IA aplicada al diseño.",
    year: "2023",
    href: "#",
  },
  {
    title: "Diseño UI",
    description: "Accesibilidad, Tests, Figma, Sistemas de diseño.",
    year: "2024",
    href: "#",
  },
  {
    title: "Desarrollo",
    description: "HTML, CSS, Javascript, Python, Django.",
    year: "2025",
    href: "#",
  },
];

const experience = [
  {
    company: "Empresa Actual",
    role: "Senior Developer",
    period: "2022 — Presente",
  },
  {
    company: "Startup Tech",
    role: "Full Stack Developer",
    period: "2020 — 2022",
  },
  {
    company: "Agencia Digital",
    role: "Frontend Developer",
    period: "2018 — 2020",
  },
  {
    company: "Freelance",
    role: "Diseñador & Desarrollador",
    period: "2016 — 2018",
  },
];

// DOM Elements
const projectsGrid = document.getElementById("projects-grid");
const craftGrid = document.getElementById("craft-grid");
const experienceList = document.getElementById("experience-list");
const yearSpan = document.getElementById("year");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Render Projects
function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
    <a href="${project.href}" class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </a>
  `
    )
    .join("");
}

// Render Craft Items
function renderCraft() {
  craftGrid.innerHTML = craftItems
    .map(
      (item) => `
    <a href="${item.href}" class="craft-card">
      <div class="craft-header">
        <h3 class="craft-title">${item.title}</h3>
        <svg class="craft-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </div>
      <p class="craft-description">${item.description}</p>
      <span class="craft-year">${item.year}</span>
    </a>
  `
    )
    .join("");
}

// Render Experience
function renderExperience() {
  experienceList.innerHTML = experience
    .map(
      (item) => `
    <div class="experience-item">
      <div>
        <h3 class="experience-company">${item.company}</h3>
        <p class="experience-role">${item.role}</p>
      </div>
      <span class="experience-period">${item.period}</span>
    </div>
  `
    )
    .join("");
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize
renderProjects();
renderCraft();
renderExperience();

