import React from 'react'
import "./style/navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        
        <div className="Nav-start">
        <div style={{    display: "flex", width: "100%",height: "50%" ,marginTop: "100%"}}>
        <ul style={{listStyle: "none",display: "inline-grid",paddingLeft:"60%"}}>
            <li><NavLink to="/"><i style={{color:"white"}} className="fa fa-home" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to="/home"><i style={{color:"white"}} className="fa fa-home" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to="/about"><i style={{color:"white"}} className="fa fa-home" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to="/login"><i style={{color:"white"}} className="fa fa-file" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to="/logout"><i style={{color:"white"}} className="fa fa-print" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to="/profile"><i style={{color:"white"}} className="fa fa-print" aria-hidden="true"></i></NavLink></li>
        </ul> 
        </div>
        </div>
         
        </>
    )
}

export default Navbar
