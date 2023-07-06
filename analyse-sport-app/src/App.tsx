
import Stats from "./components/Stats";
import React, {useState, } from 'react'


function App(){

  
const [currentFile, setCurrentFile] = useState("")
const inputFile = useState("");
  return <div>
   
    <Stats />

  </div>
}

export default App;