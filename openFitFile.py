from fitparse import FitFile
import numpy as np
import datetime as dt
import math

def openFile(fileLocation):
    openedFile = FitFile(fileLocation)
    overallData = []
    count = 0
    for record in openedFile.get_messages():
        dataVals = []
        if count < 10:
            print(record.header)
            print(record.mesg_type)

        count += 1
        for field in record:
            if field.name == 'heart_rate':
                dataVals.append(field.value)

            elif field.name == 'timestamp':
                if type(field.value) == dt.datetime:
                    dataVals.append(field.value)

            elif field.name == 'distance':
                dataVals.append(field.value)

        if len(dataVals) == 3:
            overallData.append(dataVals)

    numpyData = np.array(overallData)
    openedFile.close()

    return numpyData

openFile("TestFiles/test1.fit")