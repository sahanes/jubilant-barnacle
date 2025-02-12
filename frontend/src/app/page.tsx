'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null); // Use a ref for the file input

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log('API URL:', API_URL); // Debugging API URL

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setIsUploading(true);
    setError('');
    console.log('Starting upload to:', `${API_URL}/upload`);

    try {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);

      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error data:', errorData);
        throw new Error(errorData.detail || 'Upload failed');
      }

      const data = await response.json();
      console.log('Success data:', data);

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
          filename: file.name,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to get answer');
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Question error:', error);
      setError(error instanceof Error ? error.message : 'Failed to get answer');
    }
  };
  
return (
  <main className="container">
    {/* Uploading Message */}
    {isUploading && (
      <div className="uploading-message">
        Uploading...
      </div>
    )}

    {/* Success Message */}
    {file && !error && !isUploading && (
      <div className="success-message">
        File uploaded: {file.name}
      </div>
    )}

    {/* Error Message */}
    {error && (
      <div className="error-message">
        {error}
      </div>
    )}

    {/* Form Section */}
    <form onSubmit={handleQuestion} className="flex flex-col gap-4">
      {/* File Selection Area */}
      <label htmlFor="file-upload" className="file-label">
        Choose File
      </label>
      <button
        type="button"
        className="file-input"
        onClick={() => fileInputRef.current?.click()} // Use the ref to trigger the file input
        disabled={isUploading}
      >
        Select File
      </button>
      <input
        id="file-upload"
        type="file"
        onChange={handleUpload}
        accept=".pdf"
        style={{ display: 'none' }} // Hide the default file input
      />
      <span className="file-chosen">
        {file ? file.name : "No file chosen"}
      </span>

      {/* Question Input Area */}
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about the PDF..."
        className="query-input"
        disabled={!file || isUploading}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="query-button"
        disabled={!file || !question.trim() || isUploading}
      >
        Ask Question
      </button>
    </form>

    {/* Answer Section */}
    {answer && (
      <div className="mt-6 p-4 bg-gray-50 rounded-md border">
        <h2 className="font-semibold mb-2">Answer:</h2>
        <p className="whitespace-pre-wrap">{answer}</p>
      </div>
    )}
  </main>
);
}
// return (
//   <main className="container">
//     {/* Uploading Message */}
//     {isUploading && (
//       <div className="uploading-message">
//         Uploading...
//       </div>
//     )}

//     {/* Success Message */}
//     {file && !error && !isUploading && (
//       <div className="success-message">
//         File uploaded: {file.name}
//       </div>
//     )}

//     {/* Error Message */}
//     {error && (
//       <div className="error-message">
//         {error}
//       </div>
//     )}

//     {/* Form Section */}
//     <form onSubmit={handleQuestion} className="flex flex-col gap-4">
//       {/* File Selection Area */}
//       <label htmlFor="file-upload" className="file-label">
//         Choose File
//       </label>
//       <input
//         id="file-upload"
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="file-input"
//         disabled={isUploading}
//         value="Select File" 
//       />
//       <span className="file-chosen">
//         {file ? file.name : "No file chosen"}
//       </span>

//       {/* Question Input Area */}
//       <textarea
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="query-input"
//         disabled={!file || isUploading}
//       />

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="query-button"
//         disabled={!file || !question.trim() || isUploading}
//       >
//         Ask Question
//       </button>
//     </form>

//     {/* Answer Section */}
//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// }
// **************************************
// return (
//   <main className="container">
//     {/* Uploading Message */}
//     {isUploading && (
//       <div className="uploading-message">
//         Uploading...
//       </div>
//     )}

//     {/* Success Message */}
//     {file && !error && !isUploading && (
//       <div className="success-message">
//         File uploaded: {file.name}
//       </div>
//     )}

//     {/* Error Message */}
//     {error && (
//       <div className="error-message">
//         {error}
//       </div>
//     )}

//     {/* Form Section */}
//     <form onSubmit={handleQuestion} className="flex flex-col items-center gap-4">
//       <input
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="file-input"
//         disabled={isUploading}
//       />
//       <textarea
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF...\nYou can write up to two lines here."
//         className="query-input"
//         disabled={!file || isUploading}
//       />
//       <button
//         type="submit"
//         className="query-button"
//         disabled={!file || !question.trim() || isUploading}
//       >
//         Ask Question
//       </button>
//     </form>

//     {/* Answer Section */}
//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// }
// *****************************************
//   return (
//     <main className="container p-4 max-w-4xl mx-auto">
//       {/* Error Message */}
//       {error && (
//         <div className="error-message">
//           {error}
//         </div>
//       )}

//       {/* Success Message */}
//       {file && !error && (
//         <div className="success-message">
//           File uploaded: {file.name}
//         </div>
//       )}

//       {/* Form Section */}
//       <form onSubmit={handleQuestion} className="flex flex-col items-center gap-4">
//         <input
//           type="file"
//           onChange={handleUpload}
//           accept=".pdf"
//           className="button-upload w-full p-2 border rounded"
//           disabled={isUploading}
//         />
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
//           className="button-ask"
//           disabled={!file || !question.trim() || isUploading}
//         >
//           {isUploading ? 'Uploading...' : 'Ask Question'}
//         </button>
//       </form>

//       {/* Answer Section */}
//       {answer && (
//         <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//           <h2 className="font-semibold mb-2">Answer:</h2>
//           <p className="whitespace-pre-wrap">{answer}</p>
//         </div>
//       )}
//     </main>
//   );
// }


// *************************************************************
// 'use client';
// import { useState, ChangeEvent, FormEvent } from 'react';

// export default function Home() {
//   const [file, setFile] = useState<File | null>(null);
//   const [error, setError] = useState<string>('');
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [isUploading, setIsUploading] = useState(false);
//  // page.tsx
//   const API_URL = process.env.NEXT_PUBLIC_API_URL;
//   console.log('API URL:', API_URL); // Add this to debug
  
//   // Use HF Space URL directly
//   // const API_URL = "https://sahanes-backend-app.hf.space";
 
  
//   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files?.[0]) return;
    
//     setIsUploading(true);
//     setError('');
//     console.log('Starting upload to:', `${API_URL}/upload`);
    
//     try {
//       const formData = new FormData();
//       formData.append('file', e.target.files[0]);
      
//       const response = await fetch(`${API_URL}/upload`, {
//         method: 'POST',
//         body: formData,
//         // No credentials or special headers needed for HF
//       });
      
//       console.log('Response status:', response.status);
      
//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         console.error('Error data:', errorData);
//         throw new Error(errorData.detail || 'Upload failed');
//       }
   
      
//       const data = await response.json();
//       console.log('Success data:', data);
      
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
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.detail || 'Failed to get answer');
//       }
      
//       const data = await response.json();
//       setAnswer(data.answer);
//     } catch (error) {
//       console.error('Question error:', error);
//       setError(error instanceof Error ? error.message : 'Failed to get answer');
//     }
//   };
// **********************************************************************************
// return (
//   <main className="p-4 max-w-4xl mx-auto">
//     <div className="mb-4 flex items-center gap-4 justify-center">
//       <input
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="flex-1 p-2 border rounded"
//         disabled={isUploading}
//       />
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={isUploading}
//       >
//         Upload PDF
//       </button>
//     </div>

//     {error && (
//       <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
//         {error}
//       </div>
//     )}

//     {file && !error && (
//       <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
//         File uploaded: {file.name}
//       </div>
//     )}

//     <div className="flex flex-col items-center gap-4">
//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="p-2 border rounded w-full"
//         disabled={!file || isUploading}
//       />
//       <button
//         type="submit"
//         className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={!file || !question.trim() || isUploading}
//         onClick={handleQuestion}
//       >
//         Ask Question
//       </button>
//     </div>

//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border text-center">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// }
// return (
//   <main className="p-4 max-w-4xl mx-auto">
//     <div className="mb-4 flex items-center gap-4 justify-center">
//       <input
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="flex-1 p-2 border rounded"
//         disabled={isUploading}
//       />
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={isUploading}
//       >
//         Upload PDF
//       </button>
//     </div>
//     {error && (
//       <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
//         {error}
//       </div>
//     )}
//     {file && !error && (
//       <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
//         File uploaded: {file.name}
//       </div>
//     )}
//     <div className="flex flex-col items-center gap-4">
//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="p-2 border rounded w-full"
//         disabled={!file || isUploading}
//       />
//       <button
//         type="submit"
//         className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={!file || !question.trim() || isUploading}
//         onClick={handleQuestion}
//       >
//         Ask Question
//       </button>
//     </div>
//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border text-center">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
//   }

// **********************************
// return (
//   <main className="container p-4 max-w-4xl mx-auto"> {/* Ensure container is styled for centering */}
//     {file && (
//       <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
//         File uploaded: {file.name}
//       </div>
//     )}

//     <form onSubmit={handleQuestion} className="flex flex-col items-center gap-4">
//       <input 
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="button-upload w-full p-2 border rounded" // Updated class for upload button
//         disabled={isUploading}
//       />
//       <input 
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="w-full p-2 border rounded" // Ensure full width and styling
//         disabled={!file || isUploading}
//       />
      
//       <button 
//         type="submit"
//         className="button-ask" // Updated class for Ask button
//         disabled={!file || !question.trim() || isUploading}
//       >
//         {isUploading ? 'Uploading...' : 'Ask Question'}
//       </button>
//     </form>
    
//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// }
// **********
//   return (
//   <main className="container p-4 max-w-4xl mx-auto">
//     {/* Error Message */}
//     {error && (
//       <div className="error-message">
//         {error}
//       </div>
//     )}

//     {/* Success Message */}
//     {file && !error && (
//       <div className="success-message">
//         File uploaded: {file.name}
//       </div>
//     )}

//     {/* Form Section */}
//     <form onSubmit={handleQuestion} className="flex flex-col items-center gap-4">
//       <input 
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="button-upload w-full p-2 border rounded"
//         disabled={isUploading}
//       />
//       <input 
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="w-full p-2 border rounded"
//         disabled={!file || isUploading}
//       />
      
//       <button 
//         type="submit"
//         className="button-ask"
//         disabled={!file || !question.trim() || isUploading}
//       >
//         {isUploading ? 'Uploading...' : 'Ask Question'}
//       </button>
//     </form>
    
//     {/* Answer Section */}
//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// }
// **********************
// ********
//   return (
//   <main className="p-4 max-w-2xl mx-auto">
//     <div className="mb-4 flex justify-center items-center">
//       <button
//         className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={isUploading}
//       >
//         Upload PDF
//       </button>
//     </div>
//     <div className="mb-4 flex flex-col items-center gap-4">
//       <input
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="w-full p-2 border rounded"
//         disabled={isUploading}
//       />
//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="w-full p-2 border rounded"
//         disabled={!file || isUploading}
//       />
//       <button
//         type="submit"
//         className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={!file || !question.trim() || isUploading}
//         onClick={handleQuestion}
//       >
//         Ask Question
//       </button>
//     </div>
//     {error && (
//       <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
//         {error}
//       </div>
//     )}
//     {file && !error && (
//       <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
//         File uploaded: {file.name}
//       </div>
//     )}
//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border text-center">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// }
// For Top Left Plain Interface
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
// For Top Left Plain Interface
//   return (
//   <main className="p-4 max-w-2xl mx-auto">
//     <div className="mb-4 flex items-center gap-4">
//       <input
//         type="file"
//         onChange={handleUpload}
//         accept=".pdf"
//         className="flex-1 p-2 border rounded"
//         disabled={isUploading}
//       />
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={isUploading}
//       >
//         Upload PDF
//       </button>
//     </div>

//     {error && (
//       <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
//         {error}
//       </div>
//     )}

//     {file && !error && (
//       <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md border border-green-200">
//         File uploaded: {file.name}
//       </div>
//     )}

//     <form onSubmit={handleQuestion} className="flex items-center gap-4">
//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question about the PDF..."
//         className="flex-1 p-2 border rounded"
//         disabled={!file || isUploading}
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
//         disabled={!file || !question.trim() || isUploading}
//       >
//         Ask Question
//       </button>
//     </form>

//     {answer && (
//       <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//         <h2 className="font-semibold mb-2">Answer:</h2>
//         <p className="whitespace-pre-wrap">{answer}</p>
//       </div>
//     )}
//   </main>
// );
// };

// return (
//     <main className="p-4 max-w-2xl mx-auto">
//       <div className="mb-4 flex items-center gap-4">
//         <input
//           type="file"
//           onChange={handleUpload}
//           accept=".pdf"
//           className="flex-1 p-2 border rounded"
//           disabled={isUploading}
//         />
//         <button
//           className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
//           disabled={isUploading}
//         >
//           Upload PDF
//         </button>
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

//       <div className="flex flex-col gap-4">
//         <input
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask a question about the PDF..."
//           className="p-2 border rounded"
//           disabled={!file || isUploading}
//         />
//         <button
//           type="submit"
//           className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
//           disabled={!file || !question.trim() || isUploading}
//           onClick={handleQuestion}
//         >
//           Ask Question
//         </button>
//       </div>

//       {answer && (
//         <div className="mt-6 p-4 bg-gray-50 rounded-md border">
//           <h2 className="font-semibold mb-2">Answer:</h2>
//           <p className="whitespace-pre-wrap">{answer}</p>
//         </div>
//       )}
//     </main>
//   );
// };
/* return (
    <main className="p-4 max-w-2xl mx-auto">
      <div className="mb-4 flex items-center gap-4">
        <input
          type="file"
          onChange={handleUpload}
          accept=".pdf"
          className="flex-1 p-2 border rounded"
          disabled={isUploading}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={isUploading}
        >
          Upload PDF
        </button>
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

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the PDF..."
          className="p-2 border rounded"
          disabled={!file || isUploading}
        />
        <button
          type="submit"
          className="bg-[#800080] text-white py-2 px-4 rounded hover:bg-[#4B0082] disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!file || !question.trim() || isUploading}
          onClick={handleQuestion}
        >
          Ask Question
        </button>
      </div>

      {answer && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border">
          <h2 className="font-semibold mb-2">Answer:</h2>
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </main>
  );
} */


  
  
// 'use client';
// import { useState, ChangeEvent, FormEvent } from 'react';

// export default function Home() {
//   const [file, setFile] = useState<File | null>(null);
//   const [error, setError] = useState<string>('');
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [isUploading, setIsUploading] = useState(false);

//   const API_URL = process.env.NEXT_PUBLIC_API_URL;
//   console.log('API URL:', API_URL);

//   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
//   if (!e.target.files?.[0]) return;

//   setIsUploading(true);
//   setError('');
//   console.log('Starting upload to:', `${API_URL}/upload`);

//   let response: Response | null = null;

//   try {
//     const formData = new FormData();
//     formData.append('file', e.target.files[0]);

//     response = await fetch('/api/upload', {
//       method: 'POST',
//       body: formData,
//     });

//     console.log('Response status:', response.status);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Error response:', errorText);
//       setError(errorText);
//     } else {
//       const data = await response.json();
//       console.log('Response data:', data);
//       setFile(e.target.files[0]);
//       setError('');
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);
//     setError('An error occurred during the upload.');
//   } finally {
//     setIsUploading(false);

//     if (response && !response.ok) {
//       const errorText = await response.text();
//       setError(errorText);
//     }
//   }
// };
// const handleQuestion = async (e: FormEvent) => {
//   e.preventDefault();
//   if (!question.trim() || !file) return;

//   try {
//     const response = await fetch(`${API_URL}/ask`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         text: question.trim(),
//         filename: file.name
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(errorData.detail || 'Failed to get answer');
//     }

//     const data = await response.json();
//     setAnswer(data.answer);
//   } catch (error) {
//     console.error('Question error:', error);
//     setError(error instanceof Error ? error.message : 'Failed to get answer');
//   }
// };

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
