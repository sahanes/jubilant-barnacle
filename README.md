# PDF Chat Assistant

An interactive web application that processes PDFs and enables chat-based interactions with document content using AI.

## 🏗️ Architecture

### Frontend (Next.js)
![Frontend Structure](frontend-app-structure.png)
- TypeScript-based Next.js application
- TailwindCSS for styling
- PDF processing and chat interface
- Real-time communication with backend

### Backend (FastAPI)
![Backend Structure](backend-app-structure.png)
- FastAPI for API endpoints
- PDF chunk processing
- OpenAI integration
- Docker containerization

## 🚀 Quick Start

💻 Local Developement:

#### Backend Setup
```bash
# Start FastAPI server
uvicorn backend.app.main:app --reload
```

#### Frontend Setup
```bash
cd frontend
npm install
npx create-next-app@latest frontend --typescript --tailwind --eslint
npm run dev
```
🔑 Key Features

- PDF document processing
- AI-powered chat interactions
- Real-time document analysis
- Cross-origin resource sharing
- Containerized deployment

🌐 Production Deployment:

- Backend: HuggingFace Spaces
- Frontend: Vercel with custom < page.tsx > with smooth file handling and enhanced < Global.CSS > animations (check them in this repository)

🛠️ Tech Stack

- Frontend: Next.js, TypeScript, TailwindCSS
- Backend: FastAPI, Python
- AI Integration: OpenAI
- Deployment: HuggingFace Spaces, Vercel

📝 Development Notes

- Implemented secure file handling
- Optimized chunk processing (59 chunks)
- Configured CORS for production domains
