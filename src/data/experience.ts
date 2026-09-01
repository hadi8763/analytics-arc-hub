export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "ulink-assist",
    title: "AI Automation Intern (Remote)",
    company: "Ulink Assist Pte. Ltd.",
    location: "Singapore",
    type: "Internship",
    duration: "Sep 2025 – Mar 2026",
    startDate: "2025-09",
    endDate: "2026-03",
    description: [
      "Developed internal dashboards using HTML, CSS, and JavaScript",
      "Built AI chatbots and callbots for different business purposes using OpenAI API, Lindy, and Vapi",
      "Developed WhatsApp automation agents using n8n, Make.com, and SpeedBot",
      "Integrated AI and workflow automation solutions to streamline business operations and reduce manual tasks"
    ],
    technologies: ["OpenAI API", "Lindy", "Vapi", "n8n", "Make.com", "SpeedBot", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "cyres-usm",
    title: "Intern at Cybersecurity Research Center (CYRES)",
    company: "Universiti Sains Malaysia",
    location: "Georgetown, Malaysia",
    type: "Internship",
    duration: "Aug 2025 – Feb 2026",
    startDate: "2025-08",
    endDate: "2026-02",
    description: [
      "Processed PCAP network traffic data for security analysis",
      "Applied machine learning for anomaly and threat detection",
      "Identified abnormal network behaviour and potential threats",
      "Supported SOC threat investigation and response"
    ],
    technologies: ["Python", "Machine Learning", "PCAP Analysis", "Threat Detection", "SOC"]
  }
];

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  thesis?: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    id: "aiu-bcs",
    degree: "Bachelor in Computer Science (Honours)",
    major: "Data Science",
    institution: "Albukhary International University",
    location: "Alor Setar, Malaysia",
    duration: "10/10/2022 – 17/03/2026 (Completed)",
    grade: "3.50/4",
    thesis: "Phishing email detection using NLP and Deep Learning",
    coursework: [
      "Data Mining and Analytics",
      "Machine Learning",
      "Deep Learning",
      "Statistical Programming",
      "Probability and Statistics",
      "Artificial Intelligence",
      "Information Visualization",
      "Database Management",
      "Data Structures and Algorithms",
      "Natural Language Processing",
      "Software Engineering",
      "Web Design and Development"
    ]
  },
  {
    id: "hsc-armc",
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    institution: "Advanced Residential Model College",
    location: "Mymensingh, Bangladesh",
    duration: "31/07/2018 – 20/08/2020",
    grade: "5/5",
    coursework: []
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  type: "certification";
}

export const certifications: Certification[] = [
  {
    id: "google-pm",
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    year: 2024,
    type: "certification"
  },
  {
    id: "aws-ml",
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    year: 2024,
    type: "certification"
  }
];

export interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string[];
}

export const leadership: LeadershipRole[] = [
  {
    id: "sci-exec",
    title: "Executive Member",
    organization: "School of Computing and Informatics, AIU",
    duration: "2023 – 2024",
    description: [
      "Organized research seminars, webinars, career guidance talks, and other academic and student-focused events",
      "Supported event coordination, student engagement, and collaboration between students, faculty, and invited speakers"
    ]
  },
  {
    id: "cricket-president",
    title: "President & Captain",
    organization: "AIU Cricket Club",
    duration: "2023 – 2025",
    description: [
      "Led the university cricket club, managing team operations, training, events, tournaments, sponsorships, and logistics",
      "Represented AIU in inter-university and state-level competitions, achieving 1st Runner-Up and 2nd Runner-Up positions"
    ]
  },
  {
    id: "bsc-adviser",
    title: "Chief Student Adviser",
    organization: "Bangladeshi Students Community at AIU",
    duration: "2024 – 2025",
    description: [
      "Advised Bangladeshi students on academic, social, and campus matters while liaising with university management",
      "Guided the committee in organizing community activities and supported students in addressing concerns and challenges"
    ]
  },
  {
    id: "block-leader",
    title: "Block Leader",
    organization: "25I Male Hostel, AIU Residence Council",
    duration: "2022 – 2023",
    description: [
      "Assisted in welcoming and guiding new students to their rooms while monitoring hostel cleanliness and living conditions",
      "Monitored hostel activities and reported incidents or student concerns to relevant authorities"
    ]
  },
  {
    id: "badminton-committee",
    title: "Committee Member",
    organization: "AIU Badminton Club",
    duration: "2022 – 2023",
    description: [
      "Supported club activities, training sessions, events, and tournament coordination",
      "Assisted in promoting student participation and managing club operations"
    ]
  },
  {
    id: "shikhor-71",
    title: "Treasurer",
    organization: "Shikhor 71",
    duration: "2018 – 2020",
    description: [
      "Managed financial activities and supported initiatives providing basic necessities to underprivileged communities",
      "Supported underprivileged primary school students by providing educational materials and essential supplies"
    ]
  },
  {
    id: "blood-donors",
    title: "Member",
    organization: "Advanced Blood Donors Society, Advanced Residential Model College",
    duration: "2018 – 2020",
    description: [
      "Participated in blood donation drives and supported initiatives assisting patients and communities in need",
      "Promoted voluntary blood donation and community awareness activities within the college"
    ]
  }
];

export interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
}

export const awards: Award[] = [
  {
    id: "albukhary-scholarship",
    title: "Albukhary Foundation Scholarship Recipient",
    year: "2022",
    description: "Awarded the Albukhary Foundation Scholarship to pursue a Bachelor of Computer Science at Albukhary International University."
  },
  {
    id: "deans-list",
    title: "Dean's List Award — Multiple Semesters",
    year: "2022 – 2025",
    description: "Awarded by the School of Computing and Informatics, AIU for achieving a GPA of 3.50 or above in a semester."
  },
  {
    id: "sustainability-symposium",
    title: "First Place — Sustainability and Society Project Symposium",
    year: "2022",
    description: "Won 1st Prize under the Economy Cluster for \"AIU Social Capital\", a microloan initiative designed to help university students finance educational equipment such as laptops and support small entrepreneurship projects."
  }
];

export interface Volunteering {
  id: string;
  role: string;
  organization: string;
  year?: string;
  description?: string;
}

export const volunteering: Volunteering[] = [
  {
    id: "mcmc-ict",
    role: "Malaysia ICT Volunteer",
    organization: "Malaysian Communications and Multimedia Commission (MCMC)",
    year: "2022"
  },
  {
    id: "covid-volunteer",
    role: "COVID-19 Volunteer",
    organization: "Upazila Health Complex, Jamalganj, Sunamganj",
    year: "2019"
  },
  {
    id: "aiu-red-crescent",
    role: "Member",
    organization: "AIU Red Crescent"
  },
  {
    id: "community-engagement",
    role: "Community Engagement Volunteer",
    organization: "Desa Kedah Village",
    description: "Participated in road-cleaning activities, Qurban projects, and English teaching initiatives."
  }
];
