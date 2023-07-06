import { SetStateAction, useState } from "react";
import FileUpload from "./FileUpload";

function Stats(){
   
    function updateHR(data : SetStateAction<number>){
        setAvgHR(data);
    }

    const [avgHR, setAvgHR] = useState(10);
    const [medianHR, setMedianHR] = useState(10);
    const [distance, setDistance] = useState(10);
    const [elapsedTime, setElapsedTime] = useState(10);

    return (<div>Avg HR: {avgHR} <br />
                Median HR: {medianHR} <br />
                Distance: {distance} <br />
                Elapsed Time: {elapsedTime} <br />
                <FileUpload setAvgHR = {setAvgHR} setMedianHR = {setMedianHR} setDistance = {setDistance} setElapsedTime = {setElapsedTime}/>
    </div>);
}
export default Stats;