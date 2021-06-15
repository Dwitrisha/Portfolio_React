import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./css/Main.css"
import Email from './images/Email.png'
import Photo  from './images/Photo.jpeg'
import Resume from './resume/Resume.pdf'
import Nav from './Nav'
import Projects from "./Projects"
import Skills from './Skills'

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
function Main() {
    return (
        <div>
        <div className="background">
            
          <a href={Resume} target="_blank"> <button id="resume">Resume</button></a>
          <center>
          <img id="dpphone" src={Photo}></img>
          </center>
          <div className="grid" > 
         <div>
             <h2 className="line-1 anim-typewriter" style={{color:'white'}}>Hello World!</h2> 
         
                
             <p className="para">
         My name is Dwitrisha and this is my <br/> trove of Tech and more.
         I am currently pursuing my B.tech in 
         Information Technology from Manipal Institute of Technology. 
      Hope you find this <br/>small collection worthy of your time! </p>
         <img id="email" src={Email}></img>
         
  <div className="buttongrid">
   <a href="https://github.com/Dwitrisha" target="_blank">
       <button id="click"><GitHubIcon className="icons" style={{ fontSize: 16}}/>GitHub</button> </a>
   <a href="https://www.linkedin.com/in/dwitrisha/" target="_blank">
   <button id="click"><LinkedInIcon  className="icons" style={{ fontSize: 17 }}/>LinkedIn</button>
   </a>
   </div>
        
         </div> 
       <div>
       
   <img id="dp" src="https://media-exp1.licdn.com/dms/image/C4E03AQFWrKOn3PSXQg/profile-displayphoto-shrink_400_400/0/1613409307512?e=1629331200&v=beta&t=XHn4ufbeAi1lBr6TdbEPU-A4L2LH7bTXfAsgio-fsQs"></img>
  
   </div> 
   
   <div >

       
   </div>
   </div>

   <Nav/>
  
    </div>
    <div id="projects">
    <Projects/>
    </div>
<div id="skills">
    <Skills/>
    </div>
     </div>

    )
}

export default Main
