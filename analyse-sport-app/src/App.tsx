
import AvgHR from "./components/AvgHR";
import FileUpload from "./components/AvgHR"
import React, {useState, useEffect} from 'react'


function App(){

  
const [currentFile, setCurrentFile] = useState("")
const inputFile = useState("");
  return <div>
   
    <AvgHR />

  </div>
}

export default App;