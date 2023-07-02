from fastapi import FastAPI, UploadFile, File
from Logic.avgHR import avgHR
from Logic.medianHR import medianHR
from Logic.distance import distance
from Logic.elapsedTime import elapsedTime
from Logic.openFitFile import openFile

server = FastAPI()

@server.get('/')
async def root():
    return {"Message": "Hello World"}


@server.post('/upload/')
async def upload_file(uploadedFile: UploadFile = File(...)):

    numpyData = openFile( await uploadedFile.read())
    average_hr = avgHR(numpyData)
    median_hr = medianHR(numpyData)
    elapsed_time = elapsedTime(numpyData)
    file_distance = distance(numpyData)

    return {"average_hr": average_hr, "median_hr": median_hr, 
            "elapsed_time": elapsed_time, "distance": file_distance}



