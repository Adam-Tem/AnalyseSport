import "../Styles.css";

interface StatsProps {
    avgHR: Number;
    medianHR: Number;
    distance: Number;
    elapsedTime: Number;
  }

function Stats({avgHR, medianHR, distance, elapsedTime} : StatsProps){
    
    return (<div id="stats_container">
        <div id="stat_box"><h2>Average HR: {avgHR.valueOf()}</h2></div>
        <div id="stat_box"><h2>Median HR: {medianHR.valueOf()}</h2></div>
        <div id="stat_box"><h2>Distance: {distance.valueOf()}</h2></div>
        <div id="stat_box"><h2>Elapsed Time: {elapsedTime.valueOf()}</h2></div>
    </div>);
}
export default Stats;