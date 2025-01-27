// // // // // // // 'use client';
// // // // // // // import { useState, ChangeEvent } from 'react';

// // // // // // // export default function Home() {
// // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // //   const [error, setError] = useState<string>('');
// // // // // // //   // const API_URL = "https://huggingface.co/spaces/sahanes/backend-app";
// // // // // // //   const API_URL = "http://localhost:8000"; // Not huggingface URL for local dev

// // // // // // //   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
// // // // // // //     if (!e.target.files?.[0]) return;
// // // // // // //     try {
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append('file', e.target.files[0]);
// // // // // // //       const response = await fetch(`${API_URL}/upload`, {
// // // // // // //         method: 'POST',
// // // // // // //         body: formData
// // // // // // //       });
// // // // // // //       if (!response.ok) throw new Error('Upload failed');
// // // // // // //       setFile(e.target.files[0]);
// // // // // // //       setError('');
// // // // // // //     } catch (error) {
// // // // // // //       setError('Failed to upload file');
// // // // // // //       console.error(error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <main className="p-4">
// // // // // // //       <input type="file" onChange={handleUpload} accept=".pdf" />
// // // // // // //       {error && <div className="text-red-500">{error}</div>}
// // // // // // //       {file && <div>{file.name}</div>}
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }

// // // // // // 'use client';
// // // // // // import { useState, ChangeEvent, FormEvent } from 'react';

// // // // // // export default function Home() {
// // // // // //  const [file, setFile] = useState<File | null>(null);
// // // // // //  const [error, setError] = useState<string>('');
// // // // // //  const [question, setQuestion] = useState('');
// // // // // //  const [answer, setAnswer] = useState('');
// // // // // //  // const API_URL = "http://localhost:8000"; #Local Testing
// // // // // //  // const API_URL = "https://huggingface.co/spaces/sahanes/backend-app";
// // // // // //  // const API_URL = "https://sahanes-backend-app.huggingface.space";  // Note: .space not .co
// // // // // //  // const API_URL = "https://sahanes-backend-app.spaces.huggingface.co";
// // // // // //  // const API_URL = "https://sahanes-backend-app.huggingface.co:7860";
// // // // // //  // const API_URL = "https://huggingface.co/spaces/sahanes/backend-app:7860";
// // // // // //  // const API_URL = "https://sahanes-backend-app.hf.space/api";
// // // // // //  const API_URL = process.env.NEXT_PUBLIC_API_URL;
// // // // // //  const uploadUrl = `${API_URL}/upload`;
// // // // // //  const askUrl = `${API_URL}/ask`;

// // // // // //  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
// // // // // //    if (!e.target.files?.[0]) return;
// // // // // //    try {
// // // // // //      const formData = new FormData();
// // // // // //      formData.append('file', e.target.files[0]);
// // // // // //      // const response = await fetch(`${API_URL}/upload`, {
// // // // // //     const response = await fetch(uploadUrl, {
// // // // // //        method: 'POST',
// // // // // //        body: formData
// // // // // //      });
// // // // // //      if (!response.ok) throw new Error('Upload failed');
// // // // // //      setFile(e.target.files[0]);
// // // // // //      setError('');
// // // // // //    } catch (error) {
// // // // // //      setError('Failed to upload file');
// // // // // //      console.error(error);
// // // // // //    }
// // // // // //  };

// // // // // //  const handleQuestion = async (e: FormEvent) => {
// // // // // //    e.preventDefault();
// // // // // //    if (!question) return;
// // // // // //    try {
// // // // // //      // const response = await fetch(`${API_URL}/ask`, {
// // // // // //     const response = await fetch(askUrl, {
// // // // // //        method: 'POST',
// // // // // //        headers: { 'Content-Type': 'application/json' },
// // // // // //        body: JSON.stringify({ text: question })
// // // // // //      });
// // // // // //      const data = await response.json();
// // // // // //      setAnswer(data.answer);
// // // // // //    } catch (error) {
// // // // // //      setError('Failed to get answer');
// // // // // //      console.error(error);
// // // // // //    }
// // // // // //  };
// // // // // //  console.log('API_URL:', API_URL);
// // // // // //  console.log('Complete URL:', `${API_URL}/upload`);
 

// // // // // //  return (
// // // // // //    <main className="p-4 max-w-2xl mx-auto">
// // // // // //      <input type="file" onChange={handleUpload} accept=".pdf" className="mb-4" />
// // // // // //      {error && <div className="text-red-500 mb-4">{error}</div>}
// // // // // //      {file && <div className="mb-4">{file.name}</div>}
     
// // // // // //      <form onSubmit={handleQuestion} className="space-y-4">
// // // // // //        <input 
// // // // // //          type="text"
// // // // // //          value={question}
// // // // // //          onChange={(e) => setQuestion(e.target.value)}
// // // // // //          placeholder="Ask a question..."
// // // // // //          className="w-full p-2 border rounded"
// // // // // //        />
// // // // // //        <button 
// // // // // //          type="submit"
// // // // // //          className="w-full bg-blue-500 text-white p-2 rounded"
// // // // // //        >
// // // // // //          Ask
// // // // // //        </button>
// // // // // //      </form>
     
// // // // // //      {answer && (
// // // // // //        <div className="mt-4 p-4 bg-gray-100 rounded">
// // // // // //          {answer}
// // // // // //        </div>
// // // // // //      )}
// // // // // //    </main>
// // // // // //  );
// // // // // // }
// // // // // 'use client';
// // // // // import { useState, ChangeEvent, FormEvent } from 'react';

// // // // // export default function Home() {
// // // // //  const [file, setFile] = useState<File | null>(null);
// // // // //  const [error, setError] = useState<string>('');
// // // // //  const [question, setQuestion] = useState('');
// // // // //  const [answer, setAnswer] = useState('');
// // // // //  const API_URL = process.env.NEXT_PUBLIC_API_URL;

// // // // //  console.log('API_URL:', API_URL);
// // // // //  console.log('Complete upload URL:', `${API_URL}/upload`);
// // // // //  console.log('Complete ask URL:', `${API_URL}/ask`);

// // // // //  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
// // // // //    console.log('Starting upload...');
// // // // //    if (!e.target.files?.[0]) return;
   
// // // // //    try {
// // // // //      const formData = new FormData();
// // // // //      formData.append('file', e.target.files[0]);
// // // // //      const uploadUrl = `${API_URL}/upload`;
// // // // //      console.log('Uploading to:', uploadUrl);
     
// // // // //      const response = await fetch(uploadUrl, {
// // // // //        method: 'POST',
// // // // //        body: formData
// // // // //      });
     
// // // // //      console.log('Upload response:', response);
// // // // //      const data = await response.json();
// // // // //      console.log('Upload data:', data);
     
// // // // //      if (!response.ok) throw new Error(data.detail || 'Upload failed');
// // // // //      setFile(e.target.files[0]);
// // // // //      setError('');
// // // // //    } catch (error) {
// // // // //      console.error('Upload error:', error);
// // // // //      setError('Failed to upload file');
// // // // //    }
// // // // //  };

// // // // //  const handleQuestion = async (e: FormEvent) => {
// // // // //    e.preventDefault();
// // // // //    if (!question) return;
   
// // // // //    console.log('Asking question:', question);
// // // // //    try {
// // // // //      const askUrl = `${API_URL}/ask`;
// // // // //      console.log('Asking at:', askUrl);
     
// // // // //      const response = await fetch(askUrl, {
// // // // //        method: 'POST',
// // // // //        headers: { 'Content-Type': 'application/json' },
// // // // //        body: JSON.stringify({ text: question })
// // // // //      });
     
// // // // //      console.log('Question response:', response);
// // // // //      if (!response.ok) throw new Error('Failed to get answer');
     
// // // // //      const data = await response.json();
// // // // //      console.log('Answer data:', data);
// // // // //      setAnswer(data.answer);
// // // // //    } catch (error) {
// // // // //      console.error('Question error:', error);
// // // // //      setError('Failed to get answer');
// // // // //    }
// // // // //  };

// // // // //  return (
// // // // //    <main className="p-4 max-w-2xl mx-auto">
// // // // //      <input 
// // // // //        type="file" 
// // // // //        onChange={handleUpload} 
// // // // //        accept=".pdf" 
// // // // //        className="mb-4"
// // // // //      />
// // // // //      {error && <div className="text-red-500 mb-4">{error}</div>}
// // // // //      {file && <div className="mb-4">Uploaded: {file.name}</div>}
     
// // // // //      <form onSubmit={handleQuestion} className="space-y-4">
// // // // //        <input 
// // // // //          type="text"
// // // // //          value={question}
// // // // //          onChange={(e) => setQuestion(e.target.value)}
// // // // //          placeholder="Ask a question about the PDF..."
// // // // //          className="w-full p-2 border rounded"
// // // // //        />
// // // // //        <button 
// // // // //          type="submit"
// // // // //          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
// // // // //          disabled={!file || !question}
// // // // //        >
// // // // //          Ask
// // // // //        </button>
// // // // //      </form>
     
// // // // //      {answer && (
// // // // //        <div className="mt-4 p-4 bg-gray-100 rounded">
// // // // //          {answer}
// // // // //        </div>
// // // // //      )}
// // // // //    </main>
// // // // //  );
// // // // // }

// // // // 'use client';
// // // // import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

// // // // interface FileState {
// // // //   file: File | null;
// // // //   uploadStatus: 'idle' | 'uploading' | 'success' | 'error';
// // // //   uploadedFileName: string | null;
// // // // }

// // // // export default function PDFHandler() {
// // // //   const [fileState, setFileState] = useState<FileState>({
// // // //     file: null,
// // // //     uploadStatus: 'idle',
// // // //     uploadedFileName: null
// // // //   });
// // // //   const [question, setQuestion] = useState('');
// // // //   const [answer, setAnswer] = useState('');
// // // //   const [error, setError] = useState<string>('');
// // // //   const [isLoading, setIsLoading] = useState(false);

// // // //   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// // // //   const validatePDF = (file: File): boolean => {
// // // //     if (!file.type.includes('pdf')) {
// // // //       setError('Please upload a PDF file');
// // // //       return false;
// // // //     }
// // // //     if (file.size > 10 * 1024 * 1024) { // 10MB limit
// // // //       setError('File size should be less than 10MB');
// // // //       return false;
// // // //     }
// // // //     return true;
// // // //   };

// // // //   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
// // // //     const file = e.target.files?.[0];
// // // //     if (!file) return;

// // // //     if (!validatePDF(file)) return;

// // // //     setFileState(prev => ({
// // // //       ...prev,
// // // //       uploadStatus: 'uploading'
// // // //     }));
// // // //     setError('');

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append('file', file);

// // // //       const response = await fetch(`${apiUrl}/upload`, {
// // // //         method: 'POST',
// // // //         body: formData,
// // // //       });

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json().catch(() => ({}));
// // // //         throw new Error(errorData.detail || 'Upload failed');
// // // //       }

// // // //       const data = await response.json();
      
// // // //       setFileState({
// // // //         file,
// // // //         uploadStatus: 'success',
// // // //         uploadedFileName: file.name
// // // //       });
// // // //     } catch (err) {
// // // //       console.error('Upload error:', err);
// // // //       setFileState(prev => ({
// // // //         ...prev,
// // // //         uploadStatus: 'error'
// // // //       }));
// // // //       setError(err instanceof Error ? err.message : 'Failed to upload file');
// // // //     }
// // // //   };

// // // //   const handleQuestion = async (e: FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (!question.trim() || fileState.uploadStatus !== 'success') return;

// // // //     setIsLoading(true);
// // // //     setError('');

// // // //     try {
// // // //       const response = await fetch(`${apiUrl}/ask`, {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           text: question.trim(),
// // // //           filename: fileState.uploadedFileName
// // // //         }),
// // // //       });

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json().catch(() => ({}));
// // // //         throw new Error(errorData.detail || 'Failed to get answer');
// // // //       }

// // // //       const data = await response.json();
// // // //       setAnswer(data.answer);
// // // //     } catch (err) {
// // // //       setError(err instanceof Error ? err.message : 'Failed to get answer');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-2xl mx-auto p-4">
// // // //       <div className="mb-6">
// // // //         <label className="block text-sm font-medium mb-2">
// // // //           Upload PDF (Max 10MB)
// // // //         </label>
// // // //         <input
// // // //           type="file"
// // // //           accept=".pdf"
// // // //           onChange={handleUpload}
// // // //           className="w-full p-2 border rounded"
// // // //           disabled={fileState.uploadStatus === 'uploading'}
// // // //         />
// // // //         {fileState.uploadStatus === 'uploading' && (
// // // //           <div className="mt-2 text-blue-500">Uploading...</div>
// // // //         )}
// // // //         {fileState.uploadStatus === 'success' && (
// // // //           <div className="mt-2 text-green-500">
// // // //             Successfully uploaded: {fileState.uploadedFileName}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {error && (
// // // //         <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md border border-red-200">
// // // //           {error}
// // // //         </div>
// // // //       )}

// // // //       <form onSubmit={handleQuestion} className="space-y-4">
// // // //         <div>
// // // //           <label className="block text-sm font-medium mb-2">
// // // //             Ask a question about the PDF
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             value={question}
// // // //             onChange={(e) => setQuestion(e.target.value)}
// // // //             placeholder="What would you like to know?"
// // // //             className="w-full p-2 border rounded"
// // // //             disabled={fileState.uploadStatus !== 'success'}
// // // //           />
// // // //         </div>

// // // //         <button
// // // //           type="submit"
// // // //           disabled={!question.trim() || fileState.uploadStatus !== 'success' || isLoading}
// // // //           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
// // // //         >
// // // //           {isLoading ? 'Getting Answer...' : 'Ask Question'}
// // // //         </button>
// // // //       </form>

// // // //       {answer && (
// // // //         <div className="mt-6 p-4 bg-gray-50 rounded-md border">
// // // //           <h2 className="font-semibold mb-2">Answer:</h2>
// // // //           <p className="whitespace-pre-wrap">{answer}</p>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useState, ChangeEvent, FormEvent } from 'react';

// // // export default function Home() {
// // //   const [file, setFile] = useState<File | null>(null);
// // //   const [isUploading, setIsUploading] = useState(false);
// // //   const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
// // //   const [error, setError] = useState<string>('');
// // //   const [question, setQuestion] = useState('');
// // //   const [answer, setAnswer] = useState('');

// // //   const API_URL = process.env.NEXT_PUBLIC_API_URL;

// // //   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
// // //     if (!e.target.files?.[0]) return;
    
// // //     setIsUploading(true);
// // //     setError('');
    
// // //     try {
// // //       const formData = new FormData();
// // //       formData.append('file', e.target.files[0]);
      
// // //       console.log('Starting upload to:', `${API_URL}/upload`);
      
// // //       const response = await fetch(`${API_URL}/upload`, {
// // //         method: 'POST',
// // //         body: formData,
// // //       });
      
// // //       console.log('Upload response status:', response.status);
      
// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.detail || 'Upload failed');
// // //       }
      
// // //       const data = await response.json();
// // //       console.log('Upload response:', data);
      
// // //       setFile(e.target.files[0]);
// // //       setUploadedFileName(e.target.files[0].name);
// // //       setError('');
// // //     } catch (error) {
// // //       console.error('Upload error:', error);
// // //       setError(error instanceof Error ? error.message : 'Failed to upload file');
// // //       setFile(null);
// // //       setUploadedFileName(null);
// // //     } finally {
// // //       setIsUploading(false);
// // //     }
// // //   };

// // //   const handleQuestion = async (e: FormEvent) => {
// // //     e.preventDefault();
// // //     if (!question.trim() || !uploadedFileName) return;
    
// // //     setError('');
    
// // //     try {
// // //       const response = await fetch(`${API_URL}/ask`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ 
// // //           text: question.trim(),
// // //           filename: uploadedFileName  // Send the filename to backend
// // //         }),
// // //       });
      
// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(errorData.detail || 'Failed to get answer');
// // //       }
      
// // //       const data = await response.json();
// // //       setAnswer(data.answer);
// // //     } catch (error) {
// // //       console.error('Question error:', error);
// // //       setError(error instanceof Error ? error.message : 'Failed to get answer');
// // //     }
// // //   };

// // //   return (
// // //     <main className="p-4 max-w-2xl mx-auto">
// // //       <div className="mb-6">
// // //         <input 
// // //           type="file" 
// // //           onChange={handleUpload} 
// // //           accept=".pdf" 
// // //           className="w-full p-2 border rounded"
// // //           disabled={isUploading}
// // //         />
        
// // //         {isUploading && (
// // //           <div className="mt-2 text-blue-600">
// // //             Uploading file... Please wait...
// // //           </div>
// // //         )}
        
// // //         {uploadedFileName && (
// // //           <div className="mt-2 text-green-600">
// // //             ✓ File uploaded: {uploadedFileName}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {error && (
// // //         <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
// // //           {error}
// // //         </div>
// // //       )}

// // //       <form onSubmit={handleQuestion} className="space-y-4">
// // //         <input 
// // //           type="text"
// // //           value={question}
// // //           onChange={(e) => setQuestion(e.target.value)}
// // //           placeholder="Ask a question about the PDF..."
// // //           className="w-full p-2 border rounded"
// // //           disabled={!uploadedFileName || isUploading}
// // //         />
        
// // //         <button 
// // //           type="submit"
// // //           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
// // //           disabled={!uploadedFileName || !question.trim() || isUploading}
// // // app/layout.tsx
// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <body>{children}</body>
// //     </html>
// //   )
// // }

// // // app/page.tsx
// // 'use client';

// // import { useState, ChangeEvent, FormEvent } from 'react';

// // export default function Home() {
// //   const [file, setFile] = useState<File | null>(null);
// //   const [isUploading, setIsUploading] = useState(false);
// //   const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
// //   const [error, setError] = useState<string>('');
// //   const [question, setQuestion] = useState('');
// //   const [answer, setAnswer] = useState('');

// //   const API_URL = process.env.NEXT_PUBLIC_API_URL;

// //   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
// //     if (!e.target.files?.[0]) return;
    
// //     setIsUploading(true);
// //     setError('');
    
// //     try {
// //       const formData = new FormData();
// //       formData.append('file', e.target.files[0]);
      
// //       console.log('Starting upload to:', `${API_URL}/upload`);
      
// //       const response = await fetch(`${API_URL}/upload`, {
// //         method: 'POST',
// //         body: formData,
// //       });
      
// //       console.log('Upload response status:', response.status);
      
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.detail || 'Upload failed');
// //       }
      
// //       const data = await response.json();
// //       console.log('Upload response:', data);
      
// //       setFile(e.target.files[0]);
// //       setUploadedFileName(e.target.files[0].name);
// //       setError('');
// //     } catch (error) {
// //       console.error('Upload error:', error);
// //       setError(error instanceof Error ? error.message : 'Failed to upload file');
// //       setFile(null);
// //       setUploadedFileName(null);
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };

// //   const handleQuestion = async (e: FormEvent) => {
// //     e.preventDefault();
// //     if (!question.trim() || !uploadedFileName) return;
    
// //     setError('');
    
// //     try {
// //       const response = await fetch(`${API_URL}/ask`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ 
// //           text: question.trim(),
// //           filename: uploadedFileName
// //         }),
// //       });
      
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.detail || 'Failed to get answer');
// //       }
      
// //       const data = await response.json();
// //       setAnswer(data.answer);
// //     } catch (error) {
// //       console.error('Question error:', error);
// //       setError(error instanceof Error ? error.message : 'Failed to get answer');
// //     }
// //   };

// //   return (
// //     <main className="p-4 max-w-2xl mx-auto">
// //       <div className="mb-6">
// //         <input 
// //           type="file" 
// //           onChange={handleUpload} 
// //           accept=".pdf" 
// //           className="w-full p-2 border rounded"
// //           disabled={isUploading}
// //         />
        
// //         {isUploading && (
// //           <div className="mt-2 text-blue-600">
// //             Uploading file... Please wait...
// //           </div>
// //         )}
        
// //         {uploadedFileName && (
// //           <div className="mt-2 text-green-600">
// //             ✓ File uploaded: {uploadedFileName}
// //           </div>
// //         )}
// //       </div>

// //       {error && (
// //         <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
// //           {error}
// //         </div>
// //       )}

// //       <form onSubmit={handleQuestion} className="space-y-4">
// //         <input 
// //           type="text"
// //           value={question}
// //           onChange={(e) => setQuestion(e.target.value)}
// //           placeholder="Ask a question about the PDF..."
// //           className="w-full p-2 border rounded"
// //           disabled={!uploadedFileName || isUploading}
// //         />
        
// //         <button 
// //           type="submit"
// //           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
// //           disabled={!uploadedFileName || !question.trim() || isUploading}
// //         >
// //           {isUploading ? 'Uploading...' : 'Ask Question'}
// //         </button>
// //       </form>

// //       {answer && (
// //         <div className="mt-6 p-4 bg-gray-50 rounded-md border">
// //           <h2 className="font-semibold mb-2">Answer:</h2>
// //           <p className="whitespace-pre-wrap">{answer}</p>
// //         </div>
// //       )}
// //     </main>
// //   );
// // }

// 'use client';
// import { useState, ChangeEvent, FormEvent } from 'react';

// export default function Home() {
//   const [file, setFile] = useState<File | null>(null);
//   const [error, setError] = useState<string>('');
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [isUploading, setIsUploading] = useState(false);
  
//   // Use environment variable for API URL
//   const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://sahanes-backend-app.hf.space";
  
//   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files?.[0]) return;
    
//     setIsUploading(true);
//     setError('');
    
//     try {
//       const formData = new FormData();
//       formData.append('file', e.target.files[0]);
      
//       const response = await fetch(`${API_URL}/upload`, {
//         method: 'POST',
//         body: formData
//       });
      
//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.detail || 'Upload failed');
//       }
      
//       const data = await response.json();
//       setFile(e.target.files[0]);
//       setError('');
//     } catch (error) {
//       console.error('Upload error:', error);
//       setError(error instanceof Error ? error.message : 'Failed to upload file');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleQuestion = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!question.trim() || !file) return;
    
//     try {
//       const response = await fetch(`${API_URL}/ask`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           text: question.trim(),
//           filename: file.name
//         })
//       });
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || 'Failed to get answer');
//       }
      
//       const data = await response.json();
//       setAnswer(data.answer);
//     } catch (error) {
//       console.error('Question error:', error);
//       setError(error instanceof Error ? error.message : 'Failed to get answer');
//     }
//   };

//   return (
//     <main className="p-4 max-w-2xl mx-auto">
//       <div className="mb-4">
//         <input 
//           type="file" 
//           onChange={handleUpload} 
//           accept=".pdf" 
//           className="w-full p-2 border rounded"
//           disabled={isUploading}
//         />
        
//         {isUploading && (
//           <div className="mt-2 text-blue-600">
//             Uploading file... Please wait...
//           </div>
//         )}
//       </div>

//       {error && (
//         <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
//           {error}
//         </div>
//       )}

//       {file && !error && (
//         <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
//           File uploaded: {file.name}
//         </div>
//       )}
      
//       <form onSubmit={handleQuestion} className="space-y-4">
//         <input 
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask a question about the PDF..."
//           className="w-full p-2 border rounded"
//           disabled={!file || isUploading}
//         />
        
//         <button 
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
//           disabled={!file || !question.trim() || isUploading}
//         >
//           {isUploading ? 'Uploading...' : 'Ask Question'}
//         </button>
//       </form>
      
//       {answer && (
//         <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//           <h2 className="font-semibold mb-2">Answer:</h2>
//           <p className="whitespace-pre-wrap">{answer}</p>
//         </div>
//       )}
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
  const [isUploading, setIsUploading] = useState(false);
  
  // Use environment variable for API URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://sahanes-backend-app.hf.space" || "http://localhost:8000";
  
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    
    setIsUploading(true);
    setError('');
    
    try {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      
      console.log('Uploading to:', `${API_URL}/upload`);
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Upload failed');
      }
      
      await response.json(); // Just consume the response, since we don't need the data
      setFile(e.target.files[0]);
      setError('');
    } catch (error) {
      console.error('Upload error:', error);
      setError(error instanceof Error ? error.message : 'Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };

  const handleQuestion = async (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !file) return;
    
    try {
      const response = await fetch(`${API_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: question.trim(),
          filename: file.name
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to get answer');
      }
      
      const data = await response.json();
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        throw new Error('No answer received from server');
      }
    } catch (error) {
      console.error('Question error:', error);
      setError(error instanceof Error ? error.message : 'Failed to get answer');
    }
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <div className="mb-4">
        <input 
          type="file" 
          onChange={handleUpload} 
          accept=".pdf" 
          className="w-full p-2 border rounded"
          disabled={isUploading}
        />
        
        {isUploading && (
          <div className="mt-2 text-blue-600">
            Uploading file... Please wait...
          </div>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
          {error}
        </div>
      )}

      {file && !error && (
        <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
          File uploaded: {file.name}
        </div>
      )}
      
      <form onSubmit={handleQuestion} className="space-y-4">
        <input 
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the PDF..."
          className="w-full p-2 border rounded"
          disabled={!file || isUploading}
        />
        
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!file || !question.trim() || isUploading}
        >
          {isUploading ? 'Uploading...' : 'Ask Question'}
        </button>
      </form>
      
      {answer && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border">
          <h2 className="font-semibold mb-2">Answer:</h2>
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </main>
  );
}
