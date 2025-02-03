# jubilant-barnacle

# Project Structure

## Frontend Architecture
![Frontend Structure](frontend-app-structure.png)

## Backend Architecture 
![Backend Structure](backend-app-structure.png)



🔧 Local Development Setup:

Started with backend (FastAPI):

Implemented PDF processing & chat functionality
Set up Docker space on HuggingFace with OpenAI integration
Configured CORS for cross-origin communication


Frontend Structure (Next.js):
```bash
mkdir frontend
cd frontend
npx create-next-app@latest frontend --typescript --tailwind --eslint
```


🧪 Local Testing Process:

Backend verification:

```bash
uvicorn backend.app.main:app --reload

result:
Successfully tested PDF upload via curl command
Confirmed chunk processing (59 chunks processed)
```

Frontend development:

```
bash
cd frontend
npm run dev
```

Customized page.tsx for file handling
Enhanced UI/UX with Tailwind CSS



🌐 Production Deployment:

Backend: Deployed to HuggingFace Spaces
Frontend: Deployed to Vercel

- Imported frontend repository
- Configured Next.js build settings
- Domain assigned: jubilant-barnacle-u2ap.vercel.app

Update Backend: 
- Domain added to CORS in my backend to allow communication with my Vercel domain!
