from avgHR import avgHR
from medianHR import medianHR
from openFitFile import openFile
from distance import distance
from elapsedTime import elapsedTime

numpyData = openFile("TestFiles/test2.fit")
avg = avgHR(numpyData)
median = medianHR(numpyData)
distanceVal = distance(numpyData)
elapsedTimeVal = elapsedTime(numpyData)

print(avg, median, distanceVal, elapsedTimeVal)