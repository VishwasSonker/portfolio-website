# 🚀 Vishwas Sonker — Portfolio Website

A modern, responsive developer portfolio website showcasing my **skills, projects, education, experience, and technical background**, with an integrated **AI-powered portfolio assistant** that can answer questions about my profile and compare my skills with job requirements.

## 🌐 Live Website

> Coming soon

## ✨ Features

* 🎨 Modern and responsive UI
* 📱 Mobile-friendly design
* 🤖 AI-powered portfolio chatbot
* 💬 Ask questions about my:

  * Skills
  * Projects
  * Education
  * Experience
  * Technical background
* 📄 Downloadable resume
* 🔗 GitHub and developer profile links
* 🧑‍💻 Dedicated project showcase
* ⚡ Fast frontend powered by Vite
* 🔥 FastAPI backend for AI/chat functionality
* 📊 Structured portfolio data for accurate AI responses

## 🛠️ Tech Stack

### Frontend

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Lucide React**

### Backend

* **Python**
* **FastAPI**
* **Uvicorn**

### AI

* AI-powered conversational assistant
* Portfolio information stored in structured JSON
* Backend API responsible for processing chatbot requests

### Deployment

* **Frontend:** Netlify
* **Backend:** Python-compatible hosting platform

## 📁 Project Structure

```text
portfolio-website/
│
├── frontend/
│   ├── public/
│   │   ├── resume.pdf
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AIChat.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── SkillGroup.tsx
│   │   │
│   │   ├── data/
│   │   │   └── resumeData.ts
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── backend/
│   ├── main.py
│   ├── resume.json
│   ├── requirements.txt
│   └── .gitignore
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Python 3.10+
* Git

---

## 💻 Run the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## 🐍 Run the Backend

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

### Windows

```powershell
python -m venv venv
```

Activate it:

```powershell
venv\Scripts\activate
```

### macOS / Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file containing the required environment variables.

Then start the FastAPI server:

```bash
uvicorn main:app --reload --port 8000
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

## 🔐 Environment Variables

Sensitive credentials should **never be committed to GitHub**.

Create a `.env` file inside the `backend` directory:

```env
YOUR_API_KEY=your_api_key_here
```

The `.env` file is excluded from version control through `.gitignore`.

For production deployment, configure environment variables through the backend hosting platform.

## 🤖 AI Portfolio Assistant

The portfolio includes an interactive AI assistant designed specifically around my professional profile.

Visitors can ask questions such as:

```text
What technologies does Vishwas know?

Tell me about his most recent project.

What is his experience with C++?

What projects has he built?

Does his skill set match this job description?
```

The assistant uses structured portfolio information from the backend to provide relevant responses.

## 📄 Resume

My resume is available directly from the portfolio website.

The current resume is stored at:

```text
frontend/public/resume.pdf
```

## 📬 Contact

If you'd like to connect, collaborate, or discuss opportunities, feel free to reach out through the contact links available on the portfolio website.

## ⭐ Contributing

This is a personal portfolio project, so contributions are generally not required. However, suggestions and feedback are always welcome.

## 📜 License

This project is intended for personal and portfolio use.

© Vishwas Sonker. All rights reserved.
