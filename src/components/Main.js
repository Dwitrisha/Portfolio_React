import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./css/Main.css"
import Email from './images/Email.png'
import Resume from './resume/Resume.pdf'
import Nav from './Nav'
import Projects from "./Projects"

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
function Main() {
    return (
        <div>
        <div className="background">
          <a href={Resume} target="_blank"> <button id="resume">Resume</button></a>
      <div className="grid" > 
         <div>
             <h2 className="line-1 anim-typewriter" style={{color:'white'}}>Hello World!</h2> 
         
                
             <p className="para">
         My name is Dwitrisha and this is my <br/> trove of Tech and Art.
         I am currently<br/> pursuing my B.tech in 
         Information Technology from Manipal Institute of Technology. 
      Hope you find this <br/>small collection worthy of your time! </p>
         <img id="email" src={Email}></img>
         
  <div className="buttongrid">
   <a href="https://github.com/Dwitrisha" target="_blank">
       <button id="click"><GitHubIcon className="icons" style={{ fontSize: 16 }}/>GitHub</button> </a>
   <a href="https://www.linkedin.com/in/dwitrisha/" target="_blank">
   <button id="click"><LinkedInIcon  className="icons" style={{ fontSize: 16 }}/>LinkedIn</button>
   </a>
   </div>
        
         </div> 
       <div>
       
   <img id="dp" src="https://media-exp1.licdn.com/dms/image/C4E03AQFWrKOn3PSXQg/profile-displayphoto-shrink_400_400/0/1613409307512?e=1623283200&v=beta&t=r329JkKzd_HSpVX3UrmsUB5dDyHsYv0bdSoUjE5TOpU"></img>
  
   </div> 
   
   <div >

       
   </div>
   </div>

   <Nav/>
  
    </div>
    <div id="projects">
    <Projects/>
    </div>
     </div>

    )
}

export default Main
