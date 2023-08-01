import axios from "axios";
import React, {SetStateAction, useState,  ChangeEvent, FormEvent } from 'react';
import "../Styles.css";
import Modal from 'react-modal';


interface StatsProps {
  setAvgHR: React.Dispatch<SetStateAction<number>>;
  setMedianHR: React.Dispatch<SetStateAction<number>>;
  setElapsedTime:  React.Dispatch<SetStateAction<string>>;
  setDistance: React.Dispatch<SetStateAction<string>>;
}

const FileUpload  = ({setAvgHR, setMedianHR, setElapsedTime, setDistance} : StatsProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files){
      setSelectedFile(event.target.files[0]);
        }
    };
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedFile) {
          setModalIsOpen(true);
          return;
        }
        
        if (!selectedFile.name.endsWith(".fit")){
          setModalIsOpen(true);
          setSelectedFile(null);
          return;
        }else{
    
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log(selectedFile);
        console.log(formData);
        
        try {
          const response = await axios.post('http://127.0.0.1:8000/upload/', formData);
          console.log(response.data); // Handle the response from the backend
          setAvgHR(response.data["average_hr"]);
          setMedianHR(response.data["median_hr"]);
          setElapsedTime(response.data["elapsed_time"]);
          setDistance(response.data["distance"]);
        } catch (error) {
          console.error(error);
        }
      }
    }

      return(
    <div id="file_upload"><form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange}/>
      <button type="submit">Upload</button>
    </form>
    <Modal id="ErrorPopUp" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Whoops!</h2>
        <p>Please select an appropriate .fit file to upload.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
     </div>
    );


}

export default FileUpload;