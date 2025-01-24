<<<<<<< HEAD
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import PyPDF2
import openai
import numpy as np
import faiss
import tiktoken
from typing import List
import io
from dotenv import load_dotenv
import os

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage


class DocumentStore:
    def __init__(self):
        self.documents: List[str] = []
        self.embeddings = None
        self.index = None

    def reset(self):
        self.documents = []
        self.embeddings = None
        self.index = None


doc_store = DocumentStore()


class Question(BaseModel):
    text: str


def get_embedding(text: str) -> List[float]:
    response = openai.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding


def chunk_text(text: str, chunk_size: int = 1000) -> List[str]:
    words = text.split()
    chunks = []
    current_chunk = []
    current_size = 0

    for word in words:
        current_chunk.append(word)
        current_size += len(word) + 1

        if current_size >= chunk_size:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
            current_size = 0

    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks


@app.post("/upload")
async def upload_pdf(file: UploadFile):
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="File must be a PDF")

    try:
        # Reset the document store
        doc_store.reset()

        # Read PDF content
        content = await file.read()
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()

        # Chunk the text
        chunks = chunk_text(text)
        doc_store.documents = chunks

        # Create embeddings
        embeddings = [get_embedding(chunk) for chunk in chunks]
        doc_store.embeddings = np.array(embeddings, dtype=np.float32)

        # Create FAISS index
        dimension = len(embeddings[0])
        doc_store.index = faiss.IndexFlatL2(dimension)
        doc_store.index.add(doc_store.embeddings)

        return {"message": "PDF processed successfully", "chunks": len(chunks)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/ask")
async def ask_question(question: Question):
    if not doc_store.index:
        raise HTTPException(
            status_code=400, detail="No document has been uploaded yet")

    try:
        # Get question embedding
        question_embedding = get_embedding(question.text)

        # Search similar chunks
        k = 10  # Number of relevant chunks to retrieve
        D, I = doc_store.index.search(
            np.array([question_embedding], dtype=np.float32), k)

        # Get relevant chunks
        relevant_chunks = [doc_store.documents[i] for i in I[0]]
        print(relevant_chunks)

        # Create prompt
        prompt = f"""Based on the following context, please answer the question.
        If the answer cannot be found in the context, say "I cannot find the answer in the document." You may also use the context to infer information that is not explicitly stated in the context. For example, if the context does not explicitly state what the paper is about, you may infer that the paper is about the topic of the question or the retrieved context.
        Context:
        {' '.join(relevant_chunks)}
        Question: {question.text}
        """

        # Get response from OpenAI
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that answers questions based on the provided context."},
                {"role": "user", "content": prompt}
            ]
        )

        return {"answer": response.choices[0].message.content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Configure OpenAI API key
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info",
        workers=1
=======
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import PyPDF2
import openai
import numpy as np
import faiss
import tiktoken
from typing import List
import io
from dotenv import load_dotenv
import os

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage


class DocumentStore:
    def __init__(self):
        self.documents: List[str] = []
        self.embeddings = None
        self.index = None

    def reset(self):
        self.documents = []
        self.embeddings = None
        self.index = None


doc_store = DocumentStore()


class Question(BaseModel):
    text: str


def get_embedding(text: str) -> List[float]:
    response = openai.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding


def chunk_text(text: str, chunk_size: int = 1000) -> List[str]:
    words = text.split()
    chunks = []
    current_chunk = []
    current_size = 0

    for word in words:
        current_chunk.append(word)
        current_size += len(word) + 1

        if current_size >= chunk_size:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
            current_size = 0

    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks


@app.post("/upload")
async def upload_pdf(file: UploadFile):
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="File must be a PDF")

    try:
        # Reset the document store
        doc_store.reset()

        # Read PDF content
        content = await file.read()
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()

        # Chunk the text
        chunks = chunk_text(text)
        doc_store.documents = chunks

        # Create embeddings
        embeddings = [get_embedding(chunk) for chunk in chunks]
        doc_store.embeddings = np.array(embeddings, dtype=np.float32)

        # Create FAISS index
        dimension = len(embeddings[0])
        doc_store.index = faiss.IndexFlatL2(dimension)
        doc_store.index.add(doc_store.embeddings)

        return {"message": "PDF processed successfully", "chunks": len(chunks)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/ask")
async def ask_question(question: Question):
    if not doc_store.index:
        raise HTTPException(
            status_code=400, detail="No document has been uploaded yet")

    try:
        # Get question embedding
        question_embedding = get_embedding(question.text)

        # Search similar chunks
        k = 10  # Number of relevant chunks to retrieve
        D, I = doc_store.index.search(
            np.array([question_embedding], dtype=np.float32), k)

        # Get relevant chunks
        relevant_chunks = [doc_store.documents[i] for i in I[0]]
        print(relevant_chunks)

        # Create prompt
        prompt = f"""Based on the following context, please answer the question.
        If the answer cannot be found in the context, say "I cannot find the answer in the document." You may also use the context to infer information that is not explicitly stated in the context. For example, if the context does not explicitly state what the paper is about, you may infer that the paper is about the topic of the question or the retrieved context.
        Context:
        {' '.join(relevant_chunks)}
        Question: {question.text}
        """

        # Get response from OpenAI
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that answers questions based on the provided context."},
                {"role": "user", "content": prompt}
            ]
        )

        return {"answer": response.choices[0].message.content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Configure OpenAI API key
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info",
        workers=1
>>>>>>> 467f9179b7ec187f353f256c52c2ae9e8be701b2
    )