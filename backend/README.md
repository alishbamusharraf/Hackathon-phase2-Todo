# ⚙️ TaskFlow Backend API

A robust, high-performance backend ecosystem built with **FastAPI** and **SQLModel**, designed to power the premium **TaskFlow** frontend experience.

## 🚀 core Features

- 🔐 **Secure JWT Orchestration**: Advanced authentication flow with shared secret verification.
- ⚡ **Asynchronous CRUD**: Optimized task management endpoints for real-time synchronization.
- 🛡️ **Member Isolation**: Strict database-level isolation ensuring your data remains private.
- 📊 **Neon PostgreSQL Integration**: Leveraging serverless SQL for world-class persistence.
- 🐳 **Container Ready**: Fully containerized architecture for seamless scaling.

## 🛠️ Tech Stack

- **Framework**: FastAPI (High-performance Python)
- **ORM**: SQLModel (Pydantic + SQLAlchemy)
- **Database**: Neon (Serverless PostgreSQL)
- **Security**: PyJWT & Passlib (Bcrypt)
- **Environment**: Python 3.13+

## 📦 Setup & Installation

1. Clone the repository and enter the backend workspace:
```bash
cd backend
```

2. Initialize a virtual environment and activate it:
```bash
python -m venv venv
# Windows
.\venv\Scripts\Activate.ps1
# Unix/macOS
source venv/bin/activate
```

3. Install the required production dependencies:
```bash
pip install -r requirements.txt
```

4. Configure your secrets in a `.env` file:
```env
BETTER_AUTH_SECRET=lvXnm0qeHpvqUO1me5OkGtmX4wq7hhCf
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=your_neon_postgres_url
```

5. Launch the high-performance API server:
```bash
uvicorn main:app --reload
```

The API will be operational at `http://localhost:8000`.

## 🌐 API Specification

### Authentication Protocol
- Format: `Authorization: Bearer <token>`
- Tokens are cryptographically verified using the shared `BETTER_AUTH_SECRET`.

### Task Productivity Endpoints
- `GET /api/tasks`: Retrieve all tasks for the authenticated member.
- `POST /api/tasks`: Synchronize a new task to the cloud.
- `GET /api/tasks/{id}`: Detailed view of a specific task.
- `PUT /api/tasks/{id}`: Full update of task metadata.
- `DELETE /api/tasks/{id}`: Permanent removal of a task node.
- `PATCH /api/tasks/{id}/complete`: High-speed task completion toggle.

## 📂 Project Architecture

```
backend/
├── main.py              # FastAPI Orchestrator
├── models/              # Data Schemas (SQLModel)
├── api/                 # Endpoint Logic
├── core/                # Security & Database Engines
├── schemas/             # Pydantic Data Validation
└── dependencies.py      # Auth & Session Injectors
```

---

*Engineered to power professional workflows.*