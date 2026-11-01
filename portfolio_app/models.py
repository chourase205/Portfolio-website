from django.db import models

class PersonalInfo(models.Model):
    name = models.CharField(max_length=100, default='Mayuri Chourase')
    role = models.CharField(max_length=150, default='Computer Science Graduate & Software Developer')
    specialization = models.CharField(max_length=255, default='Python • Full Stack Development • AWS & Cloud • SQL')
    tagline = models.TextField(default='Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies.')
    bio = models.TextField(default='Results-oriented Computer Science graduate with hands-on experience in Python, SQL, AWS, and cloud technologies. Skilled in developing applications, integrating APIs, and implementing cloud-based solutions.')
    email = models.EmailField(default='Mayurichourase2050@gmail.com')
    phone = models.CharField(max_length=30, default='+91 7649864826')
    location = models.CharField(max_length=150, default='Indore, Madhya Pradesh, India')
    github_url = models.URLField(default='https://github.com')
    linkedin_url = models.URLField(default='https://linkedin.com/in/mayuri-chourase')
    resume_url = models.CharField(max_length=255, default='#resume')

    def __str__(self):
        return self.name

class StatItem(models.Model):
    value = models.CharField(max_length=30)
    numeric_value = models.FloatField(default=0)
    suffix = models.CharField(max_length=30, blank=True)
    label = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.label}: {self.value}"

class Project(models.Model):
    title = models.CharField(max_length=150)
    subtitle = models.CharField(max_length=200)
    description = models.TextField()
    featured = models.BooleanField(default=True)
    project_type = models.CharField(max_length=100)
    tech_stack = models.TextField(help_text="Comma-separated tech items")
    tags = models.TextField(help_text="Comma-separated tags")
    features = models.TextField(help_text="Line-separated list of bullet points")
    github_url = models.URLField(blank=True, default='https://github.com')
    demo_url = models.URLField(blank=True, default='')
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

    def get_tech_list(self):
        return [t.strip() for t in self.tech_stack.split(',') if t.strip()]

    def get_tag_list(self):
        return [t.strip() for t in self.tags.split(',') if t.strip()]

    def get_feature_list(self):
        return [f.strip() for f in self.features.split('\n') if f.strip()]

class Education(models.Model):
    degree = models.CharField(max_length=150)
    field = models.CharField(max_length=150)
    institution = models.CharField(max_length=200)
    location = models.CharField(max_length=150)
    score = models.CharField(max_length=50, help_text="e.g. CGPA: 8.33 / 10 or Score: 66.4%")
    period = models.CharField(max_length=50)
    highlights = models.TextField(blank=True, help_text="Line-separated list of highlights")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.degree} - {self.institution}"

    def get_highlight_list(self):
        return [h.strip() for h in self.highlights.split('\n') if h.strip()]

class Experience(models.Model):
    company = models.CharField(max_length=200)
    role = models.CharField(max_length=150)
    period = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    exp_type = models.CharField(max_length=50, default='Job Simulation')
    description = models.TextField(help_text="Line-separated bullet points")
    skills = models.TextField(help_text="Comma-separated skills")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.role} @ {self.company}"

    def get_description_list(self):
        return [d.strip() for d in self.description.split('\n') if d.strip()]

    def get_skill_list(self):
        return [s.strip() for s in self.skills.split(',') if s.strip()]

class SkillCategory(models.Model):
    title = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    highlight = models.BooleanField(default=False)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name

class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=150)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
