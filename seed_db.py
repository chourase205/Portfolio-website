import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_config.settings')
django.setup()

from portfolio_app.models import (
    PersonalInfo, StatItem, Project, Education, Experience, SkillCategory, Skill, Certification
)

# Clear existing objects
PersonalInfo.objects.all().delete()
StatItem.objects.all().delete()
Project.objects.all().delete()
Education.objects.all().delete()
Experience.objects.all().delete()
SkillCategory.objects.all().delete()
Certification.objects.all().delete()

# Personal Info
PersonalInfo.objects.create(
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

# Stat Items
StatItem.objects.create(value='8.33', suffix=' / 10', label='B.Tech CGPA', description='Computer Science & Engineering', order=1)
StatItem.objects.create(value='3', suffix='+', label='Academic Projects', description='Python voice AI, Cloud & Web platforms', order=2)
StatItem.objects.create(value='10+', suffix='+', label='Tech & Tools', description='Python, Django, AWS, SQL & Cloud Services', order=3)
StatItem.objects.create(value='4', suffix='', label='Certifications & Awards', description='Python, AWS, Frontend & HackerRank SQL', order=4)

# Projects (According to Resume)
Project.objects.create(
    title='EchoSphere',
    subtitle='Virtual Voice Assistant',
    description='An intelligent Python-based virtual voice assistant engineered to perform hands-free voice-controlled tasks such as system app execution, web searches, Google Speech API processing, and basic NLP interactions.',
    featured=True,
    project_type='Python & Voice AI',
    tech_stack='Python, Speech Recognition, Google Speech API, Text-to-Speech (TTS), Basic NLP',
    tags='Python, Speech Recognition, Google Speech API, TTS, NLP',
    features="""Developed a Python-based voice assistant to perform voice-controlled tasks such as opening applications and web searching.
Integrated Google Speech API for speech-to-text with a fallback manual input option.
Implemented text-to-speech (TTS) and basic NLP for seamless voice interaction.""",
    github_url='https://github.com/chourase205',
    order=1
)

Project.objects.create(
    title='IntelliQuest',
    subtitle='Interactive Quiz Application with Cloud Storage',
    description='A responsive online quiz and assessment platform built using Python, Django, and Bootstrap, integrated with user authentication, Excel bulk imports, and AWS S3 cloud media storage for reliable quiz delivery.',
    featured=True,
    project_type='Full Stack Web & Cloud',
    tech_stack='Python, Django, Bootstrap, CKEditor, AWS S3',
    tags='Python, Django, Bootstrap, CKEditor, AWS S3',
    features="""Built a responsive online quiz platform with user authentication, score management, and an interactive interface.
Integrated Excel import and AWS S3 for efficient quiz and media management.
Performed end-to-end development, testing, and deployment, ensuring a reliable and user-friendly application.""",
    github_url='https://github.com/chourase205/IntelliQuests',
    order=2
)

Project.objects.create(
    title='Code Crew',
    subtitle='An Online Coding Platform (Major Project)',
    description='Developed a responsive, LeetCode-inspired online coding platform frontend using React.js and Tailwind CSS, featuring an interactive problem workspace and a comprehensive admin management dashboard.',
    featured=True,
    project_type='Full Stack & Web Platform',
    tech_stack='React.js, TailwindCSS, Node.js, MongoDB',
    tags='React.js, TailwindCSS, Node.js, MongoDB',
    features="""Developed a responsive frontend for a LeetCode-inspired coding platform using React.js and Tailwind CSS.
Designed and implemented an admin dashboard with CRUD functionality for efficient coding problem management.
Collaborated in building an intuitive, mobile-responsive interface to enhance usability and user experience.""",
    github_url='https://github.com/chourase205',
    demo_url='https://demo.example.com',
    order=3
)

Project.objects.create(
    title='Animated Registration Form',
    subtitle='Interactive Webpage with Visme Integration',
    description='Developed an interactive and animated registration webpage using HTML5, focusing on a clean layout, responsive design, and an engaging user experience with embedded Visme form functionality.',
    featured=False,
    project_type='Frontend & UI/UX',
    tech_stack='HTML5, Visme Forms, Responsive Web Design, JavaScript Integration, CSS3',
    tags='HTML5, Visme Forms, Responsive Design, JavaScript, CSS3 Animations',
    features="""Developed an interactive and animated registration webpage using HTML5, focusing on a clean layout, responsive design, and engaging user experience.
Integrated a third-party Visme registration form using embedded scripts to enable full form functionality with viewport optimization.
Structured the webpage using standard HTML elements and configured the embedded form to occupy the full page for improved accessibility.""",
    github_url='https://github.com/chourase205',
    order=4
)

# Education
Education.objects.create(
    degree='Bachelor of Technology (B.Tech)',
    field='Computer Science and Engineering',
    institution='University Institute of Technology, Barkatullah University',
    location='Bhopal, Madhya Pradesh, India',
    score='CGPA: 8.33 / 10',
    period='2021 – 2025',
    highlights="""Graduated with strong academic performance with CGPA of 8.33/10
Core coursework: Data Structures, Operating Systems, DBMS, Computer Networks & Software Engineering
Hands-on capstone engineering in Python, Django, React, and Cloud technologies""",
    order=1
)

Education.objects.create(
    degree='Senior Secondary (12th)',
    field='Science Stream (CBSE)',
    institution='Kendriya Vidyalaya Barkuhi',
    location='Chhindwara, Madhya Pradesh, India',
    score='Score: 66.4%',
    period='2019 – 2020',
    highlights='Completed 12th Board examinations with focus on Mathematics, Physics, and Chemistry',
    order=2
)

Education.objects.create(
    degree='High School (10th)',
    field='General Education (CBSE)',
    institution='Kanhan Valley School Dungariya',
    location='Chhindwara, Madhya Pradesh, India',
    score='Score: 68.2%',
    period='2018 – 2019',
    highlights='Completed 10th Board examinations with strong foundational academic record',
    order=3
)

# Experience / Cloud & Web Projects
Experience.objects.create(
    company='Python & Cloud Development • UIT Barkatullah University, Bhopal',
    role='IntelliQuest — Interactive Quiz Platform with AWS S3',
    period='2024 — 2025',
    location='Bhopal, MP, India',
    exp_type='Web & Cloud Application',
    description="""Built a responsive online quiz platform with user authentication, score management, and an interactive interface.
Integrated Excel import and AWS S3 for efficient quiz and media management.
Performed end-to-end development, testing, and deployment, ensuring a reliable and user-friendly application.""",
    skills='Python, Django, Bootstrap, AWS S3, CKEditor, Excel Bulk Import, SQL, Git',
    order=1
)

# Skill Categories & Skills (from resume)
cat1 = SkillCategory.objects.create(title='Programming Languages', order=1)
Skill.objects.create(category=cat1, name='Python', highlight=True, order=1)

cat2 = SkillCategory.objects.create(title='Web & Frameworks', order=2)
Skill.objects.create(category=cat2, name='Django', highlight=True, order=1)
Skill.objects.create(category=cat2, name='HTML', highlight=False, order=2)
Skill.objects.create(category=cat2, name='CSS', highlight=False, order=3)
Skill.objects.create(category=cat2, name='JavaScript', highlight=True, order=4)
Skill.objects.create(category=cat2, name='Bootstrap', highlight=True, order=5)
Skill.objects.create(category=cat2, name='Tailwind CSS', highlight=True, order=6)

cat3 = SkillCategory.objects.create(title='Databases', order=3)
Skill.objects.create(category=cat3, name='SQL (MySQL)', highlight=True, order=1)
Skill.objects.create(category=cat3, name='Amazon RDS', highlight=True, order=2)

cat4 = SkillCategory.objects.create(title='Tools & Technologies', order=4)
Skill.objects.create(category=cat4, name='Git', highlight=True, order=1)
Skill.objects.create(category=cat4, name='AWS (EC2, S3)', highlight=True, order=2)
Skill.objects.create(category=cat4, name='Amazon Connect', highlight=False, order=3)
Skill.objects.create(category=cat4, name='REST APIs', highlight=True, order=4)

cat5 = SkillCategory.objects.create(title='Software Skills', order=5)
Skill.objects.create(category=cat5, name='SDLC', highlight=True, order=1)
Skill.objects.create(category=cat5, name='Testing', highlight=True, order=2)
Skill.objects.create(category=cat5, name='Debugging', highlight=True, order=3)
Skill.objects.create(category=cat5, name='API Integration', highlight=True, order=4)

# Certifications & Achievements (from resume)
Certification.objects.create(
    title='Python Certification',
    issuer='Professional Certification',
    description='Showcasing skills in coding, data handling, and algorithm development.',
    order=1
)
Certification.objects.create(
    title='AWS - Solutions Architecture Job Simulation',
    issuer='Forage / AWS',
    description='Gained hands-on experience in designing scalable and secure cloud-based solutions for business needs.',
    order=2
)
Certification.objects.create(
    title='Front-End Software Engineering Job Simulation',
    issuer='Forage',
    description='Built responsive and user-friendly web interfaces using modern frameworks and best practices.',
    order=3
)
Certification.objects.create(
    title='HackerRank SQL (Intermediate) Certified',
    issuer='HackerRank (Key Achievement)',
    description='Key Achievement: Earned intermediate certification by solving complex SQL and relational database challenges.',
    order=4
)

print("Database seeded successfully with Mayuri Chourase's exact resume data!")
