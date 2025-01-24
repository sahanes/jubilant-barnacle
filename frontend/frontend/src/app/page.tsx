const API_URL = "https://huggingface.co/spaces/sahanes/backend-app";

const handleUpload = async (e) => {
  try {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData
    });
    console.log(await response.json());
  } catch (error) {
    console.error(error);
  }
};
