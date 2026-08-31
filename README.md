# Data Insight Hub

You are a senior frontend engineer and UI/UX designer building a modern, professional portfolio website for an IT student specializing in Data Science and Data Analytics.

This is a FRONTEND-ONLY project.
NO backend.
NO database.
NO authentication.
All content must be static and handled using local data files and reusable React components.

The website must be clean, minimal, responsive, recruiter-ready, and suitable for Junior Data Analyst / Data Scientist / Software Engineer / Research-oriented roles.

====================================================
PERSONAL PROFILE (USE EXACT DATA BELOW)
====================================================

Name: Abdullah Al Hadi
Title: Final-Year Computer Science Student | Data Science Major
Location: Kedah, Malaysia
Expected Graduation: March 2026
Languages: English, Hindi, Bahasa Melayu (Basic)

Professional Summary:
Final-year Computer Science student majoring in Data Science with hands-on experience in data analysis, reporting, and dashboard development. Skilled in Python, SQL, Excel, Tableau, and Power BI, with strong foundations in data validation, visualization, and machine learning. Seeking opportunities as a Junior Data Analyst, Software Engineer, or Research Assistant to transform data into actionable insights and contribute to applied research.

====================================================
TECH STACK (MANDATORY)
====================================================

Framework: React (or Next.js if supported)
Styling: Tailwind CSS
Animations: Framer Motion (subtle and professional)
Icons: Lucide or Heroicons
Responsive Design: Mobile-first
SEO friendly

====================================================
SITE STRUCTURE
====================================================

Sticky navigation bar with smooth scrolling.
Mobile hamburger menu.
Footer with social links.

Sections:
Home
About
Skills
Projects
Research Publications
Experience
Education
Certifications
Contact

====================================================
HOME (HERO SECTION)
====================================================

Display:
- Name: Abdullah Al Hadi
- Role: IT Student | Data Science & Analytics
- Tagline:
  "Turning data into insights through analytics, visualization, and machine learning."
- Buttons:
  - View Projects
  - Download Resume

Use subtle entrance animations.

====================================================
ABOUT SECTION
====================================================

Include:
- Short professional bio from the summary
- Profile image placeholder
- Highlights:
  - Data analytics & visualization
  - Machine learning & NLP foundations
  - Research and industry exposure
  - Leadership experience (President of AIU Cricket Club)

Two-column layout (image + text).
Stack vertically on mobile.

====================================================
SKILLS SECTION
====================================================

Display skills grouped clearly.

Programming Languages:
Python, SQL, R, HTML, CSS, PHP

Frameworks & Libraries:
TensorFlow, Keras, Scikit-learn, React, Node.js, Flask, FastAPI

Databases:
MySQL, PostgreSQL, MongoDB, Firebase

Tools & Platforms:
Tableau, Power BI, Excel, GitHub, Docker, AWS, Azure, Jupyter Notebook, VS Code

Use badges or cards in a clean grid layout.

====================================================
PROJECTS SECTION
====================================================

Render projects from a local static data file (projects.js).

Include the following projects:

1. Mental Health Detection Using Machine Learning
   - Text classification using TF-IDF
   - Models: SVM, Logistic Regression, Naive Bayes, Random Forest
   - Achieved up to 92% accuracy
   - Tools: Python, NLTK, Scikit-learn

2. Phishing Email Detection Using NLP & Deep Learning (Final Year Project)
   - Hybrid model using CNN, BiLSTM, and GCN
   - Advanced text preprocessing and attention mechanisms
   - Spam vs Non-Spam classification

3. New York Airbnb Dashboard
   - Interactive Power BI dashboard
   - Pricing, occupancy, and neighborhood analysis

4. Real-Time Twitter Sentiment Analysis Dashboard
   - Built using Tableau
   - Real-time sentiment, hashtags, engagement, and geo insights

Each project card must include:
- Title
- Short description
- Tech stack
- GitHub link placeholder
- View Project button
- Hover animation

====================================================
RESEARCH PUBLICATIONS SECTION
====================================================

Create a dedicated "Research Publications" section.
Render items from a local static data file (publications.js).

Each publication entry must include:
- Paper title
- Authors
- Abstract (collapsible or expandable)
- Conference or journal name
- Year of publication
- Keywords / research areas
- PDF link or DOI placeholder

Layout:
- Clean academic-style cards
- Expand/collapse abstract interaction
- Minimal, professional typography

====================================================
EXPERIENCE SECTION
====================================================

Timeline-style layout.

Data Analyst & Operations – Ulink Assist Pte. Ltd. (Remote, Singapore)
Duration: Sep 2025 – Present
- Analyzed operational data
- Built reports and dashboards using Excel and Power BI
- Supported data-driven decision-making
- Collaborated with cross-functional teams

Data Analyst – Cybersecurity Research Center (CYRES), USM
Duration: Jul 2025 – Sep 2025
- Cleaned and validated large datasets
- Identified anomalies and trends
- Applied machine learning techniques to improve reporting accuracy

====================================================
EDUCATION SECTION
====================================================

Bachelor of Computer Science (Honours) – Data Science
Albukhary International University, Malaysia
Expected Graduation: March 2026

Relevant Coursework:
Artificial Intelligence
Machine Learning
Deep Learning
Natural Language Processing
Data Mining & Analytics
DBMS
Information Visualization
Software Engineering

====================================================
CERTIFICATIONS & ACHIEVEMENTS
====================================================

- Google Project Management Professional Certificate
- AWS Academy Machine Learning Foundations
- Dean’s List (3 Semesters)
- Malaysia ICT Volunteer
- President, AIU Cricket Club

====================================================
CONTACT SECTION (FRONTEND ONLY)
====================================================

Contact form UI with client-side validation only.
Fields:
Name
Email
Message

Simulate submission success message.
Include social icons:
GitHub
LinkedIn
Email

====================================================
FOLDER STRUCTURE
====================================================

/src
  /components
  /sections
  /data
    projects.js
    publications.js
    skills.js
    experience.js
  /assets
  App.jsx

====================================================
DESIGN GUIDELINES
====================================================

Minimal, modern, and academic-professional.
Light or dark theme.
Blue or indigo accent color.
Rounded cards.
Soft shadows.
Consistent spacing.
Clean typography.

====================================================
FINAL OUTPUT
====================================================

Generate a fully responsive, frontend-only portfolio website with clean component structure, static data rendering, professional animations, and production-ready UI suitable for industry and research-focused roles.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://analytics-arc-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db561e22-f418-46e8-801c-a80d1f70e52a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
