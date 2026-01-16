// Navigation links - Section anchors on home page
export const sectionLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
] as const;

// Navigation links - Separate pages
export const pageLinks = [
  { name: "Photography", href: "/photography" },
  { name: "Logos", href: "/logos" },
  { name: "Animations", href: "/animations" },
  { name: "Book Reviews", href: "/writing" },
] as const;

// Combined nav links for backward compatibility
export const navLinks = [...sectionLinks, ...pageLinks] as const;

// Hero/Header data
export const heroData = {
  name: "Hal Wall",
  title: "Data Engineer at Chubb Insurance",
  tagline: "Somewhere between Databricks and Tolstoy.",
  location: "Barnes, London",
};

// About section text
export const aboutText = [
  `Analytical, creative, and quietly relentless. I'm a London-based Data Engineer with a background in Theoretical Physics and a deep love for building clean, scalable, intelligent systems. I work at the intersection of data, machine learning, distributed architecture, and cloud transformation, helping organisations turn complex information into clarity and action.`,

  `Outside the data world, I'm a devoted reader of fiction and philosophy, a long-distance runner, and an enthusiastic hiker, often found exploring the wilder corners of the UK with my dog. Whether I'm building resilient pipelines or trekking through Glen Coe, I bring the same focused energy: improve continuously, learn deeply, and leave things better than I found them.`,
];

// Experience data
export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  description: string;
  skills: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Data Engineer, Global Analytics",
    company: "Chubb Insurance",
    companyUrl: "https://www.chubb.com",
    dateRange: "Aug 2025 — Present",
    description:
      "Selected to join the Global Analytics team, where I work across North America, EMEA, and APAC to architect and maintain global datasets for enterprise risk assessment. Building resilient, cloud-native data pipelines on Databricks and implementing complex entity resolution algorithms, enabling underwriters and business teams to make more accurate risk decisions and premium calculations at scale.",
    skills: ["Python", "SQL", "Databricks", "PySpark", "Azure", "Postman"],
  },
  {
    title: "Data Engineer, EMEA Analytics",
    company: "Chubb Insurance",
    companyUrl: "https://www.chubb.com",
    dateRange: "Nov 2024 — Aug 2025",
    description:
      "Collaborated with data scientists on end-to-end data products for AI-driven portfolio management. Led Databricks optimization efforts and shaped platform governance during Azure migration. Implemented Unity Catalog and automated business-critical pipelines using Kafka.",
    skills: ["Python", "SQL", "Databricks", "PySpark", "Azure", "Unity Catalog"],
  },
  {
    title: "Data Engineer",
    company: "AXA Insurance",
    companyUrl: "https://www.axa.co.uk",
    dateRange: "Jun 2025 — Aug 2025",
    description:
      "Deep-dive into complex metadata-driven infrastructure. Created architectural diagrams for pipeline clarity and enhanced GDPR compliance through a Deletion & Retention framework. Automated record removal across medallion architecture.",
    skills: ["Python", "Databricks", "ADF", "Databricks", "Azure DevOps"],
  },
  {
    title: "Junior Data Engineer",
    company: "Quilter Financial Planning",
    companyUrl: "https://www.quilter.com",
    dateRange: "Oct 2022 — Nov 2024",
    description:
      "Drove cloud migration strategy from on-premises to Azure-native pipelines. Designed a custom PySpark CDC solution that reduced data volumes by 85% and cut file transfer times from 1+ hour to 15 minutes. Partnered with product managers and analysts to deliver data products.",
    skills: ["Databricks", "Azure Data Factory", "Python", "SQL", "PySpark", "Power BI"],
  },
  {
    title: "Marketing Executive",
    company: "Twogether",
    companyUrl: "https://www.wearetwogether.com",
    dateRange: "Mar 2021 — Apr 2022",
    description:
      "Owned analytics reporting across B2B marketing campaigns. Piloted and scaled employee advocacy program. Collaborated on diversity and inclusion initiatives while managing stakeholder relationships.",
    skills: ["Analytics", "Campaign Management", "Stakeholder Engagement"],
  },
  {
    title: "Freelance Designer & Creative",
    company: "WallCache",
    companyUrl: "/photography",
    dateRange: "Oct 2019 — May 2021",
    description:
      "Founded a creative consultancy delivering photography, branding, and design work. Managed client relationships and design roadmaps, creating visual identities for businesses ranging from startups to established brands.",
    skills: ["Photography", "Graphic Design", "Creative Direction", "Branding"],
  },
];

// Project data
export interface ProjectLink {
  url: string;
  text: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  links?: ProjectLink[];
  image?: string;
  skills: string[];
  featured?: boolean;
}

export const projectData: Project[] = [
  {
    title: "Timewell",
    description:
      "An annual leave planner for UK employees. Stripped of its usual HR clunkiness and dressed in clarity. It offers visual insight into your year ahead and calculates the ROI of your time off. Vanilla JavaScript, no build step required, just honest utility.",
    link: "https://timewell.uk",
    links: [
      { url: "https://timewell.uk", text: "timewell.uk" },
      { url: "https://github.com/wallcache/annual_leave_planner", text: "GitHub" },
    ],
    skills: ["JavaScript", "HTML/CSS", "UX Design"],
    featured: true,
  },
  {
    title: "Renovision",
    description:
      "An AI-powered property renovation visualization tool. Paste a Rightmove URL, select rooms, configure a renovation style, and see possibilities beyond avocado walls. Built during my partner and I's own property search.",
    link: "https://renovision.uk",
    links: [
      { url: "https://renovision.uk", text: "renovision.uk" },
      { url: "https://github.com/wallcache/renovision", text: "GitHub" },
    ],
    skills: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Long Form Press",
    description:
      "A literary goods brand for serious readers. Small-batch production of bookmarks, literary prints, t-shirts and curated goods; celebrating the canon and the craft of paying attention.",
    link: "https://longformpress.com",
    linkText: "longformpress.com",
    skills: ["E-commerce", "Brand Design", "Product Design", "Copywriting"],
    featured: true,
  },
];

// Writing/Book review data
export interface WritingItem {
  title: string;
  author?: string;
  category: "book-review" | "essay" | "blog";
  excerpt: string;
  rating?: number;
  link?: string;
  date?: string;
}

export const writingData: WritingItem[] = [
  {
    title: "Moby Dick",
    author: "Herman Melville",
    category: "book-review",
    excerpt:
      "A spiritual odyssey disguised as a whaling manual. Shakespearean intensity meets maritime chaos. The meaning is in the marginalia.",
    rating: 5,
    link: "/writing/book-reviews/moby-dick",
    date: "Oct 2024",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    category: "book-review",
    excerpt:
      "Tolstoy's treatise on historical causation, free will, and character depth. 635,000 words that somehow feel too short.",
    rating: 5,
    link: "/writing/book-reviews/war-and-peace",
    date: "Feb 2024",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    category: "book-review",
    excerpt:
      "A theological inquiry into faith, suffering, and the Grand Inquisitor. Dostoevsky at his most ambitious and devastating.",
    rating: 5,
    link: "/writing/book-reviews/the-brothers-karamazov",
    date: "Nov 2023",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    category: "book-review",
    excerpt:
      "Macondo rises and falls in magical realist prose. Seven generations of Buendías trapped in circular time.",
    rating: 5,
    link: "/writing/book-reviews/one-hundred-years-of-solitude",
    date: "Aug 2023",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    category: "book-review",
    excerpt:
      "All happy families are alike. Tolstoy's examination of love, society, and moral consequence.",
    rating: 5,
    link: "/writing/book-reviews/anna-karenina",
    date: "May 2023",
  },
  {
    title: "The Engineer's Case for Reading Literature",
    category: "essay",
    excerpt:
      "Why data engineers should read fiction. Technical rigor meets human understanding through the practice of attention.",
    link: "/writing/blog/engineers-case-for-literature",
    date: "Nov 2024",
  },
];

// Social links
export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "mail";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/wallcache",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/henrynwall/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/wallcache",
    icon: "instagram",
  },
  {
    name: "Email",
    url: "mailto:henry.n.wall@gmail.com",
    icon: "mail",
  },
];

// Education data
export interface Education {
  institution: string;
  degree: string;
  dateRange: string;
  details?: string;
}

export const educationData: Education[] = [
  {
    institution: "Imperial College London",
    degree: "2:1 BSc in Theoretical Physics",
    dateRange: "2017 — 2020",
    details:
      "Final year thesis on the mathematical derivation of Black-Scholes-Merton model from physical first principles.",
  },
  {
    institution: "Imperial College Business School",
    degree: "Business Analytics",
    dateRange: "2022",
    details:
      "Machine learning techniques, data visualization, and optimization in Python.",
  },
];

// Photography data
export interface Photo {
  src: string;
  alt: string;
  category: "Portrait" | "Landscape" | "Cityscape";
}

// Personal photography - categorized
export const portraitPhotos: Photo[] = [
  { src: "/assets/images/photography/wallcache_best_photos27.jpg", alt: "Portrait photography - woman under cherry blossoms", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos28.jpeg", alt: "Portrait photography - man smiling outdoors", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos29.jpg", alt: "Portrait photography - woman with guitar", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos30.jpeg", alt: "Portrait photography - woman painting", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos35.jpg", alt: "Portrait photography - woman at keyboard", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos38.jpeg", alt: "Portrait photography - elderly man with dog", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos39.jpeg", alt: "Portrait photography - woman by column", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos40.jpeg", alt: "Portrait photography - Coffee Community", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos41.jpeg", alt: "Portrait photography - blonde woman", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos42.jpeg", alt: "Portrait photography - woman by column B&W", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos43.jpeg", alt: "Portrait photography - man with skateboard", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos44.jpg", alt: "Portrait photography - woman at Bank of England", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos45.jpg", alt: "Portrait photography - woman with vinyl records", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos46.jpeg", alt: "Portrait photography - man in beanie", category: "Portrait" },
  { src: "/assets/images/photography/wallcache_best_photos47.jpeg", alt: "Portrait photography - man in white shirt", category: "Portrait" },
];

export const landscapePhotos: Photo[] = [
  { src: "/assets/images/photography/wallcache_best_photos1.jpg", alt: "Landscape photography - coastal seascape", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos2.jpg", alt: "Landscape photography - snowy hills sunset", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos4.jpg", alt: "Landscape photography - countryside with clouds", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos5.jpg", alt: "Landscape photography - seascape", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos6.jpeg", alt: "Landscape photography - moorland road", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos9.jpg", alt: "Landscape photography - hiker with mountain", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos12.jpeg", alt: "Landscape photography - coastal camping", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos15.jpeg", alt: "Landscape photography - sunset hill silhouette", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos23.jpg", alt: "Landscape photography - dramatic clouds", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos25.jpeg", alt: "Landscape photography - autumn park rainbow", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos31.jpeg", alt: "Landscape photography - moorland", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos32.jpeg", alt: "Landscape photography - sheep in field", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos34.jpeg", alt: "Landscape photography - plant leaves", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos48.jpg", alt: "Landscape photography - field", category: "Landscape" },
  { src: "/assets/images/photography/wallcache_best_photos49.jpg", alt: "Landscape photography - lake with clouds", category: "Landscape" },
];

export const cityscapePhotos: Photo[] = [
  { src: "/assets/images/photography/wallcache_best_photos3.jpeg", alt: "Cityscape photography - sunset with streetlamps", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos7.jpeg", alt: "Cityscape photography - London City Hall", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos8.jpeg", alt: "Cityscape photography - skyscrapers", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos10.jpeg", alt: "Cityscape photography - Canary Wharf", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos11.jpeg", alt: "Cityscape photography - The Shard sunset", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos13.jpg", alt: "Cityscape photography - rooftop view", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos14.jpg", alt: "Cityscape photography - London bus stop", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos16.jpeg", alt: "Cityscape photography - autumn street", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos17.jpeg", alt: "Cityscape photography - bridge silhouette", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos18.jpeg", alt: "Cityscape photography - Tower Bridge", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos19.jpeg", alt: "Cityscape photography - Shard in fog", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos20.jpeg", alt: "Cityscape photography - observation deck view", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos21.jpeg", alt: "Cityscape photography - Shard with plane", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos22.jpg", alt: "Cityscape photography - skyscrapers", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos24.jpeg", alt: "Cityscape photography - window view Shard", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos26.jpeg", alt: "Cityscape photography - modern architecture", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos33.jpg", alt: "Cityscape photography - Tower Bridge Thames", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos36.jpg", alt: "Cityscape photography - skyscrapers fog", category: "Cityscape" },
  { src: "/assets/images/photography/wallcache_best_photos37.jpg", alt: "Cityscape photography - London bridge pink", category: "Cityscape" },
];

// Photography projects (commercial work)
export interface PhotographyProject {
  name: string;
  slug: string;
  description: string;
  images: string[];
}

export const photographyProjects: PhotographyProject[] = [
  {
    name: "The Coffee Community",
    slug: "the-coffee-community",
    description: "The Coffee Community runs three specialty coffee trucks across London. I shoot their events and provide content for their active social media.",
    images: Array.from({ length: 30 }, (_, i) => `/assets/images/photography/the-coffee-community/TCC${i + 1}.JPG`),
  },
  {
    name: "We Met At Eight",
    slug: "wemetateight",
    description: "Event photography for We Met At Eight, London's dating events company.",
    images: Array.from({ length: 20 }, (_, i) => `/assets/images/photography/WeMetAtEight/wma8${i + 1}.JPG`),
  },
  {
    name: "Vivienne Westwood for Harrods",
    slug: "vw-harrods",
    description: "Campaign photography for Vivienne Westwood at Harrods.",
    images: Array.from({ length: 30 }, (_, i) => `/assets/images/photography/vw-harrods/VW_Harrods_HW${i + 1}.jpg`),
  },
];

// Combined photography data for backward compatibility
export const photographyData: Photo[] = [...portraitPhotos, ...landscapePhotos, ...cityscapePhotos];

// Logo data
export interface Logo {
  src: string;
  name: string;
  slug: string;
  folder: string;
  description?: string;
  imageCount: number;
}

export const logosData: Logo[] = [
  { src: "/assets/images/projects/logo-design/ARUS/hero.png", name: "ARUS", slug: "arus", folder: "ARUS", description: "Supermarket in Eatern Europe", imageCount: 11 },
  { src: "/assets/images/projects/logo-design/AssetLab/hero.png", name: "AssetLab", slug: "assetlab", folder: "AssetLab", description: "Financial services brand", imageCount: 15 },
  { src: "/assets/images/projects/logo-design/Crowd0/hero.png", name: "Crowd0", slug: "crowd0", folder: "Crowd0", description: "NFT crowd-sourcing platform", imageCount: 52 },
  { src: "/assets/images/projects/logo-design/Farrago/hero.jpg", name: "Farrago", slug: "farrago", folder: "Farrago", description: "Creative music agency", imageCount: 51 },
  { src: "/assets/images/projects/logo-design/NextDistrict/hero.jpeg", name: "NextDistrict", slug: "nextdistrict", folder: "NextDistrict", description: "NFT sales", imageCount: 28 },
  { src: "/assets/images/projects/logo-design/OnlyOne/hero.jpeg", name: "OnlyOne", slug: "onlyone", folder: "OnlyOne", description: "All-in-one drinks brand", imageCount: 70 },
  { src: "/assets/images/projects/logo-design/SLINK/hero.png", name: "SLINK", slug: "slink", folder: "SLINK", description: "Networking app", imageCount: 12 },
  { src: "/assets/images/projects/logo-design/VineMe/hero.png", name: "VineMe", slug: "vineme", folder: "VineMe", description: "Christian social media app", imageCount: 27 },
  { src: "/assets/images/projects/logo-design/artems-gym/hero.png", name: "Artems Gym", slug: "artems-gym", folder: "artems-gym", description: "Australian gym", imageCount: 12 },
  { src: "/assets/images/projects/logo-design/olive-and-co/hero.png", name: "Olive & Co", slug: "olive-and-co", folder: "olive-and-co", description: "Table scaping duo", imageCount: 16 },
  { src: "/assets/images/projects/logo-design/rachael-perry/hero.png", name: "Rachael Perry", slug: "rachael-perry", folder: "rachael-perry", description: "Personal fashion brand", imageCount: 10 },
  { src: "/assets/images/projects/logo-design/thoulstonePark/hero.png", name: "Thoulstone Park", slug: "thoulstone-park", folder: "thoulstonePark", description: "Community and wellbeing farmshop", imageCount: 39 },
];

// Helper to get logo by slug
export function getLogoBySlug(slug: string): Logo | undefined {
  return logosData.find((logo) => logo.slug === slug);
}

// Logo project images - all images for each project
export const logoProjectImages: Record<string, string[]> = {
  arus: [
    "/assets/images/projects/logo-design/ARUS/hero.png",
    "/assets/images/projects/logo-design/ARUS/arus_images1.png",
    "/assets/images/projects/logo-design/ARUS/arus_images2.png",
    "/assets/images/projects/logo-design/ARUS/arus_images3.png",
    "/assets/images/projects/logo-design/ARUS/arus_images4.png",
    "/assets/images/projects/logo-design/ARUS/arus_images6.png",
    "/assets/images/projects/logo-design/ARUS/arus_images7.png",
    "/assets/images/projects/logo-design/ARUS/arus_images8.png",
    "/assets/images/projects/logo-design/ARUS/arus_images9.png",
    "/assets/images/projects/logo-design/ARUS/arus_images10.png",
    "/assets/images/projects/logo-design/ARUS/arus_images11.png",
  ],
  assetlab: [
    "/assets/images/projects/logo-design/AssetLab/hero.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images1.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images2.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images3.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images4.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images5.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images6.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images8.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images9.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images10.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images11.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images12.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images13.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images14.png",
    "/assets/images/projects/logo-design/AssetLab/assetlab_images15.png",
  ],
  crowd0: [
    "/assets/images/projects/logo-design/Crowd0/hero.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images2.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images3.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images4.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images5.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images6.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images7.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images8.jpeg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images9.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images14.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images16.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images23.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images35.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images36.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images37.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images39.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images41.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images42.jpg",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images43.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images46.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images47.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images48.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images49.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images51.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images52.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images53.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images54.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images55.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images56.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images57.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images58.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images59.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images60.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images61.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images62.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images63.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images64.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images65.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images66.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images67.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images68.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images69.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images70.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images71.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images72.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images73.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images74.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images75.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images76.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images77.png",
    "/assets/images/projects/logo-design/Crowd0/crowd0_images78.png",
  ],
  farrago: [
    "/assets/images/projects/logo-design/Farrago/hero.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images1.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images2.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images3.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images4.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images5.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images6.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images7.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images8.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images9.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images10.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images11.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images12.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images13.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images14.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images15.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images16.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images17.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images18.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images19.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images20.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images21.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images22.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images23.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images24.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images25.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images26.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images27.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images28.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images29.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images30.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images31.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images32.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images33.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images34.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images35.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images37.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images38.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images39.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images40.jpg",
    "/assets/images/projects/logo-design/Farrago/farrago_images42.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images43.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images44.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images45.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images46.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images47.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images48.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images49.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images50.png",
    "/assets/images/projects/logo-design/Farrago/farrago_images51.jpeg",
    "/assets/images/projects/logo-design/Farrago/farrago_images52.jpeg",
  ],
  nextdistrict: [
    "/assets/images/projects/logo-design/NextDistrict/hero.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images1.jpg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images2.jpg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images3.jpg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images4.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images5.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images6.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images7.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images8.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images9.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images10.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images11.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images12.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images13.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images14.jpg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images15.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images16.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images17.png",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images18.jpg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images19.jpg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images20.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images21.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images23.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images24.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images25.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images26.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images27.jpeg",
    "/assets/images/projects/logo-design/NextDistrict/nextdistrict_images28.jpeg",
  ],
  onlyone: [
    "/assets/images/projects/logo-design/OnlyOne/hero.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images1.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images2.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images3.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images4.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images5.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images6.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images7.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images8.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images9.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images10.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images11.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images12.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images13.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images14.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images15.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images16.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images17.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images18.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images19.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images20.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images21.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images22.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images23.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images24.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images25.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images26.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images27.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images28.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images29.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images30.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images31.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images32.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images33.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images34.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images35.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images36.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images37.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images38.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images39.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images40.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images41.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images43.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images44.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images45.png",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images46.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images47.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images48.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images49.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images50.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images51.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images52.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images53.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images54.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images55.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images56.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images57.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images58.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images59.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images60.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images61.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images62.jpg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images63.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images64.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images65.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images66.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images67.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images68.jpeg",
    "/assets/images/projects/logo-design/OnlyOne/onlyone_images70.jpeg",
  ],
  slink: [
    "/assets/images/projects/logo-design/SLINK/hero.png",
    "/assets/images/projects/logo-design/SLINK/slink_images1.png",
    "/assets/images/projects/logo-design/SLINK/slink_images2.png",
    "/assets/images/projects/logo-design/SLINK/slink_images3.png",
    "/assets/images/projects/logo-design/SLINK/slink_images4.png",
    "/assets/images/projects/logo-design/SLINK/slink_images5.png",
    "/assets/images/projects/logo-design/SLINK/slink_images6.png",
    "/assets/images/projects/logo-design/SLINK/slink_images7.png",
    "/assets/images/projects/logo-design/SLINK/slink_images9.png",
    "/assets/images/projects/logo-design/SLINK/slink_images10.png",
    "/assets/images/projects/logo-design/SLINK/slink_images11.png",
    "/assets/images/projects/logo-design/SLINK/slink_images12.png",
  ],
  vineme: [
    "/assets/images/projects/logo-design/VineMe/hero.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images1.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images2.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images3.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images4.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images5.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images6.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images7.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images8.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images10.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images11.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images12.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images13.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images14.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images15.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images16.png",
    "/assets/images/projects/logo-design/VineMe/vineme_images17.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images18.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images19.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images20.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images21.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images22.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images23.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images24.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images25.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images26.jpg",
    "/assets/images/projects/logo-design/VineMe/vineme_images27.jpg",
  ],
  "artems-gym": [
    "/assets/images/projects/logo-design/artems-gym/hero.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images1.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images2.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images3.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images4.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images5.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images6.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images7.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images8.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images9.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images11.png",
    "/assets/images/projects/logo-design/artems-gym/artemsgym_images12.png",
  ],
  "olive-and-co": [
    "/assets/images/projects/logo-design/olive-and-co/hero.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images1.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images2.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images3.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images4.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images5.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images7.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images8.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images9.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images10.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images11.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images12.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images13.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images14.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images15.png",
    "/assets/images/projects/logo-design/olive-and-co/oliveco_images16.png",
  ],
  "rachael-perry": [
    "/assets/images/projects/logo-design/rachael-perry/hero.png",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images2.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images3.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images4.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images5.png",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images6.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images7.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images8.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images9.jpeg",
    "/assets/images/projects/logo-design/rachael-perry/rachelperry_images10.jpeg",
  ],
  "thoulstone-park": [
    "/assets/images/projects/logo-design/thoulstonePark/hero.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images1.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images2.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images3.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images4.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images5.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images6.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images7.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images8.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images9.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images10.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images11.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images12.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images13.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images14.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images15.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images16.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images17.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images18.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images19.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images20.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images21.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images22.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images23.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images24.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images25.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images26.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images27.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images28.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images30.png",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images31.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images32.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images33.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images34.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images35.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images36.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images37.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images38.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images39.jpg",
    "/assets/images/projects/logo-design/thoulstonePark/thoulstone_park_images40.jpg",
  ],
};

// Helper to get project images by slug
export function getLogoProjectImages(slug: string): string[] {
  return logoProjectImages[slug] || [];
}

// Animations data
export interface Animation {
  name: string;
  videoSrc: string;
  posterTime: number; // seconds - frame to show as thumbnail (when logo is complete)
  aspectRatio?: "video" | "square"; // default is "video" (16:9)
}

export const animationsData: Animation[] = [
  { name: "Cothill House", videoSrc: "/assets/images/animations/Cothill House Animation.mp4", posterTime: 5.5 },
  { name: "Creative Solutions", videoSrc: "/assets/images/animations/Creative Solutions.mp4", posterTime: 7 },
  { name: "Hundred Hills", videoSrc: "/assets/images/animations/Hundred Hills.mp4", posterTime: 4 },
  { name: "SJSC", videoSrc: "/assets/images/animations/SJSC.mp4", posterTime: 4 },
  { name: "Sushi", videoSrc: "/assets/images/animations/SUSHI.mp4", posterTime: 9.5 },
  { name: "Terrier Beer - Scribble Intro", videoSrc: "/assets/images/animations/Terrier Beer _ Scribble Intro.mp4", posterTime: 9 },
  { name: "Terrier Beer", videoSrc: "/assets/images/animations/Terrier Beer.mp4", posterTime: 3.5 },
  { name: "Tiny Studios - Fun Animation", videoSrc: "/assets/images/animations/Tiny Studios Fun Animation.mp4", posterTime: 12, aspectRatio: "square" },
  { name: "Tiny Studios - Website Intro", videoSrc: "/assets/images/animations/Tiny Studios _ Website Intro.mp4", posterTime: 5 },
  { name: "Wallcache", videoSrc: "/assets/images/animations/Wallcache Animations.mp4", posterTime: 7 },
];

// Writing page reviews (detailed)
export interface BookReview {
  title: string;
  author: string;
  rating: number | null;
  type: "review" | "analysis";
  excerpt: string;
  fullReview?: string;
}

export const bookReviewsData: BookReview[] = [
  {
    title: "The Dharma Bums",
    author: "Jack Kerouac",
    rating: 5,
    type: "review",
    excerpt: "This book changed my life. Kerouac's follow-up to On the Road trades speed for contemplation. Where the earlier book races across America in cars, this one climbs mountains and sits zazen...",
    fullReview: `Kerouac's follow-up to On the Road trades speed for contemplation. Where the earlier book races across America in cars, this one climbs mountains and sits zazen. The beat aesthetic meets Buddhism.

Japhy Ryder (based on Gary Snyder) represents everything Kerouac aspires to: disciplined meditation practice combined with spontaneous joy. The contrast between Kerouac's alcoholic chaos and Japhy's studied simplicity creates the book's tension.

The mountain climbing sections are genuinely beautiful. Kerouac captures the physical exhaustion and spiritual clarity of high altitude with impressive precision. These passages justify the book's reputation.

But there's something performative about the Buddhism. Kerouac wants enlightenment without the work. The book acknowledges this contradiction without fully confronting it.

Lighter than Kerouac's best work, but still worth reading for the mountain scenes and its influence on 1960s counterculture.`,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    rating: 5,
    type: "review",
    excerpt: "Herman Melville's Moby-Dick isn't just a novel, it's a spiritual odyssey disguised as a whaling voyage. To read it is to embark on your own hero's journey...",
    fullReview: `Herman Melville's Moby-Dick isn't just a novel, it's a spiritual odyssey disguised as a whaling voyage. To read it is to embark on your own hero's journey, descending into the belly of the whale alongside Ishmael, confronting Captain Ahab's monomaniacal hunt, and emerging, if you survive, transformed.

This is Shakespeare channeled through American seas. Melville writes with Shakespearean intensity: tragic, Biblical, sublime. Every page drips with allusion to Genesis, Jonah, Job, but also with the Romantic poets, Milton's Satan, and the darkest corners of the unconscious. The whale itself becomes whatever you need it to be: vengeance, God, nature, fate, or the shadow-self you're hunting in your own depths.

Yes, it's about whaling. Yes, the cetology chapters can feel like detours. But that's the point. Journeys are circular. Meaning hides in the margins. While Melville teaches you about spermaceti and harpoons, he's actually teaching you about yourself: your quest, your darkness, your capacity for obsession and transcendence.

The language alone justifies multiple rereadings. Melville doesn't write sentences; he composes arias. This is literature as liturgy, as mythology, as voyage. It demands to be read aloud, savored, journaled upon, argued with, loved.

Read it slowly. Read it with others. Read it as if your life depends on it, because in some quiet, metaphysical way, it does.`,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    rating: 5,
    type: "review",
    excerpt: "Tolstoy's masterpiece isn't just a novel, it's an entire world. Over 1,200 pages, he creates a complete universe of interlocking lives, philosophical inquiry, and historical analysis...",
    fullReview: `Tolstoy's masterpiece isn't just a novel, it's an entire world. Over 1,200 pages, he creates a complete universe of interlocking lives, philosophical inquiry, and historical analysis. The scope is staggering, yet it never feels bloated.

The book operates on two levels: intimate character studies and grand historical narrative. Pierre's spiritual searching, Natasha's coming of age, Andrei's disillusionment. These personal arcs unfold against Napoleon's invasion of Russia. Tolstoy shows how history is made not by great men but by countless individual decisions.

His philosophy of history is controversial. He argues free will is an illusion, that events are determined by infinitesimally small causes we can't perceive. Whether you agree doesn't matter. The sections on historical causation force you to think differently about agency and determinism.

The characters feel more real than people you know. Tolstoy captures the subtle shifts in consciousness, the gap between what we think and what we say, the way we constantly revise our own narratives.

This is what the novel can do at its absolute peak. Difficult, demanding, but worth every page.`,
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    rating: 5,
    type: "review",
    excerpt: "Where War and Peace explores history and philosophy, Anna Karenina focuses relentlessly on the question: how should we live? Tolstoy presents two paths...",
    fullReview: `Where War and Peace explores history and philosophy, Anna Karenina focuses relentlessly on the question: how should we live? Tolstoy presents two paths: Anna's passionate but destructive affair, and Levin's search for meaningful work and family life.

Anna's tragedy isn't that she loves Vronsky, but that society's moral framework offers no room for her authentic self. Tolstoy shows enormous sympathy for her predicament while also acknowledging the real damage caused by her choices. The novel refuses easy answers.

Levin's parallel story, often overlooked, is equally compelling. His struggles with faith, his attempts to find purpose in agricultural reform, his awkward courtship of Kitty: these sections are among the most psychologically acute in all literature.

Tolstoy's famous opening line about unhappy families proves true in the execution. Each character's misery is specific, earned, devastating. The final train station scene is one of literature's most perfectly constructed moments of tragedy.

Dense, morally complex, formally perfect. Tolstoy at his absolute best.`,
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    rating: 5,
    type: "review",
    excerpt: "Dostoevsky's final novel is a theological and philosophical thunderstorm. Through the Karamazov brothers he explores every possible response to a world without God...",
    fullReview: `Dostoevsky's final novel is a theological and philosophical thunderstorm. Through the Karamazov brothers, intellectual Ivan, sensual Dmitri, saintly Alyosha, he explores every possible response to a world without God.

The Grand Inquisitor chapter alone justifies the book's reputation. Ivan's parable presents the most devastating critique of institutional religion ever written, yet Dostoevsky doesn't endorse it. He shows it as one position in an ongoing argument that has no resolution.

The murder mystery plot is almost beside the point. What matters is the endless conversation about faith, suffering, free will, and redemption. Dostoevsky stages philosophical debates that feel urgent, alive, necessary, not abstract academic exercises.

The emotional intensity never lets up. Characters suffer, doubt, confess, accuse, forgive. Everything is heightened, operatic, extreme. This could feel melodramatic in lesser hands, but Dostoevsky earns every moment.

Difficult, profound, exhausting in the best way. Essential reading for anyone grappling with questions of faith and meaning.`,
  },
  {
    title: "Notes From the Underground",
    author: "Fyodor Dostoevsky",
    rating: 5,
    type: "review",
    excerpt: "Dostoevsky's novella invented the modern anti-hero. The Underground Man is bitter, contradictory, self-aware enough to hate himself but not change...",
    fullReview: `Dostoevsky's novella invented the modern anti-hero. The Underground Man is bitter, contradictory, self-aware enough to hate himself but not change.

Part One is pure philosophy: a sustained attack on rationalism, utopianism, and the idea that humans act in their self-interest. The Underground Man argues we choose suffering to prove we're free.

Part Two dramatizes this through humiliating personal episodes. The Underground Man crashes a party, insults everyone, propositions a prostitute, then morally lectures her. He's awful, yet Dostoevsky makes him compelling.

The book's psychology is unnervingly accurate. The Underground Man's spirals of self-justification, his need to feel superior while knowing he's pathetic: this is how self-deception actually works.

This is the foundation for modernist alienation, existentialism, and basically all 20th-century literature about consciousness turned against itself.

Short, dense, brilliant. Essential Dostoevsky.`,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    rating: 5,
    type: "review",
    excerpt: "The first modern novel, and in many ways still the best. Cervantes created the template: self-aware, playful, deeply human, formally inventive...",
    fullReview: `The first modern novel, and in many ways still the best. Cervantes created the template: self-aware, playful, deeply human, formally inventive. Everything that came after is in conversation with this book.

Don Quixote's delusion, that he's a knight-errant in an age of merchants, is both absurd and noble. Cervantes never quite decides whether we should laugh at him or admire him. The genius is maintaining that ambiguity across 900 pages.

Sancho Panza's relationship with Quixote is one of literature's great friendships. He knows his master is mad, joins him anyway, gradually absorbs some of his idealism. By the end, Sancho is the one who doesn't want the adventure to stop.

The book is funnier than you expect, genuinely comic, not just historically important comedy. But it's also melancholic, especially in the second volume when Quixote and Sancho meet people who've read about their adventures. The layers of meta-fiction are dizzying.

Long, occasionally meandering, but never dull. The foundation of the modern novel for good reason.`,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    rating: 5,
    type: "review",
    excerpt: "García Márquez's masterpiece invented magical realism as we know it. The seamless blend of the miraculous and the mundane where a woman ascends to heaven while folding sheets...",
    fullReview: `García Márquez's masterpiece invented magical realism as we know it: the seamless blend of the miraculous and the mundane where a woman ascends to heaven while folding sheets and it's treated as just another Tuesday.

The Buendía family's multi-generational saga mirrors Latin American history: colonization, civil war, modernization, decay. But García Márquez tells it as myth, not documentary. History becomes legend becomes history again.

The recurring names (José Arcadio, Aureliano) could be confusing but are actually the point. The family repeats itself, makes the same mistakes, can't escape its patterns. This is what the novel says about Latin America, about all of us.

The prose is lush, sensual, dreamlike. García Márquez writes with absolute confidence. Ghosts appear, women give birth to children with pig tails, and the narrative never pauses to explain or justify.

Ending is devastating, not sad exactly, but final in a way few novels achieve. Required reading.`,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    rating: 5,
    type: "review",
    excerpt: "Brontë's only novel is a Gothic masterpiece of obsessive love and generational trauma. Heathcliff and Catherine's relationship destroys everyone around them...",
    fullReview: `Brontë's only novel is a Gothic masterpiece of obsessive love and generational trauma. Heathcliff and Catherine's relationship destroys everyone around them, yet Brontë makes their passion feel inevitable, almost cosmic.

The narrative structure is brilliant: multiple narrators, flashbacks within flashbacks, stories nested like Russian dolls. You're always at a remove from the central events, hearing them secondhand, which somehow intensifies them.

Heathcliff is one of literature's most complex villains. Brontë gives him clear motivation (class humiliation, Catherine's betrayal) but doesn't excuse the cruelty. He's victim and abuser, romantic hero and domestic tyrant.

The Yorkshire moors aren't just setting, they're a character, wild and indifferent. The human dramas play out against landscapes that dwarf human concerns.

The ending suggests regeneration (Hareton and young Catherine) but it feels tenuous. The novel's dark vision has more power than its hopeful conclusion.

Savage, weird, formally perfect. English literature's greatest Gothic novel.`,
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    rating: 5,
    type: "review",
    excerpt: "The greatest revenge story ever written. Dumas takes a simple premise and spins it into 1,200 pages of intricate plotting and moral complexity...",
    fullReview: `The greatest revenge story ever written. Dumas takes a simple premise, wronged man escapes prison, acquires fortune, systematically destroys his enemies, and spins it into 1,200 pages of intricate plotting and moral complexity.

Edmond Dantès's transformation from naive sailor to sophisticated count is perfectly calibrated. Dumas shows how suffering and time in the Château d'If don't just harden him, they educate him, reshape him completely. The count is almost a different person, which makes his revenge both satisfying and troubling.

The pleasure is in the plotting. Dumas orchestrates multiple revenge schemes simultaneously, each tailored to the specific crime committed against Dantès. The precision and patience are almost architectural.

But the book is smarter than pure revenge fantasy. As the count executes his plans, Dumas introduces doubt: is this justice or cruelty? The final chapters complicate everything, suggesting revenge might be God's province, not man's.

Pure narrative pleasure, but with real moral weight. The perfect long novel.`,
  },
  {
    title: "Stoner",
    author: "John Edward Williams",
    rating: 5,
    type: "review",
    excerpt: "Williams' quiet masterpiece about an unremarkable life is one of the most devastating novels ever written. William Stoner lives without drama yet the novel makes this ordinary life feel profound...",
    fullReview: `Williams' quiet masterpiece about an unremarkable life is one of the most devastating novels ever written. William Stoner lives without drama: unhappy marriage, mediocre career, modest accomplishments. Yet the novel makes this ordinary life feel profound.

The genius is in Williams' restraint. He presents Stoner's disappointments without sentimentality or condescension. The failed marriage, the departmental politics, the brief affair: all handled with clinical precision that somehow deepens the emotional impact.

What emerges is a meditation on how we measure a life's worth. Stoner achieves nothing by conventional standards, yet his dedication to teaching and literature has a dignity that transcends success or failure.

The prose is transparent, almost invisible. You barely notice the writing, just experience Stoner's life directly. This takes extraordinary craft.

A book that stays with you. Quietly devastating, deeply humane.`,
  },
  {
    title: "The Master & Margarita",
    author: "Mikhail Bulgakov",
    rating: 5,
    type: "review",
    excerpt: "Bulgakov's masterpiece is unlike anything else. Satan visits Soviet Moscow, Pontius Pilate appears in nested narrative, a writer and his lover suffer under Stalin...",
    fullReview: `Bulgakov's masterpiece is unlike anything else. Satan visits Soviet Moscow, Pontius Pilate appears in nested narrative, a writer and his lover suffer under Stalin. It's satire, fantasy, historical fiction, love story.

The Satan sections (Woland and his retinue) satirize Soviet bureaucracy with devastating precision. The absurdity of socialist realism, the terror of arbitrary power: Bulgakov captured it while living through it.

The Pilate chapters, initially seeming digressive, actually mirror the Moscow sections. Both show truth crushed by institutional power. Pilate's cowardice parallels the Soviet writers who betrayed art for safety.

Margarita's supernatural revenge on the critics who destroyed her lover is one of literature's great fantasy sequences: comic, violent, cathartic.

Bulgakov wrote this while dying, knowing it couldn't be published in his lifetime. The book is an act of profound courage, art created in defiance of totalitarianism.

Wild, profound, formally daring. Essential 20th-century literature.`,
  },
  {
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    rating: 5,
    type: "review",
    excerpt: "Murakami's masterpiece is a labyrinth of nested stories, historical trauma, and metaphysical mystery. Toru Okada searches for his missing cat, then his missing wife...",
    fullReview: `Murakami's masterpiece is a labyrinth of nested stories, historical trauma, and metaphysical mystery. Toru Okada searches for his missing cat, then his missing wife, descending into wells and alternate realities.

The novel's structure mirrors its themes. You're lost with the protagonist, trying to map connections between WWII atrocities, domestic violence, and supernatural experiences. Murakami refuses to provide clear answers.

The historical sections set in Manchuria are brutally violent, a departure from Murakami's usual restraint. These chapters anchor the novel's dreamlike present in real historical horror: Japan's wartime atrocities and their lingering psychic damage.

The well imagery is perfect: descent, isolation, transformation. Toru literally goes underground to find truth, or madness, or both.

At 600 pages, it's long, sometimes frustratingly oblique. But the accumulation of strange details creates genuine power. This is Murakami's most complete vision: weird, violent, melancholic, profound.

His best novel.`,
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    rating: 5,
    type: "review",
    excerpt: "Woolf's modernist masterpiece uses stream-of-consciousness to capture how we actually experience time and memory. The novel's three sections span a decade but feel both compressed and expanded...",
    fullReview: `Woolf's modernist masterpiece uses stream-of-consciousness to capture how we actually experience time and memory. The novel's three sections span a decade but feel both compressed and expanded.

Mrs. Ramsay dominates the first section through her presence; the second section ("Time Passes") records her absence. Woolf shows how a personality can structure reality even after death.

The technique is what matters. Woolf moves fluidly between minds, capturing the gap between inner experience and outer expression. What we say vs. what we mean, what we see vs. what we feel.

The lighthouse itself works as pure symbol: longed for, delayed, finally reached. The journey's meaning shifts depending on who undertakes it and when.

Not plot-driven in any conventional sense. The pleasure is in Woolf's sentences, her ability to render consciousness on the page. This is what modernism can do at its best.

Difficult, gorgeous, profound.`,
  },
  {
    title: "The Dead",
    author: "James Joyce",
    rating: 5,
    type: "review",
    excerpt: "Joyce's final Dubliners story is his greatest short fiction. A perfect crystallization of paralysis, epiphany, and mortality...",
    fullReview: `Joyce's final Dubliners story is his greatest short fiction: a perfect crystallization of paralysis, epiphany, and mortality.

Gabriel Conroy attends a holiday party, gives a speech, desires his wife, then learns she's thinking of a boy who died for love of her. The story builds from social comedy to devastating revelation.

The final pages are some of the most beautiful in English prose. Gabriel's realization about mortality and the past moves from his personal situation to universal truth. The snow falling "upon all the living and the dead" is one of literature's perfect endings.

Joyce shows Dublin's deadening effect through accumulating details: petty conversations, social performances, paralyzed lives. Then he opens it to cosmic scale without breaking the realistic frame.

At 16,000 words, it's Joyce's longest story but feels perfectly compressed. Every detail matters.

The bridge between the realist Joyce of Dubliners and the experimental Joyce of Ulysses. Absolute masterpiece.`,
  },
  {
    title: "Far From The Madding Crowd",
    author: "Thomas Hardy",
    rating: 5,
    type: "review",
    excerpt: "Hardy's fourth novel showcases his greatest strengths: complex female characters, agricultural detail, and the sense that human plans always founder against larger forces...",
    fullReview: `Hardy's fourth novel showcases his greatest strengths: complex female characters, agricultural detail, and the sense that human plans always founder against larger forces.

Bathsheba Everdene is one of Victorian literature's most interesting heroines: vain, independent, impulsive, intelligent. Hardy doesn't simplify her. She makes terrible choices and must live with consequences, but she's never reduced to a moral lesson.

The three suitors (steady Gabriel, passionate Troy, obsessive Boldwood) represent different masculinities, different relationships to land and labor. Hardy uses them to explore what sustains vs. what destroys.

The agricultural descriptions are extraordinary: sheep shearing, harvest, storm. Hardy grew up farming and it shows. These aren't decorative backgrounds but the novel's moral center. Those who understand the land (Gabriel) endure; those who don't (Troy) destroy.

Less bleak than Hardy's later novels, but just as formally perfect. Underrated masterpiece.`,
  },
  {
    title: "Tess of the d'Urbervilles",
    author: "Thomas Hardy",
    rating: 5,
    type: "review",
    excerpt: "Hardy's most devastating novel is a sustained argument against the moral framework of Victorian England. Tess is destroyed not by her own choices but by the society that judges her...",
    fullReview: `Hardy's most devastating novel is a sustained argument against the moral framework of Victorian England. Tess is destroyed not by her own choices but by the society that judges her.

The subtitle, "A Pure Woman," is Hardy's direct challenge to conventional morality. Tess is raped (though Hardy couldn't explicitly say so), abandoned, shamed. Victorian readers would call her fallen; Hardy insists she remains pure.

What makes this more than a thesis novel is Hardy's formal brilliance. The agricultural calendar structures the narrative: planting, harvest, winter, renewal. Tess moves through landscapes that mirror her inner states.

The ending is almost unbearably tragic. Hardy arranges the final sequences at Stonehenge with perfect symbolic weight. Tess becomes a sacrificial victim, destroyed by ancient patterns of oppression.

Not subtle, but intentionally so. Hardy's rage at injustice powers every page. Essential Victorian fiction.`,
  },
  {
    title: "The Importance of Being Earnest",
    author: "Oscar Wilde",
    rating: 5,
    type: "review",
    excerpt: "Wilde's final play is a perfect comedy of manners. The form executed so brilliantly it becomes something more than satire...",
    fullReview: `Wilde's final play is a perfect comedy of manners. The form executed so brilliantly it becomes something more than satire.

The plot is pure farce: mistaken identities, invented relatives, improbable revelations. But Wilde uses this structure to satirize Victorian society's obsession with surfaces over substance.

Every line is an epigram. Characters speak in perfectly balanced paradoxes that invert conventional wisdom. "The truth is rarely pure and never simple" isn't just funny, it's philosophically serious.

Lady Bracknell steals every scene. Her interrogation of Jack about being found in a handbag is one of English literature's great comic moments. The absurdity is played completely straight.

The genius is Wilde's complete commitment to frivolity. There's no moment of sincerity, no serious moral. The play argues that style is more important than substance, and proves it through its own perfection.

Flawless. The best English comedy of manners.`,
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    rating: 5,
    type: "review",
    excerpt: "Wilde's only novel is a Gothic fable about aestheticism taken to its logical extreme. Dorian Gray stays young and beautiful while his portrait ages and corrupts...",
    fullReview: `Wilde's only novel is a Gothic fable about aestheticism taken to its logical extreme. Dorian Gray stays young and beautiful while his portrait ages and corrupts, bearing the marks of his sins.

The premise is clever, but the book's real power is in Wilde's dialogue. Lord Henry's epigrams about art, morality, and pleasure are the novel's center. Whether Wilde endorses or satirizes these views remains ambiguous.

The conflict between aesthetic and moral values drives the narrative. Can beauty excuse evil? Should art serve morality? Wilde seems to argue both yes and no, depending on the chapter.

The novel was scandalous in 1890: its hints at homosexuality, its amoral protagonist. Modern readers might find it tame, but its formal daring remains.

The ending feels rushed. Dorian's sudden conscience seems unearned. But the central conceit is perfect, and Wilde's prose sparkles.

Essential Victorian literature, even if it's not quite a masterpiece.`,
  },
  {
    title: "Huckleberry Finn",
    author: "Mark Twain",
    rating: 5,
    type: "review",
    excerpt: "Hemingway claimed all American literature comes from this book. Overstatement, maybe, but not by much. Twain created the American vernacular voice...",
    fullReview: `Hemingway claimed all American literature comes from this book. Overstatement, maybe, but not by much. Twain created the American vernacular voice, proved that serious literature could be written in actual American speech.

Huck's moral development, choosing to "go to hell" rather than betray Jim, is one of American literature's great moments. Twain shows how official morality (supporting slavery) can be less ethical than "sin" (helping a slave escape).

The satire of American society is devastating: con men, feuds, lynch mobs, religious hypocrisy. Twain exposes it all through Huck's naive-but-perceptive narration.

The ending (Tom Sawyer's elaborate "rescue" scheme) frustrates many readers. But it's thematically perfect. Huck returns to society's games and racism. The freedom of the raft can't last.

The racial language is historically accurate but difficult. Twain's anti-racist purpose is clear, but teaching this requires serious context.

The foundation of American literature. Essential.`,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4,
    type: "review",
    excerpt: "Salinger's novel remains definitive for adolescent alienation. Holden Caulfield's voice still resonates despite decades of imitation and parody...",
    fullReview: `Salinger's novel remains definitive for adolescent alienation. Holden Caulfield's voice still resonates despite decades of imitation and parody.

The book's genius is its voice. Holden's colloquial, rambling narration feels completely authentic: the way a smart, damaged teenager actually talks and thinks. The "phoniness" obsession captures something real about adolescent idealism.

But there's more here than teenage angst. Holden's breakdown is clearly related to his brother Allie's death, though he can't directly confront this. The novel shows trauma's indirect effects brilliantly.

The ending is deliberately ambiguous. Is Holden in a mental hospital? Has anything changed? Salinger refuses easy resolution.

The controversy (banned books lists, would-be censors) seems almost quaint now. The book is gentle, even sweet. Holden's anger masks profound tenderness.

Doesn't feel as shocking as it once did, but the voice remains perfect. Essential reading.`,
  },
  {
    title: "On The Road",
    author: "Jack Kerouac",
    rating: 5,
    type: "review",
    excerpt: "The defining Beat Generation novel. Spontaneous prose attempting to capture the rhythm of American restlessness...",
    fullReview: `The defining Beat Generation novel. Spontaneous prose attempting to capture the rhythm of American restlessness. Kerouac and Dean Moriarty (Neal Cassady) drive back and forth across America searching for... something. Kicks, meaning, authentic experience.

The prose style is the point. Kerouac typed this on a single scroll of paper in three weeks, trying to capture thought at the speed of consciousness. Sometimes it works brilliantly. The language has genuine momentum, energy.

But the philosophy is adolescent. The constant movement, the jazz clubs, the drugs: it's all presented as liberation, but reads increasingly as aimless male privilege. The treatment of women is particularly dated.

What saves it is Kerouac's ear for American speech and his genuine love of the country's vastness. The descriptions of landscape, the snapshot portraits of minor characters: these moments transcend the book's limitations.

Historically important, occasionally beautiful, ultimately exhausting. Worth reading once.`,
  },
  {
    title: "Kafka On The Shore",
    author: "Haruki Murakami",
    rating: 4,
    type: "review",
    excerpt: "Murakami's most ambitious novel weaves together two storylines: a teenage runaway named Kafka and an elderly man named Nakata who talks to cats...",
    fullReview: `Murakami's most ambitious novel weaves together two storylines: a teenage runaway named Kafka and an elderly man named Nakata who talks to cats. As always with Murakami, the mundane and the surreal coexist without explanation.

The novel refuses to clarify what's real vs. metaphorical. Fish fall from the sky, people enter paintings, soldiers from World War II appear in forests. Murakami presents these events with the same flat affect as making coffee or riding a bus.

This ambiguity is both the book's strength and weakness. The dreamlike quality creates genuine mystery, but it can feel arbitrary. Not everything that's mysterious is meaningful.

The Oedipus myth parallels are heavy-handed. Murakami announces them repeatedly. More effective are the quieter meditations on loneliness and the search for connection.

Murakami at his Murakami-est. If you like his style, this is a strong example. If you don't, this won't convert you.`,
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    rating: 5,
    type: "review",
    excerpt: "Murakami's most realistic novel is a departure from his usual surrealism. No talking cats, no alternate dimensions, just young people navigating love and mental illness...",
    fullReview: `Murakami's most realistic novel is a departure from his usual surrealism. No talking cats, no alternate dimensions, just young people navigating love and mental illness in 1960s Tokyo.

Watanabe's relationship with the emotionally fragile Naoko and the vibrant Midori creates a straightforward romantic triangle, but Murakami complicates it by linking it to questions of memory, grief, and survival.

The book's treatment of mental illness is surprisingly sophisticated for 1987. Naoko's depression isn't romanticized or easily resolved. The sanatorium sections have real weight.

But there's something adolescent about the philosophy: the idea that some people are too sensitive for this world, that depth equals sadness. It's seductive when you're young, less convincing with age.

The prose is Murakami's usual clean, simple style. It reads quickly, almost dangerously so. The emotional manipulation is effective.

Moving, well-crafted, but ultimately feels less substantial than his weirder work.`,
  },
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    rating: 5,
    type: "review",
    excerpt: "Hesse's spiritual fable follows a young man's search for enlightenment in ancient India. Siddhartha rejects his Brahmin upbringing, spends years with ascetics, becomes a wealthy merchant...",
    fullReview: `Hesse's spiritual fable follows a young man's search for enlightenment in ancient India. Siddhartha rejects his Brahmin upbringing, spends years with ascetics, becomes a wealthy merchant, finally finds peace as a ferryman.

The book's strength is its structure. Siddhartha must experience everything (pleasure, asceticism, wealth, poverty) before understanding that wisdom can't be taught, only lived. Each phase of his journey feels necessary.

Hesse writes with beautiful simplicity. The prose has an almost biblical quality: clear, measured, deceptively deep. The river sections especially have genuine poetic power.

But it can feel didactic. The lessons are stated rather obviously. Where great spiritual literature (Tolstoy, Dostoevsky) shows religious experience through character and conflict, Hesse sometimes just explains it.

Still, for a short, accessible introduction to Eastern philosophy, it's hard to beat. Many people encounter Buddhism first through this book for good reason.`,
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    rating: 5,
    type: "review",
    excerpt: "Hemingway's late novella is his most stripped-down work. Just an old fisherman, a giant marlin, and the sea. The prose is elemental, almost biblical...",
    fullReview: `Hemingway's late novella is his most stripped-down work. Just an old fisherman, a giant marlin, and the sea. The prose is elemental, almost biblical.

Santiago's three-day struggle with the marlin becomes a meditation on endurance, dignity, and defeat. He catches the fish, sharks devour it, he returns with only a skeleton. But the struggle itself holds meaning.

Hemingway's code of grace under pressure finds its purest expression here. Santiago doesn't complain, doesn't explain, just endures. The stoicism could feel hollow but somehow doesn't.

The symbolism is obvious (Christ imagery, lions in dreams) but Hemingway earns it through the physical detail of fishing. This isn't abstract allegory. Santiago's hands crack and bleed.

Short enough to read in an afternoon, but it lingers. Hemingway's last great work before the decline.

Perfect minor masterpiece.`,
  },
  {
    title: "The Prince",
    author: "Niccolo Machiavelli",
    rating: 4,
    type: "review",
    excerpt: "Machiavelli's political treatise remains shocking precisely because it drops all pretense of morality. He describes how power actually works, not how it should work...",
    fullReview: `Machiavelli's political treatise remains shocking precisely because it drops all pretense of morality. He describes how power actually works, not how it should work.

The infamous advice, better to be feared than loved, the ends justify the means, isn't cynicism but realism. Machiavelli observed Renaissance Italian politics and reported what successful princes actually do.

The book's reputation as evil is partly misunderstanding. Machiavelli isn't endorsing cruelty for its own sake, just recognizing that political survival sometimes requires ruthlessness.

Modern readers might see this as obvious. We live after centuries of Machiavellian analysis. But in 1513, separating politics from Christian morality was radical.

The prose is clear, almost clinical. Machiavelli writes like a consultant preparing a memo, which makes his shocking claims even more disturbing.

Essential political philosophy, whether you agree or recoil.`,
  },
  {
    title: "A Christmas Carol",
    author: "Charles Dickens",
    rating: 5,
    type: "review",
    excerpt: "Dickens' ghost story invented Christmas as we know it. The modern holiday's emphasis on generosity, family, and redemption comes largely from this novella...",
    fullReview: `Dickens' ghost story invented Christmas as we know it. The modern holiday's emphasis on generosity, family, and redemption comes largely from this novella.

Scrooge's transformation from miser to philanthropist should feel contrived but works through Dickens' commitment to the supernatural elements. The ghosts are genuinely eerie, not just moral devices.

The social criticism is sharp. Dickens uses the Christmas setting to attack industrial capitalism's indifference to poverty. Tiny Tim's condition is directly linked to Scrooge's business practices.

The prose has Dickens' usual energy: comic exaggeration, sentimental appeals, vivid grotesques. He writes at full intensity even in this short form.

The story's massive cultural footprint (countless adaptations, parodies, references) proves its power. Despite familiarity, it still works.

Minor Dickens, but perfectly executed. The essential Christmas story.`,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 5,
    type: "review",
    excerpt: "Tolkien's first Middle-earth book is lighter than Lord of the Rings. Children's literature that adults can enjoy rather than epic fantasy...",
    fullReview: `Tolkien's first Middle-earth book is lighter than Lord of the Rings. Children's literature that adults can enjoy rather than epic fantasy.

Bilbo's journey from comfortable hobbit-hole to dragon's lair is a classic hero's journey, but Tolkien adds wrinkles. Bilbo succeeds through cleverness and mercy, not violence. His heroism is domestic-scale.

The world-building is remarkable for 1937: a fully realized secondary world with languages, histories, songs. Tolkien invented modern fantasy essentially from scratch.

The tone shifts from whimsical (trolls arguing about cooking) to genuinely dark (the Battle of Five Armies). This unevenness reflects Tolkien's struggle between children's story and epic.

The riddle contest with Gollum remains brilliant, playful and sinister simultaneously.

Not as ambitious as the trilogy, but more fun to read. The perfect introduction to Tolkien.`,
  },
  {
    title: "Flush",
    author: "Virginia Woolf",
    rating: 4,
    type: "review",
    excerpt: "Woolf's biography of Elizabeth Barrett Browning's cocker spaniel is her most accessible work. Playful, light, yet still formally interesting...",
    fullReview: `Woolf's biography of Elizabeth Barrett Browning's cocker spaniel is her most accessible work. Playful, light, yet still formally interesting.

Telling the story from Flush's perspective allows Woolf to satirize both Victorian society and biographical conventions. The dog notices details humans ignore: smells, textures, hierarchies.

The class commentary is sharp. Flush moves from country freedom to London confinement to Italian liberation. His experience mirrors broader Victorian social structures.

But it's minor Woolf. The experimental technique feels applied rather than necessary. The pleasure is in the wit, not the insight.

Still, there's something charming about Woolf taking a break from modernist intensity to write about a dog. The affection is genuine.

Slight but enjoyable. Not essential Woolf, but worth reading if you've finished the major works.`,
  },
];
