import React from 'react'
import "./style/dashboard.css"
import CircularProgressbar from 'react-circular-progressbar';
import Progress from 'react-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    const mydate = new Date()
    const n = mydate.getDay()
    const p = mydate.getDate()
    const m = mydate.getMonth()
    const y = mydate.getFullYear()
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const weekmonth = new Array(11);
    weekmonth[0] = "january"
    weekmonth[1] = "february"
    weekmonth[2] = "March"
    weekmonth[3] = "April"
    weekmonth[4] = "May"
    weekmonth[5] = "June"
    weekmonth[6] = "July"
    weekmonth[7] = "August"
    weekmonth[8] = "september"
    weekmonth[9] = "October"
    weekmonth[9] = "November"
    weekmonth[9] = "December"
    const percentage = +70
    return (
        <>
            <div className="D-dashboard">
                <div className="D-dashboar">
                    <h2>Dashboard</h2>
                    <p style={{ display: "flex", color: "white", position: "relative", bottom: "28%" }}>{weekday[n]}, <span style={{ color: "#00b8ffd6" }}>  {p} {weekmonth[m]} {y}</span></p>
                </div>
                <div className="D-dasboa">
                    <div style={{ display: "flex", width: "28%", justifyContent: "center", border: "outset", borderRadius: "0.6rem", borderColor: "slategrey" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "1%", color: "white" }}>
                            <h7 style={{ display: "flex", marginTop: "10%", fontWeight: "500" }} >Total Applications</h7>
                            <h2 style={{ display: "flex", position: "relative", bottom: "5%" }}>7956</h2>
                        </div>
                        <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
                    </div>
                    <div className="D-dashbo" style={{ display: "flex", width: "28%", justifyContent: "center", border: "outset", borderRadius: "0.6rem", backgroundColor: "#009ff2", borderColor: "slategrey", fontSize: "small" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "1%", color: "white" }}>
                            <h7 style={{ display: "flex", marginTop: "10%", fontWeight: "500" }} >Shortlisted Candidates</h7>
                            <h2 style={{ display: "flex", position: "relative", bottom: "5%" }}>4658</h2>
                        </div>
                        <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
                    </div>
                    <div className="D-dashboe" style={{ display: "flex", width: "28%", justifyContent: "center", border: "outset", borderRadius: "0.6rem", borderColor: "slategrey" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "1%", color: "white" }}>
                            <h7 style={{ display: "flex", marginTop: "10%", fontWeight: "500" }} >Total Applications</h7>
                            <h2 style={{ display: "flex", position: "relative", bottom: "5%" }}>1501</h2>
                        </div>
                        <CircularProgressbar percentage={percentage} text={`${percentage}%`} />

                    </div>
                </div>
                <div className="D-dash">
                <h6 style={{color: "white",fontSize: "smaller" ,position:"relative",top:"8%"}}>Total Applications</h6>
                <ul>
                <li style={{color:"white",position:"relative",paddingBottom:"3%" ,width:"40%"}}>Applications   </li>
                <li style={{color:"white" ,position:"relative",paddingBottom:"3%",top:"4%" ,width:"40%"}}>Shortlisted </li>
                <li style={{color:"white" ,position:"relative",paddingBottom:"3%" ,top:"7%" ,width:"40%"}}>Rejected </li>
                <li style={{color:"white",position:"relative" ,paddingBottom:"3%" ,top:"10%" ,width:"40%"}}>Onhold </li>
                <li style={{color:"white" ,position:"relative",paddingBottom:"3%",top:"12%" ,width:"40%"}}>Applications </li>
                <Progress style={{color:"red"}}  completed={55}/>
                <Progress completed={35}/>
                <Progress completed={85}/>
                <Progress completed={25}/>
                <Progress completed={55}/>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard
