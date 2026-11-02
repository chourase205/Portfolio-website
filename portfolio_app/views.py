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
    # Personal Info
    personal_info = PersonalInfo.objects.first()
    if not personal_info:
        personal_info = PersonalInfo(
            name='Mayuri Chourase',
            role='Computer Science Graduate & Software Developer',
            specialization='Python • AWS & Cloud • SQL',
            tagline='Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies.',
            bio='Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies. Skilled in developing applications, integrating APIs, and implementing cloud-based solutions. Strong analytical thinker with a passion for continuous learning and delivering efficient software solutions.',
            email='Mayurichourase2050@gmail.com',
            phone='+91 7649864826',
            location='Indore, Madhya Pradesh, India',
            github_url='https://github.com/chourase205',
            linkedin_url='https://linkedin.com/in/mayuri-chourase',
            resume_url='/static/docs/Mayuri_Chourase_Resume.pdf'
        )

    # 4 Key Stats (2x2 Grid)
    stats = [
        {'value': '8.33', 'label': 'B.Tech CGPA (BU)', 'description': 'UIT Barkatullah University, Bhopal'},
        {'value': '3+', 'label': 'Core Projects', 'description': 'Voice AI, Quiz Platform & Coding Workspace'},
        {'value': '10+', 'label': 'Technologies', 'description': 'Python, Django, AWS, SQL & Cloud Services'},
        {'value': '4', 'label': 'Certifications', 'description': 'Python, AWS, Front-End & HackerRank SQL'},
    ]

    # About Section Pillars
    pillars = [
        {
            'icon': 'terminal',
            'title': 'Python & Voice AI',
            'desc': 'Speech recognition pipelines with Google Speech API and basic NLP interactions.'
        },
        {
            'icon': 'database',
            'title': 'Django & Cloud Apps',
            'desc': 'Full-stack applications with AWS S3 media storage and secure authentication.'
        },
        {
            'icon': 'cpu',
            'title': 'SQL & Cloud Architecture',
            'desc': 'AWS Solutions Architecture simulations, MySQL schema design, and cloud scalability.'
        }
    ]

    # Architecture Pipeline Steps
    pipeline_steps = [
        {
            'step': 1,
            'name': 'Voice / REST Ingress',
            'detail': 'Google Speech API audio stream capture & HTTP validation'
        },
        {
            'step': 2,
            'name': 'Python & Django Core',
            'detail': 'Request routing, controller logic, and session authentication'
        },
        {
            'step': 3,
            'name': 'AWS S3 Cloud Media',
            'detail': 'Cloud object storage for static assets, files & quiz materials'
        },
        {
            'step': 4,
            'name': 'SQL Relational Queries',
            'detail': 'Normalized schema operations, indexing, and ACID persistence'
        },
        {
            'step': 5,
            'name': 'UI & Speech Synthesis',
            'detail': 'Dynamic frontend response rendering & text-to-speech audio feedback'
        }
    ]

    # Engineering Experience / Web & Cloud Project
    experiences = [
        {
            'id': 'intelliquest-project',
            'badge': 'FULL STACK & CLOUD',
            'period': '2024 – 2025',
            'role': 'IntelliQuest — Interactive Quiz Platform with AWS S3',
            'company': 'Python & Cloud Development • UIT Barkatullah University, Bhopal',
            'type_badge': 'PYTHON & DJANGO',
            'summary': 'Architected and built a responsive online quiz and assessment platform utilizing Python, Django, and Bootstrap. Integrated secure user authentication, bulk question uploads via Excel import, score tracking dashboards, and Amazon Web Services (AWS S3) for high-availability media and asset storage.',
            'highlights': [
                'Built a responsive online quiz platform with user authentication, score management, and an interactive interface.',
                'Integrated Excel import functionality and AWS S3 for efficient quiz and media asset management.',
                'Performed end-to-end development, testing, and deployment, ensuring a reliable and user-friendly application.',
                'Engineered rich question formatting with CKEditor and normalized relational database schemas for score analytics.'
            ],
            'techs': ['Python', 'Django', 'Bootstrap', 'AWS S3', 'CKEditor', 'Excel Bulk Import', 'SQL', 'Git'],
            'github_url': 'https://github.com/chourase205/IntelliQuests'
        }
    ]

    # Flagship Project
    flagship_project = {
        'id': 'echosphere',
        'title': 'EchoSphere — Virtual Voice Assistant',
        'badge': 'FLAGSHIP PROJECT',
        'domain': 'Voice AI & Python',
        'description': 'An intelligent Python-based virtual voice assistant engineered to perform hands-free voice-controlled tasks such as system app execution, web searches, Google Speech API processing, and basic NLP interactions.',
        'features': [
            {
                'icon': 'check-circle-2',
                'color': 'cyan',
                'title': 'Voice Command Execution',
                'desc': 'Hands-free voice recognition for launching apps & searches.'
            },
            {
                'icon': 'layers',
                'color': 'indigo',
                'title': 'Google Speech API',
                'desc': 'High accuracy speech-to-text with fallback manual typing.'
            },
            {
                'icon': 'activity',
                'color': 'emerald',
                'title': 'Text-to-Speech (TTS)',
                'desc': 'Fluid verbal conversational feedback and task confirmations.'
            },
            {
                'icon': 'zap',
                'color': 'amber',
                'title': 'Basic NLP Understanding',
                'desc': 'Semantic command parsing and responsive automation.'
            }
        ],
        'tech_stack': ['Python', 'Speech Recognition', 'Google Speech API', 'TTS Engine', 'NLP', 'OS Automation'],
        'github_url': 'https://github.com/chourase205/EchoSphere'
    }

    # Featured Projects Grid (under Production Software)
    featured_projects = [
        {
            'id': 'code-crew-project',
            'title': 'Code Crew — Online Coding Platform',
            'badge': 'MAJOR PROJECT',
            'icon': 'terminal',
            'issuer': 'Major Academic Project • UIT Barkatullah University',
            'period': '2024 — 2025',
            'description': 'Developed a responsive frontend for a LeetCode-inspired coding platform using React.js and Tailwind CSS. Designed and implemented an admin dashboard with CRUD functionality for efficient coding problem management. Collaborated in building an intuitive, mobile-responsive interface to enhance usability and developer user experience.',
            'skills': ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'CRUD Dashboard', 'REST APIs', 'Git', 'Responsive UI'],
            'github_url': 'https://github.com/chourase205'
        },
        {
            'id': 'animated-registration-form',
            'title': 'Animated Registration Form',
            'badge': 'FRONTEND & UI/UX',
            'icon': 'layout',
            'issuer': 'Interactive Web Application • Frontend Development',
            'period': '2024',
            'description': 'Developed an interactive and animated registration webpage using HTML5, focusing on a clean layout, responsive design, and an engaging user experience. Integrated third-party Visme registration form scripts with viewport optimization for various screen sizes, configuring full-page responsiveness and enhanced accessibility.',
            'skills': ['HTML5', 'Visme Forms', 'Responsive Web Design', 'JavaScript Integration', 'CSS3 Animations', 'UI/UX Design'],
            'github_url': 'https://github.com/chourase205/Animated-Registration-Form'
        }
    ]

    # Skills Matrix (5 columns matching React)
    skill_columns = [
        {
            'category': 'LANGUAGES',
            'icon': 'terminal',
            'skills': ['Python', 'JavaScript (ES6+)', 'SQL (MySQL)', 'HTML5', 'CSS3']
        },
        {
            'category': 'FRAMEWORKS',
            'icon': 'layout',
            'skills': ['Django', 'React.js', 'Tailwind CSS', 'Bootstrap', 'REST APIs']
        },
        {
            'category': 'DATA & STORAGE',
            'icon': 'database',
            'skills': ['SQL (MySQL)', 'Amazon RDS', 'AWS S3', 'Relational Schema', 'Query Optimization']
        },
        {
            'category': 'CLOUD & TOOLS',
            'icon': 'server',
            'skills': ['AWS (EC2, S3)', 'Amazon Connect', 'Git & GitHub', 'VS Code', 'Speech Recognition']
        },
        {
            'category': 'ENGINEERING',
            'icon': 'shield-check',
            'skills': ['SDLC Best Practices', 'Software Testing', 'Debugging', 'API Integration', 'Data Structures']
        }
    ]

    # Education Information
    education_info = {
        'degree': 'Bachelor of Technology',
        'field': 'Computer Science & Engineering',
        'institution': 'UIT Barkatullah University, Bhopal',
        'period': '2021 – 2025',
        'score': '8.33 / 10.0 CGPA',
        'coursework': 'Operating Systems, Database Management Systems, Data Structures & Algorithms, Computer Networks, and Software Engineering.',
        'schooling': [
            {'label': '12th (CBSE) KV Barkuhi:', 'score': '66.4%'},
            {'label': '10th (CBSE) Kanhan Valley:', 'score': '68.2%'}
        ],
        'location': 'Bhopal, Madhya Pradesh • Full-Time Regular'
    }

    # Engineering Philosophies (2x2 grid)
    philosophies = [
        {
            'icon': 'layers',
            'title': 'Clean Architecture',
            'desc': 'Maintainable, modular codebases with strict separation of concerns, single-responsibility services, and low technical debt.'
        },
        {
            'icon': 'code',
            'title': 'API-First Design',
            'desc': 'Predictable, contract-tested endpoints, structured JSON responses, and clean versioning to prevent breaking consumer integrations.'
        },
        {
            'icon': 'database',
            'title': 'High-Throughput Performance',
            'desc': 'ACID compliance, normalized models where needed, efficient caching layers, and background workers to keep user latencies minimal.'
        },
        {
            'icon': 'sparkles',
            'title': 'Continuous Evolution',
            'desc': 'Technology is an ongoing journey of refinement. Embracing new paradigms, deep testing, and optimizing code quality.'
        }
    ]

    # Certifications & Credentials
    certifications = [
        {
            'id': 'python-cert',
            'title': 'Python Software Development Certification',
            'issuer': 'Professional Certification',
            'period': '2024',
            'badge': 'VERIFIED CREDENTIAL',
            'icon': 'terminal',
            'accent': 'cyan',
            'description': 'Demonstrated advanced proficiency in Python programming, data handling, object-oriented architecture, and REST API integration.',
            'skills': ['Python', 'OOP', 'Data Handling', 'API Integration', 'Testing & Debugging'],
            'credential_url': 'https://github.com/chourase205'
        },
        {
            'id': 'aws-simulation-cert',
            'title': 'AWS Solutions Architecture Job Simulation',
            'issuer': 'Amazon Web Services (Forage)',
            'period': '2024 — 2025',
            'badge': 'CLOUD CREDENTIAL',
            'icon': 'cloud',
            'accent': 'amber',
            'description': 'Designed resilient, fault-tolerant cloud architectures using AWS EC2, Amazon S3, and RDS for high-availability production workloads.',
            'skills': ['AWS Cloud', 'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Cloud Security'],
            'credential_url': 'https://github.com/chourase205'
        },
        {
            'id': 'frontend-simulation-cert',
            'title': 'Front-End Software Engineering Simulation',
            'issuer': 'Forage',
            'period': '2024',
            'badge': 'ENGINEERING SIMULATION',
            'icon': 'layout',
            'accent': 'sky',
            'description': 'Constructed performant, responsive web applications following modern component-driven engineering principles and UI/UX design patterns.',
            'skills': ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'UI/UX Design', 'Responsive Web'],
            'credential_url': 'https://github.com/chourase205'
        },
        {
            'id': 'hackerrank-sql-cert',
            'title': 'HackerRank SQL (Intermediate) Certified',
            'issuer': 'HackerRank • Certified Achievement',
            'period': '2024',
            'badge': 'KEY ACHIEVEMENT',
            'icon': 'database',
            'accent': 'emerald',
            'description': 'Verified Achievement: Earned intermediate-level certification by solving complex SQL and database challenges, table joins, aggregations, and subqueries.',
            'skills': ['SQL', 'MySQL', 'Relational Schema', 'Query Optimization', 'Subqueries & Joins'],
            'credential_url': 'https://github.com/chourase205'
        }
    ]

    context = {
        'personal_info': personal_info,
        'stats': stats,
        'pillars': pillars,
        'pipeline_steps': pipeline_steps,
        'experiences': experiences,
        'flagship_project': flagship_project,
        'featured_projects': featured_projects,
        'skill_columns': skill_columns,
        'education_info': education_info,
        'philosophies': philosophies,
        'certifications': certifications,
    }

    return render(request, 'index.html', context)
