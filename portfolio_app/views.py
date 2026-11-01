from django.shortcuts import render
from .models import (
    PersonalInfo,
    StatItem,
    Project,
    Education,
    Experience,
    SkillCategory,
    Certification
)

def portfolio_index(request):
    personal_info = PersonalInfo.objects.first()
    if not personal_info:
        personal_info = PersonalInfo(
            name='Mayuri Chourase',
            role='Computer Science Graduate & Software Developer',
            specialization='Python • Full Stack Development • AWS & Cloud • SQL',
            tagline='Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies.',
            bio='Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies. Skilled in developing applications, integrating APIs, and implementing cloud-based solutions. Strong analytical thinker with a passion for continuous learning and delivering efficient software solutions.',
            email='Mayurichourase2050@gmail.com',
            phone='+91 7649864826',
            location='Indore, Madhya Pradesh, India',
            github_url='https://github.com',
            linkedin_url='https://linkedin.com/in/mayuri-chourase',
            resume_url='#resume'
        )

    stats = list(StatItem.objects.all())
    if not stats:
        stats = [
            {'value': '8.33', 'suffix': ' / 10', 'label': 'B.Tech CGPA', 'description': 'Computer Science & Engineering'},
            {'value': '3', 'suffix': '+', 'label': 'Major Projects', 'description': 'Web apps, Python voice AI & Cloud solutions'},
            {'value': '10+', 'suffix': '+', 'label': 'Tech & Tools', 'description': 'Python, React, Django, AWS, SQL, Tailwind'},
            {'value': '4', 'suffix': '', 'label': 'Certifications', 'description': 'Python, AWS, Frontend & HackerRank SQL'},
        ]

    projects = list(Project.objects.all())
    if not projects:
        projects = [
            {
                'title': 'Code Crew',
                'subtitle': 'An Online Coding Platform (Major Project)',
                'description': 'Developed a responsive, LeetCode-inspired online coding platform frontend using React.js and Tailwind CSS, featuring an interactive problem workspace and a comprehensive admin management dashboard.',
                'project_type': 'Full Stack & Web Platform',
                'get_tech_list': lambda: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'REST APIs', 'Express.js'],
                'get_tag_list': lambda: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'Admin Dashboard'],
                'get_feature_list': lambda: [
                    'Developed a responsive frontend for a LeetCode-inspired coding platform using React.js and Tailwind CSS',
                    'Designed and implemented an admin dashboard with CRUD functionality for efficient coding problem management',
                    'Collaborated in building an intuitive, mobile-responsive interface to enhance usability and user experience',
                    'Integrated clean REST API communication for dynamic coding problem loading and state handling'
                ],
                'github_url': 'https://github.com',
                'demo_url': 'https://demo.example.com'
            },
            {
                'title': 'EchoSphere',
                'subtitle': 'Virtual Voice Assistant',
                'description': 'A intelligent Python-based virtual voice assistant engineered to perform hands-free voice-controlled tasks such as system app execution, web searches, Google Speech API processing, and basic NLP interactions.',
                'project_type': 'Python & Voice AI',
                'get_tech_list': lambda: ['Python', 'Google Speech API', 'Speech Recognition', 'Text-to-Speech (TTS)', 'Basic NLP'],
                'get_tag_list': lambda: ['Python', 'Speech Recognition', 'Google Speech API', 'TTS', 'NLP'],
                'get_feature_list': lambda: [
                    'Developed a Python-based voice assistant to perform voice-controlled tasks such as opening applications and web searching',
                    'Integrated Google Speech API for speech-to-text with a fallback manual input option for noisy environments',
                    'Implemented text-to-speech (TTS) and basic NLP for seamless, conversational voice interaction'
                ],
                'github_url': 'https://github.com'
            },
            {
                'title': 'IntelliQuest',
                'subtitle': 'Interactive Quiz Application with Cloud Storage',
                'description': 'A feature-rich online quiz and assessment platform built using Python, Django, and Bootstrap, integrated with Excel bulk imports and AWS S3 cloud media storage for reliable quiz delivery.',
                'project_type': 'Full Stack Web & Cloud',
                'get_tech_list': lambda: ['Python', 'Django', 'Bootstrap', 'CKEditor', 'AWS S3', 'MySQL'],
                'get_tag_list': lambda: ['Python', 'Django', 'Bootstrap', 'AWS S3', 'MySQL', 'CKEditor'],
                'get_feature_list': lambda: [
                    'Built a responsive online quiz platform with user authentication, score management, and an interactive interface',
                    'Integrated Excel import and AWS S3 for efficient quiz generation and cloud media storage management',
                    'Performed end-to-end development, testing, and deployment, ensuring a reliable and user-friendly application'
                ],
                'github_url': 'https://github.com'
            }
        ]

    education_list = list(Education.objects.all())
    if not education_list:
        education_list = [
            {
                'degree': 'Bachelor of Technology (B.Tech)',
                'field': 'Computer Science and Engineering',
                'institution': 'University Institute of Technology, Barkatullah University',
                'location': 'Bhopal, Madhya Pradesh, India',
                'score': 'CGPA: 8.33 / 10',
                'period': '2021 – 2025',
                'get_highlight_list': lambda: [
                    'Strong academic performance with CGPA of 8.33/10',
                    'Core coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks & Software Engineering',
                    'Completed major capstone projects in React, Node.js, Python, Django, and Cloud technologies'
                ]
            },
            {
                'degree': 'Senior Secondary (12th)',
                'field': 'Science Stream (CBSE)',
                'institution': 'Kendriya Vidyalaya Barkuhi',
                'location': 'Chhindwara, Madhya Pradesh, India',
                'score': 'Score: 66.4%',
                'period': '2019 – 2020',
                'get_highlight_list': lambda: [
                    'Completed 12th Board examinations with focus on Mathematics, Physics, and Chemistry'
                ]
            },
            {
                'degree': 'High School (10th)',
                'field': 'General Education (CBSE)',
                'institution': 'Kanhan Valley School Dungariya',
                'location': 'Chhindwara, Madhya Pradesh, India',
                'score': 'Score: 68.2%',
                'period': '2018 – 2019',
                'get_highlight_list': lambda: [
                    'Completed 10th Board examinations with strong foundational academic record'
                ]
            }
        ]

    experiences = list(Experience.objects.all())
    if not experiences:
        experiences = [
            {
                'company': 'AWS - Solutions Architecture Job Simulation',
                'role': 'Cloud Architecture Simulation',
                'period': '2024 — 2025',
                'location': 'Remote',
                'exp_type': 'Job Simulation',
                'get_description_list': lambda: [
                    'Gained hands-on experience in designing scalable and secure cloud-based solutions for business needs.',
                    'Designed cloud infrastructure diagrams involving AWS EC2, S3, and RDS for high-availability workloads.',
                    'Explored cloud architecture best practices including security, fault tolerance, and cost optimization.'
                ],
                'get_skill_list': lambda: ['AWS', 'EC2', 'S3', 'Amazon RDS', 'Cloud Architecture', 'Security Best Practices']
            },
            {
                'company': 'Front-End Software Engineering Job Simulation',
                'role': 'Frontend Engineering Simulation',
                'period': '2024 — 2025',
                'location': 'Remote',
                'exp_type': 'Job Simulation',
                'get_description_list': lambda: [
                    'Built responsive and user-friendly web interfaces using modern frontend frameworks and best practices.',
                    'Integrated dynamic component state, responsive design layouts, and UI accessibility standards.',
                    'Optimized web page performance, cross-browser compatibility, and modular component architecture.'
                ],
                'get_skill_list': lambda: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3', 'Responsive Web Design', 'API Integration']
            },
            {
                'company': 'Python Software Development',
                'role': 'Python Specialist',
                'period': '2024',
                'location': 'Indore, India',
                'exp_type': 'Certification',
                'get_description_list': lambda: [
                    'Showcased proficient skills in Python programming, data handling, object-oriented concepts, and algorithm development.',
                    'Developed standalone tools and integrated third-party REST APIs and speech processing libraries.'
                ],
                'get_skill_list': lambda: ['Python', 'Object-Oriented Programming', 'Data Structures', 'API Integration', 'Testing & Debugging']
            }
        ]

    skill_categories = list(SkillCategory.objects.prefetch_related('skills').all())
    if not skill_categories:
        skill_categories = [
            {
                'title': 'Programming Languages',
                'skills': [
                    {'name': 'Python', 'highlight': True},
                    {'name': 'JavaScript', 'highlight': True},
                    {'name': 'SQL', 'highlight': True},
                    {'name': 'HTML5', 'highlight': False},
                    {'name': 'CSS3', 'highlight': False},
                ]
            },
            {
                'title': 'Web & Frameworks',
                'skills': [
                    {'name': 'Django', 'highlight': True},
                    {'name': 'React.js', 'highlight': True},
                    {'name': 'Node.js', 'highlight': True},
                    {'name': 'Tailwind CSS', 'highlight': True},
                    {'name': 'Bootstrap', 'highlight': True},
                ]
            },
            {
                'title': 'Databases & Cloud',
                'skills': [
                    {'name': 'SQL (MySQL)', 'highlight': True},
                    {'name': 'Amazon RDS', 'highlight': True},
                    {'name': 'AWS (EC2, S3)', 'highlight': True},
                    {'name': 'Amazon Connect', 'highlight': False},
                    {'name': 'MongoDB', 'highlight': False},
                ]
            },
            {
                'title': 'Tools & Technologies',
                'skills': [
                    {'name': 'Git', 'highlight': True},
                    {'name': 'REST APIs', 'highlight': True},
                    {'name': 'Speech Recognition API', 'highlight': True},
                    {'name': 'CKEditor', 'highlight': False},
                    {'name': 'Postman', 'highlight': False},
                ]
            },
            {
                'title': 'Software Skills',
                'skills': [
                    {'name': 'SDLC', 'highlight': True},
                    {'name': 'Testing & Debugging', 'highlight': True},
                    {'name': 'API Integration', 'highlight': True},
                    {'name': 'Problem Solving', 'highlight': False},
                ]
            }
        ]

    certifications = list(Certification.objects.all())
    if not certifications:
        certifications = [
            {
                'title': 'Python Certification',
                'issuer': 'Professional Certification',
                'description': 'Showcasing skills in coding, data handling, object-oriented design, and algorithm development.'
            },
            {
                'title': 'AWS - Solutions Architecture Job Simulation',
                'issuer': 'Forage / AWS',
                'description': 'Gained hands-on experience in designing scalable and secure cloud-based solutions for business needs.'
            },
            {
                'title': 'Front-End Software Engineering Job Simulation',
                'issuer': 'Forage',
                'description': 'Built responsive and user-friendly web interfaces using modern frameworks and best practices.'
            },
            {
                'title': 'HackerRank SQL (Intermediate) Certified',
                'issuer': 'HackerRank',
                'description': 'Earned intermediate certification by solving complex SQL queries, database joins, and subqueries.'
            }
        ]

    context = {
        'personal_info': personal_info,
        'stats': stats,
        'projects': projects,
        'education_list': education_list,
        'experiences': experiences,
        'skill_categories': skill_categories,
        'certifications': certifications,
    }

    return render(request, 'index.html', context)
