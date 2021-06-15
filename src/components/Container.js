import { GitHub } from '@material-ui/icons'
import LanguageIcon from '@material-ui/icons/Language';
import React from 'react'
import "./css/Container.css"
import GitHubIcon from '@material-ui/icons/GitHub';

function Container(props) {
    return (
        <div>
            
            
  <div class="container">
<h1 id="p_name">{props.p_name}</h1>
<img id="img" src={props.img}/>
<div className="projecticons">
<a href={props.g_link} target="_blank">
<GitHubIcon style={{ fontSize: 30 }}/>
</a>
<a href={props.hosting} target="_blank">
<LanguageIcon style={{ fontSize: 30 }}/>
</a>

<h3 id="description">{props.description}</h3>
</div>
       </div>

        </div>
    )
}

export default Container
