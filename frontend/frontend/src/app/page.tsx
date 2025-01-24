'use client';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData
    });
    setFile(e.target.files[0]);
  };

  const handleQuestion = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: question })
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <input type="file" onChange={handleUpload} accept=".pdf" />
      <form onSubmit={handleQuestion} className="mt-4">
        <input 
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Ask about the PDF..."
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Ask
        </button>
      </form>
      {answer && <div className="mt-4 p-4 bg-gray-100 rounded">{answer}</div>}
    </main>
  );
}
