// Load environment variables
import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, writeBatch, collection } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// DATA FROM portfolio.ts
const PROFILE = {
  name: "Yanshi Sharma",
  title: "Tech Enthusiast",
  titles: ["DATA SCIENTIST", "SOLUTIONS ARCHITECT", "DATA ANALYST"],
  bio: "Specializing in RAG, Voice AI, Data Science, and scalable Web Designs.",
  social: {
    github: "https://github.com/yanshiSharma",
    linkedin: "https://www.linkedin.com/in/yanshi-sharma/",
    instagram: "https://www.instagram.com/yanshi4858/",
    email: "mailto:yanshi12054@gmail.com"
  },
  about: "Fresh out of college and already deep in the world of AI — that's me in a nutshell. With a background in data analytics, I've been expanding my skill set into data science and AI engineering, exploring everything from RAG systems and Voice AI to prompt engineering and workflow automation with tools like n8n and Make.com. Beyond building, I believe in learning in public — I actively contribute to and maintain GitHub repositories that document my journey, share reusable resources, and give back to the developer community. I'm driven by curiosity and a belief that the best AI solutions aren't just technically sound — they solve real problems for real people.",
  stats: [
    { label: "Years Experience", value: "1" },
    { label: "Models Deployed", value: "5+" },
    { label: "Engagements", value: "2" },
    { label: "Coffee/Day", value: "∞" }
  ]
};

const SKILLS = [
  { id: "pytorch", name: "PyTorch", category: "ml", level: 95, version: "2.5", desc: "Deep Learning, Custom Architectures" },
  { id: "tensorflow", name: "TensorFlow", category: "ml", level: 85, version: "2.18", desc: "Production Pipelines, TFX" },
  { id: "transformers", name: "Transformers (HF)", category: "ml", level: 92, version: "4.46", desc: "LLMs, BERT, GPT, LoRA" },
  { id: "opencv", name: "OpenCV", category: "ml", level: 88, version: "4.10", desc: "Computer Vision, Real-time Proc" },
  { id: "langchain", name: "LangChain", category: "ml", level: 90, version: "0.3", desc: "RAG Systems, Agents" },
  { id: "pandas", name: "Pandas", category: "ds", level: 95, version: "2.2", desc: "Data Manipulation, Analysis" },
  { id: "powerbi", name: "Power BI", category: "ds", level: 85, version: "Pro", desc: "Business Intelligence Dashboards" },
  { id: "tableau", name: "Tableau", category: "ds", level: 80, version: "2024.3", desc: "Visual Analytics" },
  { id: "matplotlib", name: "Matplotlib / Seaborn", category: "ds", level: 90, version: "3.9", desc: "Scientific Visualization" },
  { id: "sklearn", name: "Scikit-Learn", category: "ds", level: 92, version: "1.5", desc: "Classical ML Algorithms" },
  { id: "react", name: "React + Vite", category: "dev", level: 90, version: "18.3", desc: "Modern UI, Component Systems" },
  { id: "typescript", name: "TypeScript", category: "dev", level: 88, version: "5.7", desc: "Type-Safe Architecture" },
  { id: "nextjs", name: "Next.js", category: "dev", level: 85, version: "15.0", desc: "SSR, Edge Functions" },
  { id: "threejs", name: "Three.js / R3F", category: "dev", level: 75, version: "r170", desc: "3D Visualizations, WebGL" },
  { id: "tailwind", name: "Tailwind CSS", category: "dev", level: 95, version: "3.4", desc: "Rapid Styling, Design Systems" },
  { id: "docker", name: "Docker", category: "ops", level: 85, version: "27.3", desc: "Containerization, Microservices" },
  { id: "kubernetes", name: "Kubernetes", category: "ops", level: 75, version: "1.31", desc: "Orchestration, Scaling" },
  { id: "aws", name: "AWS", category: "ops", level: 80, version: "SDK v3", desc: "SageMaker, EC2, Lambda" },
  { id: "fastapi", name: "FastAPI", category: "ops", level: 92, version: "0.115", desc: "High-Perf Async APIs" },
  { id: "python", name: "Python", category: "core", level: 98, version: "3.9+", desc: "Algorithms, Scripting, Everything" },
  { id: "cpp", name: "C++", category: "core", level: 70, version: "23", desc: "Low-Level Optimization" },
  { id: "sql", name: "SQL/NoSQL", category: "core", level: 85, version: "2023", desc: "Postgres, MongoDB, Vector DBs" }
];

const PROJECTS = [
  {
    id: "p1",
    title: "SALES REPORT DASHBOARD",
    desc: "A 5-page interactive Power BI dashboard delivering end-to-end visibility into 3 years of sales data (2017–2019) across Distributor, Export, and Wholesale channels for a New Zealand retail operation spanning 100 regions and 50 customers.",
    //domain, link, github, image, featured, type
    details: [
      "Built a star schema data model across 4 tables — Sales Orders, Products, Customers, and Regions — powering DAX-driven KPI cards tracking 7,991 orders, 15 products, and 4 warehouses.",
      "Designed 5 purpose-built pages including an Executive KPI Overview with a geographic tree map across 100 regions, a 3-year yearly channel comparison, and 36 daily-granularity line charts across 2017–2019.",
      "Uncovered key insights: Wholesale dominates revenue across all 3 years, average order quantity sits at 8.46 units (just below a bulk upsell threshold), and the Export channel showed its sharpest spike ever in February 2019.",
    ],
    github: "https://github.com/yanshiSharma/SalesReport-Dashboard",
    tech: ["PowerBI", "MS-Excel", "Power-Query", "DAX"],
    domain: "Retail / Sales Analytics",
    link: "https://style-engine.demo",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
    featured: true,
    type: 'self-initiated'
  },
  {
    id: "p2",
    title: "EMPLOYEE CHURN PREDICTION",
    desc: "An end-to-end ML pipeline using Google BigQuery, PyCaret AutoML, and Google Looker Studio to predict employee attrition risk — achieving a Random Forest model with 0.99 ROC AUC and surfacing satisfaction level as the dominant churn driver at ~30.4% feature importance.",
    details: [
      "Ingested historical HR data into Google BigQuery and ran a PyCaret AutoML comparison across Logistic Regression, Decision Tree, XGBoost, and Random Forest — selecting Random Forest (F1: 0.97, AUC: 0.99) as the production model.",
      "Identified top churn predictors: satisfaction_level (30.4%), time_spend_company (19.4%), number_project (18.2%), average_monthly_hours (16%), and last_evaluation (13.1%).",
      "Deployed predictions back to BigQuery and built a Looker Studio dashboard tracking churn risk by department, flagging 7 predicted leavers in the pilot snapshot concentrated in Technical, Support, and Sales teams.",
    ],
    github: "https://github.com/yanshiSharma/Employee-Churn-Analysis",
    tech: ["Big Query", "Looker Studio", "PyCaret", "Python (Google Colab)"],
    domain: "HR Analytics / Predictive Modeling",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    type: 'self-initiated'
  },
  {
    id: "p3",
    title: "OLA CAB ANALYSIS",
    desc: "A multi-tool ride-hailing analytics project combining SQL querying, Python EDA, and Power BI visualisation on Ola booking data to surface ride patterns, cancellation trends, and revenue insights.",
    details: [
      "Wrote SQL queries (ola-analysis.sql) against the Bookings dataset to extract ride volume, cancellation rates, and revenue breakdowns by vehicle type and time period.",
      "Built an interactive Power BI dashboard (ola dashboard.pbix) to visualise booking trends, peak demand windows, and driver vs. customer cancellation distributions.",
      "Combined SQL-level data preparation with Power BI's visual layer to create a full analytics workflow from raw CSV to business-ready insights.",
    ],
    github: "https://github.com/yanshiSharma/Ola-Cab-Analysis",
    tech: ["MySQL", "PowerBI", "DAX", "Power-Query"],
    domain: "Retail / Transportation Analytics",
    image: "https://images.unsplash.com/photo-1558494949-efc527651087?q=80&w=1740&auto=format&fit=crop",
    featured: false,
    type: 'self-initiated'
  },
  {
    id: "p4",
    title: "BEHROUZ BIRYANI ANALYSIS",
    desc: "A food-tech data analytics project analysing Behrouz Biryani's menu performance, customer demographics, and category-level sales patterns across multiple product lines using Python and Excel datasets.",
    details: [
      "Consolidated data from 6 Excel files covering Shahi Biryani, Daastaan-e-Kebabs, Desserts & Beverages, Exclusively on Behrouz, and Newly Launched items into a unified combined_data.xlsx for holistic analysis.",
      "Performed customer demographic segmentation and product performance analysis in a Jupyter Notebook, identifying top-selling categories and underperforming SKUs.",
      "Produced two dashboard visuals — a Performance Overview and a Customer Demographics Dashboard — to translate data findings into presentation-ready insights.",
    ],
    github: "https://github.com/yanshiSharma/Behrouz-Biryani-Analysis",
    tech: ["Python", "Excel", "Pandas", "Matplotlib"],
    domain: "Retail / Sales Analytics",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    featured: false,
    type: 'self-initiated'
  }
];

const TIMELINE = [
  {
    id: "t1",
    title: "Solutions Architect",
    org: "EMB Global",
    date: "Jan 2026 - Present",
    desc: "Developed data architecture diagrams, technical proposals, interactive UI designs and client-facing decks to support business development and solution design initiatives.",
    type: "work",
    side: "right"
  },
  {
    id: "t2",
    title: "Intel Hackathon Participant",
    org: "External College",
    date: "Dec 2024",
    desc: "Participated in AI Hackathon, developing an AI-powered travel assistant, as a part of a 6-member team.",
    type: "Hackathon",
    side: "left"
  },
  {
    id: "t3",
    title: "Infosys Data Analyst Intern",
    org: "",
    date: "Aug 2024",
    desc: "Participated in the Smart India Hackathon, developing an AI-powered travel assistant, as a part of a 4-member team.",
    type: "work",
    side: "right"
  },
  {
    id: "t4",
    title: "SIH Hackathon Participant",
    org: "MIC, AICTE",
    date: "2023",
    desc: "Built a mobie application to improve the efficiency of transporting and selling farmer products, as a part of a 6-member team.",
    type: "Hackathon",
    side: "left"
  },
  {
    id: "t5",
    title: "Hackathon Hardware Member",
    org: "VIT Chennai",
    date: "June 2023-July 2025",
    desc: "Worked with the club in organising events and workshops.",
    type: "Engagement",
    side: "right"
  },
  {
    id: "t6",
    title: "IoTHiNC Programming Member",
    org: "VIT Chennai",
    date: "June 2023-July 2025",
    desc: "Participated in many skill enhancemnet workshops and events organised by the club.",
    type: "Engagement",
    side: "left"
  },
  {
    id: "t7",
    title: "Higher Secondary Education",
    org: "MVN Aravalli Hills, Faridabad",
    date: "2020 - 2022",
    desc: "Specialized in Science and Mathsematics, achieving a CGPA of 9.1/10.",
    type: "education",
    side: "right"
  },
  {
    id: "t8",
    title: "Secondary Education",
    org: "MVN Aravalli Hills, Faridabad",
    date: "2012-2020",
    desc: "Specialized in Science and Mathsematics, achieving a CGPA of 9.1/10.",
    type: "education",
    side: "left"
  }
];

const PHILOSOPHY = [
  { title: "First Principles", desc: "Break complexity down to its fundamental truths. Build up from there." },
  { title: "Human-AI Symbiosis", desc: "AI should augment human intelligence, not replace it." },
  { title: "Open Source", desc: "Knowledge grows when shared. Contribute back to the collective intelligence." },
  { title: "Scalability", desc: "Design systems that can evolve and handle exponential growth." }
];

const ROADMAP = [
  { id: "r1", title: "Data Analytics Skill Development", date: "Q1 2025", desc: "Made and deployed 3-4 data analytics dashboard for real-time insights.", status: "implemented" },
  { id: "r2", title: "GitHub Contribution", date: "2026", desc: "Use GitHub to make pull requests and create scalabale data solutions.", status: "in Progress" },
  { id: "r3", title: "Vibecoding Data Solutions", date: "Q4 2026", desc: "Build Scalable RAG, Voice AI, and Web Applications.", status: "planned" }
];

const BLOG_POSTS = [
  {
    id: "b1",
    title: "The evolution of RAG Systems",
    date: "May 25, 2026",
    readTime: "5 min",
    desc: "From a 2020 research paper to a $81B projected industry — my honest learning journey through RAG, its variants, and where it's headed next.",
    tags: ["AI", "Generative", "Data-Science"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7464661673354727425/"
  },
  {
    id: "b2",
    title: "Infosys Internship: Adidas Sales Analysis",
    date: "Dec 28, 2024",
    readTime: "8 min",
    desc: "Analysed Adidas' 2020–2021 sales data as part of an Infosys Springboard internship, building Power BI dashboards that surfaced $899.90M in sales insights across regions, retailers, and seasonal trends.",
    tags: ["Data-Analytics", "Visualizations", "PowerBI"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7281707098080452608/"
  },
  {
    id: "b3",
    title: "Introduction to Business Intelligence",
    date: "October 15, 2024",
    readTime: "6 min",
    desc: "Completed Infosys Springboard's Business Intelligence course, building a solid foundation in BI concepts and data-driven decision-making.",
    tags: ["BI", "Business-Analytics", "Python"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7226673428383064064/"
  },
  {
    id: "b4",
    title: "Importance of DSA",
    date: "Aug 15, 2023",
    readTime: "6 min",
    desc: "A 15-year veteran relearning DSA not for interviews, but because problem-solving fundamentals never go out of style — no matter what Twitter says.",
    tags: ["DSA", "DAA", "Python"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7450389560082997249/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287450464030734856193%2Curn%3Ali%3Aactivity%3A7450389560082997249%29"
  }
];

async function migrate() {
  console.log("🚀 Starting Migration...");

  try {
    // Sign in anonymously to avoid auth issues if rules are open, or use hardcoded creds if needed.
    // For now we assume test mode / open rules or anon access enabled.
    // await signInAnonymously(auth); 
    // OR just proceed if rules allow public write.

    const batch = writeBatch(db);

    // 1. PROFILE (Single Document)
    console.log("Processing Profile...");
    const profileRef = doc(db, "portfolio", "profile");
    batch.set(profileRef, PROFILE);

    // 2. SKILLS (Collection)
    console.log("Processing Skills...");
    SKILLS.forEach(skill => {
      const ref = doc(db, "skills", skill.id);
      batch.set(ref, skill);
    });

    // 3. PROJECTS (Collection)
    console.log("Processing Projects...");
    PROJECTS.forEach(proj => {
      const ref = doc(db, "projects", proj.id);
      batch.set(ref, proj);
    });

    // 4. TIMELINE (Collection - Experience, Achievements, Resume)
    console.log("Processing Timeline...");
    TIMELINE.forEach(item => {
      const ref = doc(db, "timeline", item.id);
      batch.set(ref, item);
    });

    // 5. ROADMAP (Collection)
    console.log("Processing Roadmap...");
    ROADMAP.forEach(item => {
      const ref = doc(db, "roadmap", item.id);
      batch.set(ref, item);
    });

    // 6. PHILOSOPHY (Collection - using index as ID since no explicit ID)
    console.log("Processing Philosophy...");
    PHILOSOPHY.forEach((item, i) => {
      const ref = doc(db, "philosophy", `val_${i}`);
      batch.set(ref, item);
    });

    // 7. WRITINGS/BLOG (Collection)
    console.log("Processing Writings...");
    BLOG_POSTS.forEach(post => {
      const ref = doc(db, "writings", post.id);
      batch.set(ref, post);
    });

    console.log("Committing Batch...");
    await batch.commit();
    console.log("✅ Migration Complete!");
    process.exit(0);

  } catch (e) {
    console.error("❌ Migration Failed:", e);
    process.exit(1);
  }
}

migrate();
