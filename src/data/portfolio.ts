import type {
  PersonalInfo,
  StatItem,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  ProjectItem,
  PhilosophyItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Mayuri Chourase',
  role: 'Computer Science Graduate & Software Developer',
  specialization: 'Python • Full Stack Development • AWS & Cloud • SQL',
  tagline: 'Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies.',
  bio: `Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies. Skilled in developing applications, integrating APIs, and implementing cloud-based solutions. Strong analytical thinker with a passion for continuous learning and delivering efficient software solutions.`,
  email: 'Mayurichourase2050@gmail.com',
  location: 'Indore, Madhya Pradesh, India',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com/in/mayuri-chourase',
  resumeUrl: '#resume'
};

export const stats: StatItem[] = [
  {
    value: '8.33',
    numericValue: 8.33,
    suffix: ' / 10',
    label: 'B.Tech CGPA',
    description: 'UIT Barkatullah University, Bhopal'
  },
  {
    value: '3+',
    numericValue: 3,
    suffix: '+',
    label: 'Core Projects',
    description: 'Voice AI, Quiz Platform & Coding Workspace'
  },
  {
    value: '10+',
    numericValue: 10,
    suffix: '+',
    label: 'Technologies',
    description: 'Python, Django, AWS, SQL, React & Tailwind'
  },
  {
    value: '4',
    numericValue: 4,
    suffix: '',
    label: 'Certifications',
    description: 'Python, AWS, Front-End & HackerRank SQL'
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'aws-simulation',
    company: 'AWS - Solutions Architecture Job Simulation',
    role: 'Cloud Architecture Simulation',
    period: '2024 — 2025',
    location: 'Remote',
    type: 'Job Simulation',
    current: true,
    description: [
      'Gained hands-on experience in designing scalable and secure cloud-based solutions for business requirements.',
      'Designed cloud infrastructure architectures involving AWS EC2, Amazon S3, and RDS for high-availability workloads.',
      'Explored cloud architecture best practices including security groups, fault tolerance, and cost optimization.'
    ],
    skills: [
      'AWS',
      'Amazon EC2',
      'Amazon S3',
      'Amazon RDS',
      'Cloud Architecture',
      'Security Best Practices'
    ]
  },
  {
    id: 'frontend-simulation',
    company: 'Front-End Software Engineering Job Simulation',
    role: 'Frontend Engineering Simulation',
    period: '2024 — 2025',
    location: 'Remote',
    type: 'Job Simulation',
    current: false,
    description: [
      'Built responsive and user-friendly web interfaces using modern frameworks and best practices.',
      'Integrated dynamic component state, responsive design layouts, and UI accessibility standards.',
      'Optimized web page performance, cross-browser compatibility, and modular component architecture.'
    ],
    skills: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'HTML5/CSS3',
      'Responsive Web Design',
      'API Integration'
    ]
  },
  {
    id: 'python-development',
    company: 'Python Software Development',
    role: 'Python Specialist',
    period: '2024',
    location: 'Indore, India',
    type: 'Certification',
    current: false,
    description: [
      'Showcased proficient skills in Python programming, data handling, object-oriented concepts, and algorithm development.',
      'Developed standalone tools and integrated third-party REST APIs and speech processing libraries.'
    ],
    skills: [
      'Python',
      'Object-Oriented Programming',
      'Data Structures',
      'API Integration',
      'Testing & Debugging'
    ]
  }
];

export const education: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science & Engineering',
  institution: 'University Institute of Technology, Barkatullah University',
  location: 'Bhopal, Madhya Pradesh, India',
  cgpa: '8.33 / 10',
  period: '2021 – 2025',
  highlights: [
    'Graduated with strong academic performance with CGPA of 8.33 / 10',
    'Core Coursework: Operating Systems, DBMS, Data Structures & Algorithms, Computer Networks, and Software Engineering',
    'Hands-on engineering projects in Python, Django, React, AWS, and SQL'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'SQL', highlight: true }
    ]
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'Django', highlight: true },
      { name: 'React.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Bootstrap', highlight: true },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false }
    ]
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'SQL (MySQL)', highlight: true },
      { name: 'Amazon RDS', highlight: true },
      { name: 'AWS S3', highlight: true }
    ]
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS (EC2, S3)', highlight: true },
      { name: 'Git & GitHub', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'Amazon Connect', highlight: false }
    ]
  },
  {
    title: 'Software Engineering',
    skills: [
      { name: 'SDLC', highlight: true },
      { name: 'Testing', highlight: true },
      { name: 'Debugging', highlight: true },
      { name: 'API Integration', highlight: true }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'echosphere',
    title: 'EchoSphere',
    subtitle: 'Virtual Voice Assistant',
    description:
      'An intelligent Python-based virtual voice assistant engineered to perform hands-free voice-controlled tasks such as system app execution, web searches, Google Speech API processing, and basic NLP interactions.',
    featured: true,
    type: 'Python & Voice AI',
    techStack: [
      'Python',
      'Speech Recognition',
      'Google Speech API',
      'Text-to-Speech (TTS)',
      'Basic NLP'
    ],
    tags: ['Python', 'Speech Recognition', 'Google Speech API', 'TTS', 'NLP'],
    features: [
      'Developed a Python-based voice assistant to perform voice-controlled tasks such as opening applications and web searching.',
      'Integrated Google Speech API for speech-to-text with a fallback manual input option.',
      'Implemented text-to-speech (TTS) and basic NLP for seamless voice interaction.',
      'Modular execution pipeline allowing rapid integration of custom device commands and search hooks.'
    ],
    architecture: [
      'Speech Recognition audio stream capture and noise filtering',
      'Google Speech API cloud transcription engine with local fallback',
      'Command router matching semantic intent for application launch and web queries',
      'Text-to-Speech synthesis feedback engine for voice response'
    ],
    githubUrl: 'https://github.com'
  },
  {
    id: 'intelliquest',
    title: 'IntelliQuest',
    subtitle: 'Interactive Quiz Application with Cloud Storage',
    description:
      'A responsive online quiz and assessment platform built using Python, Django, and Bootstrap, integrated with user authentication, Excel bulk imports, and AWS S3 cloud media storage for reliable quiz delivery.',
    featured: false,
    type: 'Full Stack Web & Cloud',
    techStack: ['Python', 'Django', 'Bootstrap', 'CKEditor', 'AWS S3'],
    tags: ['Python', 'Django', 'Bootstrap', 'AWS S3'],
    features: [
      'Built a responsive online quiz platform with user authentication, score management, and an interactive interface.',
      'Integrated Excel bulk import and AWS S3 for efficient quiz and media management.',
      'Performed end-to-end development, testing, and deployment, ensuring a reliable and user-friendly application.'
    ],
    githubUrl: 'https://github.com'
  },
  {
    id: 'code-crew',
    title: 'Code Crew',
    subtitle: 'An Online Coding Platform (Major Project)',
    description:
      'Developed a responsive, LeetCode-inspired online coding platform frontend using React.js and Tailwind CSS, featuring an interactive problem workspace and a comprehensive admin management dashboard.',
    featured: false,
    type: 'Full Stack & Web Platform',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Developed a responsive frontend for a LeetCode-inspired coding platform using React.js and Tailwind CSS.',
      'Designed and implemented an admin dashboard with CRUD functionality for efficient coding problem management.',
      'Collaborated in building an intuitive, mobile-responsive interface to enhance usability and user experience.'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com'
  }
];

export const philosophies: PhilosophyItem[] = [
  {
    title: 'Clean Architecture',
    description: 'I prefer maintainable code, clear separation of responsibilities, and modular design patterns.',
    iconName: 'Layers'
  },
  {
    title: 'Cloud & API Integration',
    description: 'I focus on scalable cloud architectures with AWS and robust RESTful API integrations.',
    iconName: 'Network'
  },
  {
    title: 'Quality & Testing',
    description: 'I value rigorous debugging, SDLC best practices, and high reliability in software execution.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Continuous Growth',
    description: 'Passionate about exploring modern technologies, Python ecosystem, AI, and cloud services.',
    iconName: 'Cpu'
  }
];
