import { PersonalInfo, EducationItem, SkillCategory, CertificationItem, ProjectItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Trupti Ranjan Sahoo",
  initials: "TRS",
  tagline: "Transforming complex data into actionable intelligence and executive clarity.",
  roles: [
    "Aspiring Data Analyst",
    "Data Science Enthusiast",
    "Turning Data Into Decisions",
    "MCA Student & Researcher"
  ],
  objective: "MCA student with hands-on experience in Python, SQL, MS Excel, Tableau, and Power BI, seeking a Data Analytics/Data Science internship to clean and analyze large datasets, build dashboards and predictive models, and support data-driven decision-making for stakeholders.",
  email: "tranjansahoo9@gmail.com",
  phone: "+91 7735914869",
  github: "github.com/sahootruptiranjan",
  githubUrl: "https://github.com/sahootruptiranjan",
  linkedin: "trupti-ranjan-sahoo",
  linkedinUrl: "https://www.linkedin.com/in/trupti-ranjan-sahoo",
  resumePdfPath: "./docs/Trupti_Ranjan_Sahoo_Resume.pdf",
  locationContext: "Bengaluru, Karnataka, India",
  status: "Available for Data Analytics & Data Science Internships"
};

export const educationList: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MS Ramaiah University of Applied Science",
    location: "Bengaluru, Karnataka",
    period: "2025 – Present",
    score: "CGPA (Semester 1): 8.55",
    current: true
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "N.C. Autonomous College",
    location: "Jajpur, Odisha",
    period: "2022 – 2025",
    score: "CGPA: 7.96",
    current: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics & Data Science",
    badge: "Core Focus",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "database" },
      { name: "Exploratory Data Analysis", icon: "search" },
      { name: "Data Cleaning", icon: "filter" },
      { name: "Predictive Modeling", icon: "trending-up" },
      { name: "Machine Learning basics", icon: "cpu" }
    ]
  },
  {
    category: "Visualization & BI Tools",
    badge: "Reporting & Dashboards",
    skills: [
      { name: "Tableau", icon: "bar-chart-3" },
      { name: "Power BI", icon: "layout-grid" },
      { name: "MS Excel", icon: "table" }
    ]
  },
  {
    category: "Programming Languages",
    badge: "Code",
    skills: [
      { name: "Python", icon: "code" },
      { name: "Java", icon: "coffee" },
      { name: "C", icon: "terminal" }
    ]
  },
  {
    category: "Web Technologies",
    badge: "Frontend & UI",
    skills: [
      { name: "HTML", icon: "globe" },
      { name: "CSS", icon: "palette" },
      { name: "JavaScript", icon: "sparkles" }
    ]
  },
  {
    category: "Databases",
    badge: "Data Storage",
    skills: [
      { name: "SQL", icon: "database" },
      { name: "MySQL", icon: "server" }
    ]
  },
  {
    category: "Tools & Platforms",
    badge: "Version Control",
    skills: [
      { name: "Git", icon: "git-branch" },
      { name: "GitHub", icon: "github" }
    ]
  },
  {
    category: "Core Concepts",
    badge: "Foundations",
    skills: [
      { name: "Data Structures & Algorithms", icon: "binary" }
    ]
  },
  {
    category: "Soft Skills",
    badge: "Professional Competencies",
    isSoftSkill: true,
    skills: [
      { name: "Communication", icon: "message-square" },
      { name: "Critical Thinking", icon: "lightbulb" },
      { name: "Problem Solving", icon: "check-circle" },
      { name: "Teamwork", icon: "users" },
      { name: "Adaptability", icon: "refresh-cw" }
    ]
  }
];

export const certificationsList: CertificationItem[] = [
  {
    title: "Artificial Intelligence Builder",
    issuer: "FITT, Delhi"
  },
  {
    title: "Git & GitHub: From Zero to Master",
    issuer: "Bug Buster"
  },
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x"
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: "zomato-restaurant-data-analysis",
    title: "Zomato Restaurant Data Analysis",
    subtitle: "End-to-End Exploratory Data Analysis, Data Cleaning & BI Dashboard Pipeline",
    badge: "FLAGSHIP PROJECT",
    isFlagship: true,
    status: "Completed",
    description: "An end-to-end analytical pipeline designed to clean, manipulate, and explore a large-scale restaurant dataset using Python and SQL, translating raw multivariate patterns into executive BI dashboards in Tableau and Power BI.",
    bullets: [
      "Utilized Python and SQL to clean, manipulate, and analyze a large-scale restaurant dataset, handling missing values, duplicates, and inconsistent formats.",
      "Performed exploratory data analysis (EDA) to uncover trends and patterns in customer ratings, cuisines, online ordering, and table booking preferences.",
      "Developed interactive data visualizations and dashboards in Tableau and Power BI to present restaurant distribution, rating patterns, and cost variations to stakeholders.",
      "Derived actionable insights on factors influencing ratings and customer preferences, enabling data-driven business recommendations."
    ],
    processSteps: [
      {
        step: "01",
        title: "Data Cleaning & Transformation",
        detail: "Utilized Python and SQL to handle missing values, eliminate duplicates, and resolve inconsistent formats across multi-attribute data structures."
      },
      {
        step: "02",
        title: "Exploratory Data Analysis (EDA)",
        detail: "Analyzed distributions, rating patterns, cuisine clusters, and evaluated differences between online ordering and table booking preferences."
      },
      {
        step: "03",
        title: "BI Dashboard Development",
        detail: "Constructed clear interactive visual dashboards in Tableau and Power BI showcasing restaurant distribution, rating patterns, and cost variations."
      },
      {
        step: "04",
        title: "Actionable Insights Delivery",
        detail: "Synthesized findings on factors impacting ratings and customer preferences to formulate data-driven business recommendations for stakeholders."
      }
    ],
    tags: ["Python", "SQL", "Tableau", "Power BI", "EDA", "Data Cleaning"],
    codeUrl: "https://github.com/sahootruptiranjan",
    liveUrl: "#",
    liveStatusText: "Dashboard (Coming Soon)"
  },
  {
    id: "ayursutra-panchakarma-management",
    title: "AyurSutra: Panchakarma Patient Management Software",
    subtitle: "Therapy Scheduling, Patient Precautions & Clinical Workflow Platform",
    badge: "COMPLETED",
    isFlagship: false,
    status: "Completed",
    description: "A specialized healthcare management solution engineered to automate therapy scheduling and clinical documentation for Ayurvedic centers, featuring automated patient precaution alerts, recovery milestone tracking, and dynamic symptom feedback.",
    bullets: [
      "Developing a specialized management solution to automate therapy scheduling and documentation for Ayurvedic centers.",
      "Designing an automated notification system to alert patients regarding critical pre- and post-procedure precautions via customizable channels.",
      "Implementing real-time therapy tracking and visualization tools (graphs/progress bars) to monitor patient recovery milestones and feedback.",
      "Integrating a feedback loop for patients to report symptoms, enabling practitioners to refine treatment schedules dynamically."
    ],
    tags: ["Python / Web stack", "Healthcare Tech", "Workflow Automation", "Patient Tracking"],
    codeUrl: "https://github.com/sahootruptiranjan"
  }
];

export const quickStats = [
  { label: "Current Degree", value: "MCA @ MS Ramaiah" },
  { label: "Academic CGPA", value: "8.55 (Sem 1)" },
  { label: "Core Stack", value: "Python · SQL · BI" }
];
