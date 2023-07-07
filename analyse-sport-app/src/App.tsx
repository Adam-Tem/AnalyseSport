
import FileUpload from "./components/FileUpload";
import Stats from "./components/Stats";
import React, {useState, } from 'react'
import "./Styles.css";

function App(){

  const [avgHR, setAvgHR] = useState(10);
  const [medianHR, setMedianHR] = useState(10);
  const [distance, setDistance] = useState(10);
  const [elapsedTime, setElapsedTime] = useState(10);
  
  return <div id="app_container">
    <h1 id="page_title">Heart Rate Analysis!</h1>
    <Stats avgHR = {avgHR} medianHR = {medianHR} distance = {distance} elapsedTime = {elapsedTime}/>
   <FileUpload  setAvgHR = {setAvgHR} setMedianHR = {setMedianHR} setDistance = {setDistance} setElapsedTime = {setElapsedTime}/>

  </div>
}

export default App;