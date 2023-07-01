import numpy as np
import datetime as dt

def elapsedTime(numpyData):
    start = numpyData[0,2]
    end = numpyData[-1,2]
    return end - start