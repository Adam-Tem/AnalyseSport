import { SetStateAction, useState } from "react";
import FileUpload from "./FileUpload";

function AvgHR(){
   
    function updateHR(data : SetStateAction<number>){
        setAvgHR(data);

    }

    const [avgHR, setAvgHR] = useState(10);

    return (<div>{avgHR}
                <FileUpload updateHR = {updateHR}/>
    </div>);
}
export default AvgHR;