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

    # 4 Key Stats (2x2 Grid)
    stats = [
        {'value': '8.33', 'label': 'B.Tech CGPA (BU)', 'description': 'UIT Barkatullah University, Bhopal'},
        {'value': '3+', 'label': 'Core Projects', 'description': 'Voice AI, Quiz Platform & Coding Workspace'},
        {'value': '10+', 'label': 'Technologies', 'description': 'Python, Django, AWS, SQL, React & Tailwind'},
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

    # Experiences / Simulations
    experiences = [
        {
            'id': 'aws-simulation',
            'badge': 'CLOUD ARCHITECTURE',
            'period': '2024 – 2025',
            'role': 'AWS - Solutions Architecture Job Simulation',
            'company': 'Forage / Amazon Web Services (AWS)',
            'type_badge': 'JOB SIMULATION',
            'summary': 'Gained practical experience in designing resilient, scalable and cost-effective cloud-based solutions to fulfill enterprise requirements. Explored core AWS architectural patterns, IAM security protocols, scalable database tiering, and high-availability storage configurations.',
            'highlights': [
                'Designed secure cloud infrastructure diagrams involving Amazon EC2 compute nodes, Amazon S3 bucket storage, and RDS relational instances.',
                'Applied AWS best practices for multi-tier isolation, least privilege security policies, fault tolerance, and workload disaster recovery.'
            ],
            'techs': ['AWS', 'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Cloud Architecture', 'Security Groups']
        },
        {
            'id': 'frontend-simulation',
            'badge': 'FRONTEND ENGINEERING',
            'period': '2024 – 2025',
            'role': 'Front-End Software Engineering Job Simulation',
            'company': 'Forage',
            'type_badge': 'JOB SIMULATION',
            'summary': 'Built responsive, intuitive, and user-friendly web interfaces implementing modern component workflows, dynamic state management, responsive UI utilities, and seamless API client integrations.',
            'highlights': [
                'Engineered modern responsive user interfaces with reusable React components and Tailwind CSS styling.',
                'Integrated REST API endpoints with robust error handling, cross-browser compatibility, and accessibility standards.'
            ],
            'techs': ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3', 'REST API Integration', 'Git']
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
        'github_url': 'https://github.com'
    }

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

    context = {
        'personal_info': personal_info,
        'stats': stats,
        'pillars': pillars,
        'pipeline_steps': pipeline_steps,
        'experiences': experiences,
        'flagship_project': flagship_project,
        'skill_columns': skill_columns,
        'education_info': education_info,
        'philosophies': philosophies,
    }

    return render(request, 'index.html', context)
