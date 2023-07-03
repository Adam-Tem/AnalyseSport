import axios from "axios";
import React, {useState,  ChangeEvent, FormEvent } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files){
      setSelectedFile(event.target.files[0]);
        }
    };
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedFile) {
          return;
        }
    
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log(selectedFile);
        console.log(formData);
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/upload/', formData);
          console.log(response.data); // Handle the response from the backend
        } catch (error) {
          console.error(error);
        }
      };

      return(
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange}/>
      <button type="submit">Upload</button>
    </form>
    )
}

export default FileUpload;