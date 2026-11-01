from django.contrib import admin
from .models import (
    PersonalInfo,
    StatItem,
    Project,
    Education,
    Experience,
    SkillCategory,
    Skill,
    Certification
)

@admin.register(PersonalInfo)
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'email', 'location')

@admin.register(StatItem)
class StatItemAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'order')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_type', 'featured', 'order')

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'score', 'period')

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'exp_type', 'period')

class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    inlines = [SkillInline]

@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ('title', 'issuer', 'order')
