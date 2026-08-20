export interface ProjectLink {
  label: string;
  url: string;
  type: 'powerbi' | 'github' | 'live';
}

export interface ProjectItem {
  id: number;
  role: 'Data Analyst' | 'Analytics Engineer';
  featured?: boolean;
  title: string;
  image: string;
  summary: string;
  insights: string[];
  tags: string[];
  links: ProjectLink[];
}

export interface SkillCardItem {
  iconClass: string;
  title: string;
  description: string;
}

export interface EducationItem {
  title: string;
  period: string;
  description: string;
}

export interface HeroStatItem {
  value: string;
  label: string;
}

export const personalInfo = {
  name: 'Hoang The Analyst',
  role: 'Analytics Engineer & Data Analyst',
  badgeText: 'Open for Analytics Roles & Collaboration',
  description:
    'I specialize in turning raw transactional data into reliable pipelines and high-impact analytics. Through 10 end-to-end projects in BI and Analytics Engineering, I help businesses move faster with data they can trust.',
  email: 'hoangtheanalyst@outlook.com',
  phone: '+84 369 877 276',
  github: 'https://github.com/HoangTheAnalyst',
  linkedin: 'hoangtheanalyst@outlook.com',
};

export const heroStats: HeroStatItem[] = [
  { value: '10', label: 'Completed Projects' },
  { value: '7 DA', label: 'BI & Analytics' },
  { value: '3 AE', label: 'Cloud & Pipelines' },
  { value: '3x', label: 'Certified (PL-300, GH)' },
];

export const educationList: EducationItem[] = [
  {
    title: 'Bachelor of Digital Business — National Economics University',
    period: '2023 — 2027',
    description:
      'Focused on digital commerce, data-driven decision-making, and business analytics coursework.',
  },
];

export const experienceBulletPoints: string[] = [
  'Architected and deployed production-grade transformation pipelines using dbt, Snowflake, and Fabric for analytics workflows.',
  'Processed, validated, and normalized large datasets for economics research and predictive modeling tasks.',
  'Conducted surveys, demand forecasting, and inventory performance analysis for seasonal retail projects in my small business in early 2025.',
  'Performed competitor footfall scouting at local eateries and delivered executive insight reports directly to business owners.',
];

export const certifications: string[] = [
  'Microsoft Certified: PL-300 Data Analyst - 2026',
  'GitHub Foundations (GH-900) - 2026',
  'GitHub Copilot (GH-300) - 2026',
];

export const skillsList: SkillCardItem[] = [
  {
    iconClass: 'fas fa-code',
    title: 'Data Analysis & Programming',
    description:
      'Proficient in Python (pandas, NumPy) and SQL for querying, manipulating, and engineering large datasets.',
  },
  {
    iconClass: 'fas fa-cubes',
    title: 'Analytics Engineering & Cloud',
    description:
      'Build scalable data transformation pipelines with dbt, Snowflake, and Fabric, integrating LLM-assisted workflows.',
  },
  {
    iconClass: 'fas fa-chart-line',
    title: 'Business Intelligence & Visualization',
    description:
      'Design high-impact executive dashboards and semantic data models in Power BI and Tableau for decision-makers.',
  },
  {
    iconClass: 'fas fa-code-branch',
    title: 'Version Control & CI/CD Automation',
    description:
      'Manage version-controlled data pipelines via Git/GitHub; automate workflows and scheduled testing with GitHub Actions & n8n.',
  },
];

export const projectsList: ProjectItem[] = [
  /* ================= TOP FEATURED PROJECTS (AE) ================= */
  {
    id: 10,
    role: 'Analytics Engineer',
    featured: true,
    title: 'Create a RAG AI Platform For Edtech Company',
    image: '/Images/ai_chat_tutor.png',
    summary:
      'An end-to-end Retrieval-Augmented Generation (RAG) ecosystem and analytics engineering platform on Snowflake, dbt, FastAPI, and Next.js featuring curriculum vector retrieval and operational telemetry observability.',
    insights: [
      'Zero-cost infrastructure design leveraging Snowflake free-tier, multilingual vector embeddings, and serverless LLM inference',
      'Automated curriculum ingestion with semantic section chunking and hierarchical metadata pre-filtering',
      'Medallion modeling via dbt establishing dimensional academic knowledge marts and telemetry observability logging marts',
      'Full-stack RAG application featuring AI Study Tutor, interactive practice exam room, and executive KPI dashboard',
    ],
    tags: ['Best Featured Project', 'Analytics Engineer', 'Snowflake', 'dbt', 'FastAPI', 'Next.js', 'Vector Search', 'RAG'],
    links: [
      {
        label: 'Live Demo',
        url: 'https://ai-rag-platform-three.vercel.app/dashboard',
        type: 'live',
      },
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-10-Create-a-RAG-Vectorize-AI-Platform-for-Edtech-Company',
        type: 'github',
      },
    ],
  },
  {
    id: 9,
    role: 'Analytics Engineer',
    featured: true,
    title: 'End-to-End AI Platform Pipeline Analytics Engineer with Snowflake, dbt & Airbyte',
    image: '/Images/RAG_Lineage.png',
    summary:
      'An automated, production-grade analytics engineering pipeline for an EdTech AI learning platform, ingesting transactional data from Neon DB into Snowflake with Medallion architecture and rigorous testing.',
    insights: [
      'Automated ELT pipeline from Neon DB (PostgreSQL) to Snowflake using Airbyte Cloud with incremental sync',
      'Medallion architecture (Raw -> Staging -> Marts) built via dbt Core with SCD Type 2 price tracking',
      'Strict Snowflake RBAC implemented to isolate raw staging layers and expose only dimensional star-schema marts to analysts',
      'Daily scheduled orchestration and CI/CD testing suite automated via GitHub Actions workflows',
    ],
    tags: ['Best Featured Project', 'Analytics Engineer', 'dbt', 'Snowflake', 'Airbyte', 'PostgreSQL', 'GitHub Actions'],
    links: [
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-9-Using-dbt-to-Ingest-Transform-and-Analyze-AI-Platform-Data-in-a-Edtech-Company',
        type: 'github',
      },
    ],
  },
  {
    id: 8,
    role: 'Analytics Engineer',
    featured: true,
    title: 'End-to-End AI Platform Data Engineering & Analytics with Microsoft Fabric',
    image: '/Images/Fabric Pipeline Flow.png',
    summary:
      'An enterprise AI telemetry and analytics platform built on Microsoft Fabric, combining real-time streaming via Eventstream & KQL with batch Medallion warehousing and automated alerting.',
    insights: [
      'Real-time streaming ingestion from Neon DB into Eventhouse (KQL Database) with sub-second latency dashboards',
      'Medallion architecture (Bronze -> Silver -> Gold) orchestrated via Dataflow Gen2 and Lakehouse batch pipelines',
      'Cross-database T-SQL queries populating Star Schema Data Mart with SCD Type 2 dimension tracking for model pricing',
      'Automated error-spike alerting wired to Microsoft Teams and Power BI Semantic Model executive reporting',
    ],
    tags: ['Best Featured Project', 'Analytics Engineer', 'Microsoft Fabric', 'KQL', 'Eventstream', 'Dataflow Gen2', 'Power BI', 'T-SQL'],
    links: [
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-8-Using-Fabric-to-Ingest-Transform-Analyze-AI-Platform-Data-in-a-Edtech-Company',
        type: 'github',
      },
    ],
  },

  /* ================= DATA ANALYST PROJECTS ================= */
  {
    id: 1,
    role: 'Data Analyst',
    title: 'Sales & Customer Segmentation Analysis in Online Retail',
    image: '/Images/Sales & Revenue Project 1.png',
    summary:
      'A UK online gifts and decor retailer (2010-2011) grew revenue but struggled to consistently attract and retain customers.',
    insights: [
      'Revenue is highly seasonal, peaking in Black Friday period and led by Gifts and Decor',
      'A small Champion segment contributes a disproportionate share of total revenue',
      'Short-term repeats exist, but long-term retention for 2011 cohorts remains weak',
      'Market-basket pairs are mostly product variants (color/size/style)',
    ],
    tags: ['Data Analyst', 'Power BI'],
    links: [
      {
        label: 'Power BI Service',
        url: 'https://app.powerbi.com/links/DcjQElbYAK?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare&bookmarkGuid=aa5b9596-6963-4128-8ffb-1fa04e59450d',
        type: 'powerbi',
      },
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-1-Sales-Customer-Analysis-in-Online-Retail',
        type: 'github',
      },
    ],
  },
  {
    id: 2,
    role: 'Data Analyst',
    title: 'TikTok Content Integrity & Risk Mitigation Analysis',
    image: '/Images/Overview Project 2.png',
    summary:
      "TikTok's content ecosystem shows rising claim-based videos that hurt trust and increase moderation pressure.",
    insights: [
      'High-view content is mostly claim-based and appears more on non-verified accounts',
      'Claim videos are 7.34x more likely to be banned than opinion videos',
      'Banned videos cluster around 25-35s duration, high views, and non-verified creators',
    ],
    tags: ['Data Analyst', 'Power BI'],
    links: [
      {
        label: 'Power BI Service',
        url: 'https://app.powerbi.com/links/UNnXTBr-2U?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare&bookmarkGuid=1989717d-d7f0-48b3-bcb9-7bec11f7c636',
        type: 'powerbi',
      },
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-2-TikTok-Content-Integrity-Risk-Mitigation-Analysis',
        type: 'github',
      },
    ],
  },
  {
    id: 3,
    role: 'Data Analyst',
    title: 'HR Executive Dashboard Specialist',
    image: '/Images/Overview Project 3.png',
    summary:
      'The organization (2006-2018 HR data) saw 2018 turnover rise while hiring could not offset exits, creating workforce stability risk.',
    insights: [
      'Active headcount stayed above 200, but attrition increased from 3.56% to 6.10% in 2018',
      'Production had the highest attrition (12.69%), mostly long-tenured lower-paid employees',
      'High performers showed lowest attrition and highest salary levels',
    ],
    tags: ['Data Analyst', 'Power BI'],
    links: [
      {
        label: 'Power BI Service',
        url: 'https://app.powerbi.com/links/sr5Ei-XCLr?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare&bookmarkGuid=48a692d1-1ab0-44db-9183-179039f6cab2',
        type: 'powerbi',
      },
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-3-HR-Executive-Dashboard-Specialist',
        type: 'github',
      },
    ],
  },
  {
    id: 4,
    role: 'Data Analyst',
    title: 'DataCo Root Cause Analysis – Revenue Decline in Q4/2017',
    image: '/Images/Overview Project 4.png',
    summary:
      'DataCo supply-chain operations (2015-2018) faced a sharp Q4/2017 revenue and profit drop, especially from Europe.',
    insights: [
      'Revenue, profit, and AOV fell strongly from Oct-Dec 2017 despite higher order volume',
      'Category mix shifted abruptly; Electronics and Gadgets dropped after October',
      'Logistics stability suggests operations were not the main root cause',
      'Demand from Europe declined sharply after the category shift',
    ],
    tags: ['Data Analyst', 'Power BI'],
    links: [
      {
        label: 'Power BI Service',
        url: 'https://app.powerbi.com/links/jNQfaellG9?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare&bookmarkGuid=b8fd82da-2d85-410b-82c9-e3dc0ea21838',
        type: 'powerbi',
      },
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-4-DataCo-Root-Cause-Analysis-For-Revenue-Decline',
        type: 'github',
      },
    ],
  },
  {
    id: 5,
    role: 'Data Analyst',
    title: "Marketing Performance & Customer Personal Engagement in Turkey's Enterprise",
    image: '/Images/Marketing Overview Project 5.png',
    summary:
      'A Turkey heavy-industry and energy B2B company (2024 CRM data) has inefficient campaign allocation, limiting conversion and revenue growth.',
    insights: [
      'Webinar and Email deliver strongest conversion with better cost efficiency',
      'LinkedIn Ads underperform, while Content Marketing spends high with mixed returns',
      'Utility converts best; Space and Residential convert weaker in short term',
      'Space and Residential still show stronger long-term loyalty potential',
      'Senior decision-makers (Marketing/Production/Sales) engage most; email drives attendance best',
    ],
    tags: ['Data Analyst', 'Tableau', 'MySQL'],
    links: [
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-5-Marketing-Performace-Customer-Personnel-Engagement-in-Turkeys-Enterprise',
        type: 'github',
      },
    ],
  },
  {
    id: 6,
    role: 'Data Analyst',
    title: 'Customer Retention Problem in Olist',
    image: '/Images/Overview Project 6.png',
    summary:
      'Olist, a Brazilian e-commerce enabler (2016-2018), achieved strong growth but faced structurally low customer retention across categories.',
    insights: [
      'Revenue and orders increased, but retention stayed around only 3%',
      'Even repeat-friendly categories still had low retention despite high order volume',
      'Delivery lead time can be long (avg 12.5 days; P95 up to ~40 days)',
      'Freight, delay, and rating differences are too small to fully explain retention',
    ],
    tags: ['Data Analyst', 'MySQL', 'Power BI'],
    links: [
      {
        label: 'Power BI Service',
        url: 'https://app.powerbi.com/links/nkyBPPfJvm?ctid=7212a37c-41a9-4402-9f69-ac32c6f76e1a&pbi_source=linkShare',
        type: 'powerbi',
      },
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-6-Customer-Retention-Problem-in-Olist',
        type: 'github',
      },
    ],
  },
  {
    id: 7,
    role: 'Data Analyst',
    title:
      'Sales & Customer Segmentation Analysis in Online Retail - Extended Version (Python)',
    image: '/Images/Matrix Cohort Analysis Project 7.png',
    summary:
      'A UK online gifts and decor store (2009-2011 extended view) shows strong seasonal spikes but weak retention outside peak periods.',
    insights: [
      'Revenue peaks around Black Friday, then drops sharply with high January returns',
      'Revenue concentration is high: ~34% of customers generate ~80%',
      'Retention is weak outside seasonal peaks, with limited repeat in newer cohorts',
      'CLV is uneven and heavily dependent on a small high-value customer base',
      'Co-purchase patterns are mostly variants, not strong cross-category bundles',
    ],
    tags: ['Data Analyst', 'Python'],
    links: [
      {
        label: 'Full Project Details',
        url: 'https://github.com/HoangTheAnalyst/Project-7-Sales-Customer-Segmentation-Analysis-in-an-Online-Retail-Company-UK-Extended-Version',
        type: 'github',
      },
    ],
  },
];