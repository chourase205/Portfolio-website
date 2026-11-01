# Mayuri Chourase — Developer Portfolio (Python & Django)

Personal software engineering portfolio of **Mayuri Chourase** (Computer Science Graduate & Software Developer specializing in Python, Full Stack Web Development, AWS, and SQL).

Converted to a pure **Python & Django** web application with identical cybernetic UI design, glassmorphic styling, responsive layout, animations, and interactive features.

---

## ⚡ Tech Stack

- **Backend**: Python 3, Django 5.x, SQLite / ORM Models
- **Frontend / UI**: HTML5, Django Template Engine, Tailwind CSS, Vanilla JavaScript
- **Icons & Effects**: Lucide Icons, Canvas Confetti, Custom WebGL/Canvas micro-bubbles particle animation
- **Styling**: Cybernetic Glassmorphism, JetBrains Mono & Plus Jakarta Sans typography, Dark & Light Mode theme switching

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Apply Migrations (Optional / Initial Setup)
```bash
python manage.py migrate
```

### 3. Seed Portfolio Database
Populate database with Mayuri Chourase's exact projects, education, skills, and experience:
```bash
python seed_db.py
```

### 4. Run Development Server
```bash
python manage.py runserver
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your web browser.

---

## 📂 Project Structure

```
├── manage.py              # Django management CLI
├── requirements.txt       # Python dependencies
├── seed_db.py             # Database seeder script
├── db.sqlite3             # SQLite database
├── portfolio_config/      # Django project settings & URLs
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── portfolio_app/         # Portfolio Django application
│   ├── models.py          # Data models (PersonalInfo, Projects, etc.)
│   ├── views.py           # Controller & template context
│   ├── urls.py            # Route definitions
│   └── admin.py           # Django admin integration
├── templates/             # HTML Templates
│   ├── base.html          # Base layout, meta tags, background & scripts
│   └── index.html         # Complete single-page portfolio layout
└── static/                # Static assets (CSS, JS, Fonts, Images)
    ├── css/
    │   ├── tailwind.css   # Full compiled Tailwind stylesheet
    │   └── style.css      # Custom animations, orbs & theme styles
    ├── js/
    │   └── main.js        # Cursor, confetti, theme & particle logic
    └── img/
        └── hero.png
```

---

## 🎯 Features

- **Pixel-Perfect UI Fidelity**: Retains 100% of the original cybernetic dark UI, neon accents, and responsive layout.
- **Dynamic Content from Python / Django**: All data is driven by Django models and views.
- **Interactive Cybernetic Cursor**: Custom trailing outer ring and inner dot with spring physics and interactive element detection.
- **Buoyant Particle Background**: Canvas-based micro-bubble floating physics.
- **Theme Switcher**: Seamless Dark / Light mode toggle with state persistence in `localStorage`.
- **Interactive Terminal & Diagnostics Mock**: Architecture execution flow and EchoSphere speech assistant diagnostics.
