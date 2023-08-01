import numpy as np
import datetime as dt

def elapsedTime(numpyData):
    start = numpyData[0,2]
    end = numpyData[-1,2]
    totalSeconds = (end - start).seconds
    time_divisions = [0,0,0]
    while totalSeconds > 3600:
        time_divisions[0] += 1
        totalSeconds = totalSeconds - 3600
    while totalSeconds > 60:
        time_divisions[1] += 1
        totalSeconds = totalSeconds - 60
    time_divisions[2] += totalSeconds

    for i in range(len(time_divisions)):
        if time_divisions[i] < 10:
            time_divisions[i] = "0" + str(time_divisions[i])
    return "\n" + str(time_divisions[0]) + ":" + str(time_divisions[1]) + ":" + str(time_divisions[2])