import numpy as np

def avgHR(numpyData):
    return int(round(np.mean(numpyData[:,1]), 0))

