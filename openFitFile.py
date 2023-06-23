from fitparse import FitFile
import numpy as np
import datetime as dt

def openFile(fileLocation):
    openedFile = FitFile(fileLocation)
    hrData = []
    timeData = []
    distanceData = []
    overallData = []

    for record in openedFile.get_messages():
        dataVals = []
        count = 0
        for field in record:
            if field.name == 'heart_rate':
                hrData.append(field.value)
                dataVals.append(field.value)
                count += 1
            elif field.name == 'timestamp':
                if type(field.value) == dt.datetime:
                    timeData.append(field.value)
                    dataVals.append(field.value)
                if count == 0:
                    print(record)
            elif field.name == 'distance':
                distanceData.append(field.value)
                dataVals.append(field.value)
        if len(dataVals) == 1:
            dataVals.append([False, False])
            overallData.append(dataVals)
        # elif len(dataVals) == 3:
            #overallData.append(dataVals)
    print(len(hrData))
    print(len(distanceData))
    print(len(timeData))
    print(overallData)

    openedFile.close()

openFile("TestFiles/test1.fit")