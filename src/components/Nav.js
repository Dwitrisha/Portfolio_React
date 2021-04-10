import React from 'react'
import "./css/Nav.css"
import { Router, Route, Link } from "react-router-dom";
import Projects from "./Projects"
function Nav() {
    return (
        <div className="topnav">
             <nav>
      <ul>
    
 
      <a href="#projects">PROJECTS</a>
        <a href="#about">ART</a>
      
      </ul>
    </nav>
        </div>
    )
}

export default Nav
