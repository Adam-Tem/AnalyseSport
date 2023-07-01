from fastapi import FastAPI, UploadFile, File
from Logic.avgHR import avgHR
from Logic.openFitFile import openFile

server = FastAPI()

@server.get('/')
async def root():
    return {"Message": "Hello World"}


@server.post('/upload/')
async def upload_file(file: UploadFile = File(...)):

    numpyData = openFile( await file.read())
    average_hr = avgHR(numpyData)
    return {"average_hr": average_hr}



