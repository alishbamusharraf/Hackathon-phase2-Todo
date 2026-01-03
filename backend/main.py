from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = FastAPI(title="Todo Backend API", version="1.0.0")

# CORS middleware configuration
allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    os.getenv("FRONTEND_URL", ""),
    os.getenv("BETTER_AUTH_URL", ""),
]
# Remove empty strings if variables are not set
allowed_origins = [origin for origin in allowed_origins if origin]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from api.tasks import router as tasks_router
from api.auth import router as auth_router

app.include_router(tasks_router, prefix="/api", tags=["tasks"])
app.include_router(auth_router, prefix="/api", tags=["auth"])

@app.on_event("startup")
async def startup_event():
    # Create database tables
    from sqlmodel import SQLModel
    from core.database import engine
    SQLModel.metadata.create_all(engine)
    print("Database tables created")

@app.get("/")
def read_root():
    return {"message": "Todo Backend API"}