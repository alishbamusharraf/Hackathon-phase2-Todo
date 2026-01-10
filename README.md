# ✨ TaskFlow - Premium Todo Hackathon Project

A stunning, modern full-stack Todo application featuring a high-end **TaskFlow Premium UI**, secure **JWT Authentication**, and a high-performance **FastAPI Backend**.

## 🌟 Overview

**TaskFlow** is a sophisticated task management ecosystem designed for the modern professional. It transcends the traditional todo list by providing a sensory-rich, glassmorphic interface that makes productivity feel premium. Built with **Next.js 15+** and **FastAPI**, it leverages **Neon PostgreSQL** for world-class serverless data persistence.

---

## 🏗️ Architecture

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: FastAPI, SQLModel, PyJWT.
- **Database**: Neon (Serverless PostgreSQL).
- **Authentication**: JWT-based security with shared secret verification.

---

## ✨ Features

### 🎨 TaskFlow Premium UI (Next.js)
- **Vibrant Gradient Flow**: A signature Purple-Pink-Blue animated design system.
- **Advanced Glassmorphism**: High-saturation backdrop blur (20px) with elegant gradient borders.
- **Fluid Micro-interactions**: Bespoke animations for every click and hover powered by Framer Motion.
- **Dynamic Stats Dashboard**: Real-time visualization of your productivity metrics.
- **Premium Typography**: Integration of Outfit and Inter fonts for a professional aesthetic.

### ⚙️ Robust Backend (FastAPI)
- **Cryptographic Security**: Advanced JWT-based authentication ensuring data integrity.
- **Privacy-First Architecture**: Strong user isolation logic; your workspace is your intellectual territory.
- **High-Performance CRUD**: Optimized endpoints for lighting-fast task synchronization.
- **Serverless Scaling**: Powered by Neon Postgres for instant scalability.

---

## 📂 Project Structure

```text
.
├── backend/            # FastAPI Python Backend
│   ├── main.py         # Entry point & CORS configuration
│   ├── models/         # SQLModel database schemas
│   ├── api/            # API Route handlers for task management
│   └── .env            # Environment secrets
├── frontend/           # Next.js TypeScript Frontend
│   ├── app/            # App Router (TaskFlow Pages & Layouts)
│   ├── components/     # Premium UI components (Glass cards, Navbars)
│   ├── styles/         # Global design tokens & CSS animations
│   └── lib/api.ts      # API Client with automated JWT handling
├── docker-compose.yml  # Local orchestration with Docker
└── README.md           # Project Documentation
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Python 3.13+
- Node.js 18+
- Neon PostgreSQL Account

### 2. Backend Setup
```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1   # On Windows
pip install -r requirements.txt
# Configure .env with BETTER_AUTH_SECRET, BETTER_AUTH_URL, and DATABASE_URL
uvicorn main:app --reload
```

### 3. Frontend Setup
```bash
cd frontend
npm install
# Configure .env.local with NEXT_PUBLIC_API_URL=http://localhost:8000
npm run dev
```

---

## 🛠️ Environment Variables

### Backend (`backend/.env`)
- `DATABASE_URL`: Your Neon Postgres connection string.
- `BETTER_AUTH_SECRET`: Shared secret for JWT signing.
- `BETTER_AUTH_URL`: Your frontend URL.

### Frontend (`frontend/.env.local`)
- `NEXT_PUBLIC_API_URL`: Your backend API URL.

---

## 🤝 Key Technologies
- **Frontend**: Next.js 15, Tailwind CSS, Framer Motion, TypeScript.
- **Backend**: FastAPI, SQLModel, Uvicorn, PyJWT.
- **Infrastructure**: Neon Postgres, Render, Vercel.

---

*Built with ✨ by TaskFlow Premium Design Systems.*
