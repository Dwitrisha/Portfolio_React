import React from 'react'
import "./css/SkillList.css"
function SkillList(props) {
    return (
        <div>

          <p id="box"> <img id="icon" src={props.icon}/> <h3 id="iconname">{props.name}</h3></p>    
        </div>
    )
}

export default SkillList
