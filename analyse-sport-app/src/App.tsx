import AvgHR from "./components/AvgHR"
import MedainHR from "./components/MedianHR"
import FileUpload from "./components/FileUpload"
import React, {useState, useEffect} from 'react'


function App(){

  
const [currentFile, setCurrentFile] = useState("")
const inputFile = useState("");
  return <div>
    <AvgHR /> 
    <MedainHR />
    <FileUpload />

  </div>
}

export default App;