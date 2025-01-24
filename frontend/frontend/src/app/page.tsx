// 'use client';
// import { useState, ChangeEvent } from 'react';

// export default function Home() {
//   const [file, setFile] = useState<File | null>(null);
//   const [error, setError] = useState<string>('');
//   // const API_URL = "https://huggingface.co/spaces/sahanes/backend-app";
//   const API_URL = "http://localhost:8000"; // Not huggingface URL for local dev

//   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files?.[0]) return;
//     try {
//       const formData = new FormData();
//       formData.append('file', e.target.files[0]);
//       const response = await fetch(`${API_URL}/upload`, {
//         method: 'POST',
//         body: formData
//       });
//       if (!response.ok) throw new Error('Upload failed');
//       setFile(e.target.files[0]);
//       setError('');
//     } catch (error) {
//       setError('Failed to upload file');
//       console.error(error);
//     }
//   };

//   return (
//     <main className="p-4">
//       <input type="file" onChange={handleUpload} accept=".pdf" />
//       {error && <div className="text-red-500">{error}</div>}
//       {file && <div>{file.name}</div>}
//     </main>
//   );
// }

'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Home() {
 const [file, setFile] = useState<File | null>(null);
 const [error, setError] = useState<string>('');
 const [question, setQuestion] = useState('');
 const [answer, setAnswer] = useState('');
 //const API_URL = "http://localhost:8000";
  const API_URL = "https://huggingface.co/spaces/sahanes/backend-app";

 const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
   if (!e.target.files?.[0]) return;
   try {
     const formData = new FormData();
     formData.append('file', e.target.files[0]);
     const response = await fetch(`${API_URL}/upload`, {
       method: 'POST',
       body: formData
     });
     if (!response.ok) throw new Error('Upload failed');
     setFile(e.target.files[0]);
     setError('');
   } catch (error) {
     setError('Failed to upload file');
     console.error(error);
   }
 };

 const handleQuestion = async (e: FormEvent) => {
   e.preventDefault();
   if (!question) return;
   try {
     const response = await fetch(`${API_URL}/ask`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ text: question })
     });
     const data = await response.json();
     setAnswer(data.answer);
   } catch (error) {
     setError('Failed to get answer');
     console.error(error);
   }
 };

 return (
   <main className="p-4 max-w-2xl mx-auto">
     <input type="file" onChange={handleUpload} accept=".pdf" className="mb-4" />
     {error && <div className="text-red-500 mb-4">{error}</div>}
     {file && <div className="mb-4">{file.name}</div>}
     
     <form onSubmit={handleQuestion} className="space-y-4">
       <input 
         type="text"
         value={question}
         onChange={(e) => setQuestion(e.target.value)}
         placeholder="Ask a question..."
         className="w-full p-2 border rounded"
       />
       <button 
         type="submit"
         className="w-full bg-blue-500 text-white p-2 rounded"
       >
         Ask
       </button>
     </form>
     
     {answer && (
       <div className="mt-4 p-4 bg-gray-100 rounded">
         {answer}
       </div>
     )}
   </main>
 );
}
