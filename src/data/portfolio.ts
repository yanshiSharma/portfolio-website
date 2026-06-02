export const PROFILE = {
  name: "Yanshi Sharma",
  title: "Tech Enthusiast",
  profileImage: "/logo.png",
  titles: ["DATA ANALYST", "DATA SCIENTIST", "SOLUTIONS ARCHITECT", "AI AUTOMATION"],
  bio: "Specializing in Generative AI, Data Analytics, RAG, and more\n#LearningasIGo",
  social: {
    github: "https://github.com/yanshiSharma",
    linkedin: "https://www.linkedin.com/in/yanshi-sharma/",
    instagram: "https://www.instagram.com/yanshi4858/",
    email: "mailto:yanshi12054@gmail.com"
  },
  about: "Data and AI enthusiast with experience in Generative AI, RAG systems, LLMs, and AI-driven automation. Passionate about automating repetitive tasks to maximize focus on building impactful real-world solutions.",
  stats: [
    { label: "Years Experience", value: "1" },
    { label: "Models Deployed", value: "5+" },
    { label: "Hackathons Participated", value: "2" },
    { label: "Coffee/Day", value: "∞" }
  ]
};

export const SKILLS = [
  // AI Automation
  { id: "n8n", name: "n8n", category: "automation", level: 90, version: "1.x", desc: "AI Agents, Workflow Orchestration" },
  { id: "make", name: "Make", category: "automation", level: 80, version: "Cloud", desc: "No-Code Automation, Integrations" },
  { id: "zapier", name: "Zapier", category: "automation", level: 75, version: "Cloud", desc: "Business Process Automation" },
  { id: "mcp", name: "Model Context Protocol", category: "automation", level: 85, version: "Latest", desc: "Tool Calling, AI Integrations" },
  { id: "claude-skills", name: "Claude Skills", category: "automation", level: 90, version: "Latest", desc: "Custom AI Workflows, Task Automation" },

  // Data Science & Viz
  { id: "pandas", name: "Pandas", category: "ds", level: 95, version: "2.2", desc: "Data Manipulation, Analysis" },
  { id: "powerbi", name: "Power BI", category: "ds", level: 85, version: "Pro", desc: "Business Intelligence Dashboards" },
  { id: "tableau", name: "Tableau", category: "ds", level: 80, version: "2024.3", desc: "Visual Analytics" },
  { id: "matplotlib", name: "Matplotlib / Seaborn", category: "ds", level: 90, version: "3.9", desc: "Scientific Visualization" },
  { id: "numpy", name: "NumPy", category: "ds", level: 95, version: "2.3", desc: "Numerical Computing" },

  // Development - The Interface
  { id: "react", name: "React + Vite", category: "dev", level: 60, version: "18.3", desc: "Modern UI, Component Systems" },
  { id: "html", name: "HTML/CSS", category: "dev", level: 90, version: "5", desc: "Semantic Markup, Responsive Design" },
  { id: "nextjs", name: "Next.js", category: "dev", level: 70, version: "15.0", desc: "SSR, Edge Functions" },
  { id: "threejs", name: "Three.js / R3F", category: "dev", level: 65, version: "r170", desc: "3D Visualizations, WebGL" },

  // Core - The Foundation
  { id: "python", name: "Python", category: "core", level: 98, version: "3.9+", desc: "Algorithms, Scripting, Everything" },
  { id: "cpp", name: "C++", category: "core", level: 70, version: "23", desc: "Low-Level Optimization" },
  { id: "sql", name: "MS SQL Server", category: "core", level: 85, version: "2023", desc: "Postgres, MongoDB, Vector DBs" },
];

export const PROJECTS = [
  {
    id: "p1",
    title: "BEHROUZ BIRYANI ANALYTICS",
    desc: "End-to-end menu and customer analytics project uncovering pricing strategies, product performance, demographic trends, and business opportunities from multi-sheet Excel datasets.",
    details: [
      "Consolidated and cleaned data from multiple menu categories through webscraping",
      "Performed exploratory data analysis to identify pricing tiers, category performance, customer demographics, and upselling opportunities.",
      "Built dashboard-ready visualizations and generated actionable business insights for menu optimization and marketing strategy."
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "BeautifulSoup", "Excel"],
    domain: "Retail and Logistics Analytics",
    link: "https://style-engine.demo",
    github: "https://github.com/yanshiSharma/Behrouz-Biryani-Analysis",
    image: "public/project-images/pimage-1.jpg",
    featured: true,
    type: 'experiment'
  },
  {
    id: "p2",
    title: "OLA CAB OPERATIONS ANALYTICS",
    desc: "End-to-end ride-hailing analytics solution analyzing 20,000+ bookings using SQL and Power BI to uncover revenue trends, cancellation patterns, vehicle performance, and service quality insights.",
    details: [
      "Designed a SQL analytics layer with 10 reusable business-focused views covering revenue, cancellations, ratings, customer behavior, and vehicle performance.",
      "Built a 5-page interactive Power BI dashboard featuring KPI tracking, cancellation analysis, payment insights, vehicle performance, and customer ratings.",
      "Identified operational bottlenecks including driver-related cancellations, payment preferences, and fleet utilization opportunities through data-driven analysis."
    ],
    tech: ["MySQL", "Power BI", "DAX", "Power Query", "SQL"],
    domain: "Transportation and Operations Analytics",
    link: "",
    github: "https://github.com/yanshiSharma/Ola-Cab-Analysis",
    image: "public/project-images/pimage-2.png",
    featured: false,
    type: "experiment"
  },
  {
    id: "p3",
    title: "FORTUNE 500 REVENUE & GROWTH ANALYTICS",
    desc: "Automated business intelligence pipeline that scrapes live Fortune 500 company data, performs revenue and growth analysis, and delivers interactive dashboards for industry, geography, and company-level insights.",
    details: [
      "Built an end-to-end web scraping pipeline using BeautifulSoup and Pandas to extract, clean, and analyze live Fortune 500 company data directly from Wikipedia.",
      "Developed 14 SQL Server analytical queries covering revenue leadership, growth trends, industry performance, employee distribution, and headquarters-level analysis.",
      "Designed an interactive Power BI dashboard showcasing revenue leaders, growth champions, industry dominance, workforce distribution, and geographic business concentration."
    ],
    tech: [
      "Python",
      "BeautifulSoup",
      "Pandas",
      "SQL Server",
      "Power BI",
      "Matplotlib",
      "Seaborn"
    ],
    domain: "Business Intelligence & Financial Analytics",
    link: "",
    github: "https://github.com/yanshiSharma/Fortune-500-Companies-Revenue-Growth-Analysis-with-Web-Scraping",
    image: "public/project-images/pimage-3.jpg", // Fortune 500 Analysis
    featured: true,
    type: "experiment"
  },
  {
    id: "p4",
    title: "SALES INTELLIGENCE DASHBOARD",
    desc: "Interactive multi-page Power BI dashboard analyzing 7,991 sales transactions across 3 years, delivering actionable insights into revenue trends, channel performance, customer behavior, product demand, and geographic pricing patterns.",
    details: [
      "Designed a star-schema data model integrating orders, customers, products, and regional data to create a unified business intelligence solution.",
      "Built a 5-page Power BI dashboard featuring executive KPIs, channel-wise revenue analysis, daily sales trends, regional pricing intelligence, and product performance insights.",
      "Developed DAX-driven metrics and interactive slicers enabling stakeholders to explore 3 years of sales performance across 100 regions, 50 customers, and multiple distribution channels."
    ],
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Star Schema",
      "Business Intelligence"
    ],
    domain: "Sales Analytics & Business Intelligence",
    link: "",
    github: "https://github.com/yanshiSharma/SalesReport-Dashboard",
    image: "public/project-images/pimage-4.png.webp",
    featured: true,
    type: "experiment"
  },
  {
    id: "p5",
    title: "EMPLOYEE CHURN PREDICTION PLATFORM",
    desc: "End-to-end HR analytics solution leveraging machine learning, and interactive dashboards to predict employee attrition, identify churn drivers, and enable proactive retention strategies.",
    details: [
      "Built a cloud-native analytics pipeline using BigQuery, Python, and PyCaret to process HR data, train predictive models, and generate employee churn risk scores.",
      "Developed and evaluated multiple machine learning models, selecting Random Forest with an F1-score of 0.97 and ROC-AUC of 0.99 for high-confidence attrition prediction.",
      "Created an executive-ready Looker Studio dashboard providing department-level risk monitoring, churn insights, satisfaction analysis, and actionable HR recommendations."
    ],
    tech: [
      "Python",
      "PyCaret",
      "Scikit-learn",
      "Google BigQuery",
      "Google Colab",
      "Looker Studio",
      "Pandas",
      "Matplotlib"
    ],
    domain: "People Analytics & HR Intelligence",
    link: "",
    github: "https://github.com/yanshiSharma/Employee-Churn-Analysis",
    image: "public/project-images/pimage-5.png",
    featured: true,
    type: "ml"
  }
];

export const TIMELINE = [
  {
    id: "t1",
    title: "Solution Architect Intern",
    org: "EMB Global",
    date: "Jan 2026 - Present",
    desc: "Working as a Solution Architect Intern at EMB Global, understanding intricacies of building scalable AI-driven solutions involving RAG, LLM Prompting and Voice AI. Collaborating with cross-functional teams to implement automation workflows and optimize system performance.",
    type: "work",
    side: "left"
  },
  {
    id: "t2",
    title: "Intel Hackathon Participant",
    org: "External College",
    date: "2025",
    desc: "Particiapted and built a AI driven Travel Assistant Chatbot in a team of 4 members.",
    type: "achievement",
    side: "right"
  },
  {
    id: "t3",
    title: "Data Analyst Intern",
    org: "Infosys Springboard",
    date: "Oct-Dec 2024",
    desc: "Build 5+ data visualization dashboards on PowerBI, enabling storytelling",
    type: "work",
    side: "left"
  },
  {
    id: "t4",
    title: "National Hackathon Participant",
    org: "Smart India Hackathon",
    date: "2023",
    desc: "Build an mobile application for direct communication between farmers and end consumers.",
    type: "achievement",
    side: "right"
  },
  {
    id: "t5",
    title: "B.Tech in Computer Science",
    org: "Vellore Institute of Technology",
    date: "2022 - 2026",
    desc: "Specialized in Artificial Intelligence and Robotics. CGPA: 8.39/10. Relevant coursework: Data Structures, Algorithms, AI, ML, CV, NLP.",
    type: "education",
    side: "left"
  }
];

export const PHILOSOPHY = [
  {
    id: "ph1",
    title: "Context is King",
    desc: "The quality of intelligence depends on the quality of context available to the system."
  },
  {
    id: "ph2",
    title: "Automation First",
    desc: "If a process can be automated reliably, it should be automated."
  },
  {
    id: "ph3",
    title: "Systems Over Tasks",
    desc: "Build scalable systems that solve problems repeatedly instead of solving them once."
  },
  {
    id: "ph4",
    title: "Continuous Learning",
    desc: "The best technology professionals stay curious and adapt faster than the industry changes."
  }
];

export const ROADMAP = [
  { id: "r1", title: "VibeCoding Implementation", date: "Q3-4 2026", desc: "Deploy MVP for Data Science related projects.", status: "in-progress" },
  { id: "r2", title: "Azure and DataBricks Certifications", date: "2027", desc: "Dive into data engineering basics and AI optimizations", status: "planned" }
];

export const BLOG_POSTS = [
  { 
      id: "b1", 
      title: "From Antigravity to WebMCP: Watching the Web Become AI-Native", 
      date: "June 2, 2026", 
      readTime: "5 min", 
      desc: "Evolution of the web from static pages to dynamic AI agents, and how the Web Model Context Protocol (WebMCP)  is enabling a new era of AI-native applications.", 
      tags: ["AI", "GenAI", "DataScience"],
      link: "https://www.linkedin.com/in/yanshi-sharma/recent-activity/all/" 
  },
  { 
      id: "b2", 
      title: "RAG: Past, Present and Future", 
      date: "May 20, 2026", 
      readTime: "8 min", 
      desc: "Techniques for scaling GNNs to billion-edge graphs using PyTorch Geometric.", 
      tags: ["Data Science", "AI", "PyTorch"],
      link: "https://www.linkedin.com/in/yanshi-sharma/recent-activity/all/" 
  },
  { 
      id: "b3", 
      title: "Infosys Internship Project", 
      date: "Dec 15, 2025", 
      readTime: "6 min", 
      desc: "Overview of data driven dashboard made during my Infosys Springboard Internship in a team of 5 members", 
      tags: ["PowerBI", "Kaggle", "DAX", "Data Visualization", "Data Analytics"],
      link: "https://www.linkedin.com/in/yanshi-sharma/recent-activity/all/" 
  }
];

export const SKILLS_CATEGORIES = [
    { id: "automation", label: "AI Automation", color: "cyan", order: 0 },
    { id: "ds", label: "Data Science", color: "purple", order: 1 },
    { id: "dev", label: "Web Development", color: "green", order: 2 },
    { id: "core", label: "Core / Languages", color: "pink", order: 3 }
];
