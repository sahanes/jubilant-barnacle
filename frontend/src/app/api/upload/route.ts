import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Extract the form data from the incoming request
    const formData = await request.formData();

    // Forward the request to your Hugging Face backend
    const response = await fetch(`${process.env.API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    // Handle the response from the backend
    const data = await response.json();

    // Return the response to the client
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}