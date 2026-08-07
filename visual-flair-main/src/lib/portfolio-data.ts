// High-quality Unsplash placeholder images
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const profile = "/profile.png";
const pic2 = "/Pic 2.png";
export const INTRO = {
  caseNo: "HK-2026",
  initials: "HK",
  name: "Hari Krishna Polavarapu",
  title: "Mechanical Engineering Student • Leadership Driven • Passionate About Supply Chain & Business Operations",
  location: "Visakhapatnam, Andhra Pradesh",

  log: [
    { n: "01", text: "3rd Year Mechanical Engineering Student at ANITS" },
    { n: "02", text: "President - NEC ANITS E-CELL" },
    { n: "03", text: "Placement Coordinator & IIC Coordinator" },
    { n: "04", text: "Open to internships and opportunities" }
  ]
} as const;

export const ABOUT = {
  intro: [
    "Hari Krishna Polavarapu is a 3rd-year Mechanical Engineering student at Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam, Andhra Pradesh.",
    "Currently President of NEC, Placement Coordinator, and IIC Coordinator for the Student Council building startup culture, campus innovation, and student opportunity across ANITS.",
  ],
  academicRecord: [
    { term: "1-1", sgpa: "7.69", cgpa: "7.69" },
    { term: "1-2", sgpa: "8.15", cgpa: "7.92" },
    { term: "2-1", sgpa: "6.36", cgpa: "7.38" },
  ],
  skills: [
    "CAD",
    "Autodesk Fusion 360",
    "Web Development",
    "Leadership",
    "Public Relations",
    "Event Management",
    "Sponsorship & Fundraising",
    "Business Development",
    "Recruiting",
    "Human Resources",
    "Team Management",
    "Crowd Management",
  ],
} as const;

export type LeadershipRole = {
  org: string;
  logo: string;
  role: string;
  promotion?: string;
  summary: string;
  detail: string;
  image?: string;
  aspect?: string;
  fit?: "cover" | "contain";
};

export type LeadershipYear = {
  year: string;
  label: string;
  roles: LeadershipRole[];
};

export const LEADERSHIP: LeadershipYear[] = [
  {
    year: "Year 1",
    label: "Foundation",
    roles: [
      {
        org: "BizVerve",
        role: "Public Relations Head",
         logo: "/logos/Bizverve.png",
        summary:
          "Co-founded entrepreneurship club; ran workshops, ideathons, and Gen E Summit-25.",
        detail:
          "Co-founded BizVerve to build startup and entrepreneurship culture on campus. Led PR, organized workshops, ideathons, and entrepreneur-focused events. Flagship event: Gen E Summit a 2-day summit with games, interactive sessions, and motivational talks from visiting entrepreneurs, drawing attendees from across Visakhapatnam.",
        image: "/images/bizverve1.png",
        aspect:"aspect-[3/4]",
        fit: "contain",
      },
      {
        org: " Institution's Innovation Counci (IIC)",
         logo:"/logos/IIC logo.png",
        role: "Student Coordinator",
        summary: "Collaborated with IEEE and other bodies on campus events.",
        detail:
          "Served as IIC Coordinator, collaborating with IEEE and other bodies to run events, workshops, and webinars across college.",
        image: "/images/iic1.jpg",
        aspect:"aspect-video",
        fit: "cover",
      },
    ],
  },
  {
    year: "Year 2",
    label: "Expansion",
    roles: [
      {
        org: "Between Breaks",
         logo: "/logos/bb2.png",
        role: "Campus Ambassador",
        summary: "Ambassador for a LinkedIn-style student achievements platform.",
        detail:
          "Campus Ambassador for Between Breaks a startup building a LinkedIn-style platform for college students to share achievements and experiences.",
        image:"/images/bb3.jpg" ,
        aspect:"aspect-[1/1]",
        fit: "cover",
      
      },
      {
        org: "Street Cause",
         logo: "/logos/street cause.png",
        role: "Divisional Executive Board → Cheif Executive Board",
        promotion: "Divisional Executive Board → Cheif Executive Board",
        summary: "Divisional Executive Board member promoted to Cheif Executive Board; ran community projects across Visakhapatnam.",
        detail:
          "Started as DEB (Divisional Executive Board) at Street Cause's Visakhapatnam division, running community projects orphanage visits, old-age home support, tree plantation, fundraising events and donations etc. Promoted to CEB (Chief Executive Board Vishakapatnam): Digital (content/social posts), Legal & Finance (audit filing), and HR (retention and team culture). Also mentored DEB teams at other college chapters.",
        image: "/images/sc1.png" ,
      },
      {
         org: "Unstop",
          logo: "/logos/Unstop.png",
        role: "Campus Public Relations Representative",
         summary: "Partnered with Unstop to organize workshops and expand student engagement.",
        detail:
        "Served as Unstop's Campus Public Relations Representative during my second year, strengthening the collaboration between Unstop and ANITS. Led promotional campaigns, coordinated with student communities, and successfully organized events such as an LLM Workshop along with other technical and career-development workshops. Focused on increasing student participation and creating opportunities for learning, networking, and skill enhancement.",
         image: "/images/unstop1.pg",
      },
      {
        org: "AIESEC",
        logo: "/logos/AIESEC.png",
        role: "General Body → Management Board",
        promotion: "General Body → Managemet Board",
        summary: "Member of Outgoing Global Volunteer Department (oGV)  promoted to Managing Board  Business Development (BD); raised ₹1.5L for WLS.",
        detail:
          "Joined AIESEC as General Body member in the oGV department (Outgoing Global Volunteer), maintaining international partnerships with chapters abroad (e.g., Egypt) for volunteer exchange. Promoted to MB (Managing Board), Business Development — raised ₹1.5 lakh in sponsorship within span of one month for WLS (Women Leadership Summit), an international event, while also serving as Core Committee Vice President for the event.",
        image: "/leadership-aiesec-wls-1.jpg",
      },
      {
        org: "National Entrepreneurship Challenge-26",
         logo: "/logos/ECELL 1.png",
        role: "Public Relations",
        summary:"Promoted entrepreneurship on campus through strategic outreach, startup initiatives, and national-level participation.",
        detail:
         "As the Public Relations Head of the ANITS Entrepreneurship Cell, I led branding, communications, and student engagement initiatives to cultivate an entrepreneurial culture on campus. I coordinated startup awareness campaigns, entrepreneurship workshops, founder interactions, and guidance sessions that encouraged students to explore innovation and venture creation. I also represented ANITS in the National Entrepreneurship Challenge (NEC) 2025 at IIT Bombay's E-Summit, where our team achieved the 76th rank nationally, reflecting our collaborative efforts and entrepreneurial vision.",

        image: "/images/nec1.png",
        aspect:"aspect-[3/4]",
        fit: "contain",
      },
    ],
  },
  {
    year: "Year 3",
    label: "Present",
    roles: [
      {
        org: "National Entrepreneurship Challenge-26",
         logo: "/logos/ECELL 1.png",
        role: "President",
        promotion: "Public Relations Head → President",
        summary: "Promoted to President of ANITS E-Cell.",
        detail:
          "Promoted from Public Relations to President of ANITS E-Cell where I am leading the team in National Entrepreneurship Challenge conducted by IIT Bombay, leading strategy, events, and national representation for the organization.",
        image: "/images/nec2.png",
        aspect:"aspect-[4/5]",
        fit: "cover",
      
      },
      {
        org: "Student Council",
         logo: "/logos/council.png",
        role: "Student Council Member",
        summary: "Represents Department of Mechanical Engineering",
        detail:
          "Member of the Student Council representing the Mechanical Engineering department. Also serves as Placement Coordinator, connecting students with internship and placement opportunities.",
        image: u(""),
      },
      {
        org: "Institution's Innovation Counci (IIC)",
         logo: "/logos/IIC logo.png",
        role: "Coordinator",
        summary: "Continued Institution's Innovation Counci (IIC) coordination into Year 3.",
        detail:
          "Continuing as IIC Coordinator, supporting innovation culture and startup initiatives across campus.",
        image: u(""),
      },
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  year: string;
  skills: string[];
  thumb: string;
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Well-Being App",
    tagline: "Prototype built during TEKNOV8R internship",
    description:
      "Built a well-being application prototype during the TEKNOV8R internship (Year 1), combining web development with AI integration to explore student wellness and daily habit support.",
    year: "Year 1",
    skills: ["Web Development", "AI Integration", "AI-Assisted Development", "UI/UX Design", "Rapid Prototyping", "Digital Product Design"],
    thumb: "/images/app1.jpg",
  },
  {
    title: "EV Vehicle",
    tagline: "Prototype built during Capabl India EV Saksham internship",
    description:
      "Designed and built an electric vehicle prototype during the EV Saksham internship (Year 2), applying CAD and mechanical engineering fundamentals to a real-world mobility challenge.",
    year: "Year 2",
    skills: ["CAD", "Autodesk Fusion 360", "Electric Vehicle Assembly", "Fabrication & Welding", "Machining & Drilling", "Mechanical Systems Assembly", "Prototyping & Manufacturing"],
    thumb: "/images/ev1.jpg",
  },
  {
    title: "Production,Maintenance,Total Production Management(TPM)",
    tagline: "Industrial exposure to Maintenance, Production & TPM at HCCB",
    description:
      "Worked on real-world manufacturing operations during my HCCB internship (Year 3), gaining hands-on exposure to maintenance, production, and TPM while applying mechanical engineering principles in an industrial environment",
    year: "Year 2",
    skills: ["Production Operations", "Industrial Maintenance", "Total Productive Maintenance (TPM)", "Equipment & Machinery Handling", "Manufacturing Processes"],
    thumb: "/images/cc2.png",
  },
];

export type Experience = {
  org: string;
  role: string;
  year: string;
  description: string;
  skills: string[];
  logo: string;
};

export const EXPERIENCE: Experience[] = [
  {
    org: "TEKNOV8R Startup Solutions (OPC) Pvt. Ltd.",
    role: "Web Development Intern",
    year: "Year 1",
    description:
      "Web Development Intern at TEKNOV8R Startup Solutions, building web applications and exploring AI integration in a startup product environment.",
    skills: ["Web Development", "AI Integration", "AI-Assisted Development", "UI/UX Design", "Rapid Prototyping", "Digital Product Design"],
    logo: "/logos/tek logo.jpg", 
  },
  {
    org: "Capabl India",
    role: "EV Internship",
    year: "Year 2",
    description:
      "EV internship focused on vehicle design, CAD modeling, and hands-on prototype development for electric mobility solutions.",
    skills: ["CAD", "Autodesk Fusion 360", "Electric Vehicle Assembly", "Fabrication & Welding", "Machining & Drilling", "Mechanical Systems Assembly", "Prototyping & Manufacturing"],
    logo: "/logos/caplogo.png",
  },
  {
    org: "Hindustan Coca-Cola Beverages",
    role: "Manufacturing Intern",
    year: "Year 3",
    description:
      "Manufacturing internship working across maintenance, production, and TPM (Total Productive Maintenance) in an industrial setting.",
    skills: ["Production Operations", "Industrial Maintenance", "Total Productive Maintenance (TPM)", "Equipment & Machinery Handling", "Manufacturing Processes"],
    logo: "/logos/hccb logo.jpg",
  },
];

export type Achievement = {
  stat: string;
  label: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  { stat: "Leading from the Front", label: "Mentored teams across colleges, led student communities, and advanced entrepreneurship through workshops and innovation initiatives." },
  {
    stat: "₹2L Raised",
    label: "Successfully raised over ₹2 lakh in sponsorships by building partnerships with multiple organizations, managing sponsor outreach, and negotiating collaborations for large-scale student events.",
  },
  {
    stat: "76th Nationally",
    label: "NEC national round, Mumbai (out of 4,000+ colleges)",
  },
  {
    stat: "Co-Founded",
    label: "BizVERVE — entrepreneurship club & flagship 2-day Gen E Summit",
  },
  {
    stat: "3 Promotions",
    label: "Street Cause (DEB → CEB), AIESEC (GB → MB), NEC (PR → President)",
  },
   {
    stat: "Early Industry Experience",
    label: "Secured an internship at HCCB in my second year, gaining hands-on experience across Maintenance, Production & TPM.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  img: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Model Presentation",
    issuer: "Anil Neerukonda Institue of Technology and Sciences",
    date: "2024",
    img: "/certification/c4.jpg",
  },
  {
    title: "Idea Presentation",
    issuer: "Anil Neerukonda Institue of Technology and Sciences",
    date: "2024",
    img: "/certification/c12.jpg",
  },
  {
    title: "AI-Powered Well-Being App",
    issuer: "TEKNOV8R Startup Solutions (OPC) Pvt. Ltd.",
    date: "2024",
    img: "/images/tek2.pg",
  },
  {
    title: "Workshop on Raising Capital and Mapping Finance for Startups",
    issuer: "Institue's Innovation Council",
    date: "2025",
    img: "/certification/c6.jpg",
  },
  {
    title: "Organising Gen E-Summit'25",
    issuer: "IIC,IEEE",
    date: "2025",
    img: "/certification/c2.jpg",
  },
  {
    title: "Organising Engineer's Day Workshop",
    issuer: "Unstop",
    date: "2025",
    img: "/certification/c8.jpg",
  },
  {
    title: "INNOVEX 2025",
    issuer: "Institue's Innovation Council",
    date: "2025",
    img: "/certification/c7.jpg",
  },
    {
    title: "illuminate",
    issuer: "IIT BOMBAY",
    date: "2025",
    img: "/certification/c9.png",
  },
    {
    title: "National Entrepreneurship Challenge 2025",
    issuer: "IIT BOMBAY",
    date: "2025",
    img: "/certification/c1.png",
  },
  {
    title: "TECH INNOVATION 2025",
    issuer: "Institue's Innovation Council",
    date: "2025",
    img: "/certification/c5.jpg",
  },
  {
    title: "RADIAN 2K26",
    issuer: "Anil Neerukonda Institue of Technology and Sciences",
    date: "2025",
    img: "/certification/c10.jpg",
  },
{
    title: "Capabl EV SAKSHAM",
    issuer: "Capabl",
    date: "2026",
    img: "/certification/c13.jpg",
  },


];

type GalleryItem = {
  src: string;
  alt: string;
  tag: string;
  year?: string;
  images?: string[];
};
export const GALLERY: GalleryItem[] = [
  {
    src: "/images/i1.jpg",
    alt: "",
    tag: "Ideathon",
    year: "Year 1",
    images: [

 
  "/images/i1.jpg",
  "/images/i2.jpg",
  "/images/i3.jpg",
  "/images/i4.jpg",
 
],
  },
  {
  src: "/images/biz1.png",
  alt: "Gen E Summit Day 1",
  tag: "BizVerve",
  year: "Year 1",
  images: [
    "/images/biz1.png",
    "/images/biz2.jpg",
    "/images/biz3.jpg",
    "/images/biz4.JPG",
    "/images/biz5.png",
    "/images/biz6.jpg",
    "/images/biz7.JPG",
    "/images/biz8.JPG",
    "/images/biz9.JPG",
    "/images/biz10.jpg",
  ],
},

  {
    src:  "/images/sc2.jpg",
    alt: "Street Cause community project",
    tag: "Street Cause",
    year: "Year 2",
    images: [

 
  "/images/sc3.jpg",
  "/images/sc4.jpg",
  "/images/sc5.jpg",
  "/images/sc6.png",
  "/images/sc7.jpg",
  "/images/sc8.jpg",
  "/images/sc9.jpg",
  "/images/sc10.jpg",
  "/images/sc11.jpg",
  "/images/sc12.jpg",
],
  },
 
  {
    src: "/images/aiesec2.png",
    alt: "AIESEC event",
    tag: "AIESEC",
    year: "Year 2",
    images: [

 
  "/images/aiesec2.png",
  "/images/aiesec3.jpg",
  "/images/aiesec4.png",
  "/images/aiesec5.jpg",
  
],
  },
  {
    src: "/images/ev5.jpg",

    alt: "EV build",
    tag: "EV Saksham",
    year: "Year 2",
     images: [
       "/images/ev1.jpg",
  "/images/ev2.jpg",
  "/images/ev3.jpg",
  "/images/ev4.jpg",
  "/images/ev5.jpg",

 

  
],
  },
 

  
  {
    src: "/images/nec3.jpg",
    alt: "National Entrepreneurship Challenge 2025-26",
    tag: "NEC 2025-26",
    year: "Year 3",
     images: [
       "/images/nec3.jpg",
  "/images/nec4.jpg",
  "/images/nec5.jpg",
  "/images/nec6.jpg",
  "/images/nec7.JPG",

 

  
],
  },
  {
    src: 
  "/images/cc2.jpg",
    alt: "Coca-Cola plant visit",
    tag: "Coca-Cola",
    year: "Year 3",
        images: [

 "/images/cc2.jpg",
  "/images/cc3.jpg",
  "/images/cc4.jpg",
  "/images/cc5.jpg",
  "/images/cc6.jpg",
  "/images/cc7.jpg",
  "/images/cc8.jpg",
  "/images/cc9.jpg",
  "/images/cc10.jpg",
  
],
  },
];

export const CONTACT = {
  heading: "Let's connect",
  subline: "Open to opportunities in engineering, leadership, and campus innovation.",
  email: "hkpolax13@gmail.com", // Replace with your email
  linkedin: "https://www.linkedin.com/in/hari-krishna-polavarapu-60a827316/", // Replace with your LinkedIn
  instagram: "https://www.instagram.com/yk.iamhk/",
  resumeUrl: "/hk-resume.pdf", // Add your resume file to public/
  location: "Visakhapatnam, Andhra Pradesh · GMT +5:30",
} as const;

export const IMG = {
  hero: profile,
  aboutProfile: pic2,

};

