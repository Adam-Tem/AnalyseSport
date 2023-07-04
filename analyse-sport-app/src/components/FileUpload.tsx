import axios from "axios";
import React, {SetStateAction, useState,  ChangeEvent, FormEvent } from 'react';

interface MyComponentProps {
  updateHR: (data: SetStateAction<number>) => void;
}

const FileUpload : React.FC<MyComponentProps>= ({updateHR}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [processedData, setProcessedData] = useState<JSON>();
  
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
          setProcessedData(response.data);
          updateHR(response.data["average_hr"]);
        } catch (error) {
          console.error(error);
        }
      };

      return(
    <div><form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange}/>
      <button type="submit">Upload</button>
    </form>
     </div>
    );


}

export default FileUpload;