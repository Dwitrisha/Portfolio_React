import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./css/Projects.css"
import Frenznity from "./assets/Frenznity.png"
import PV from "./assets/PV.png"
import Container from './Container'
import Container2 from './Container2'
function Projects() {
    return (
        <div>
            <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">

<h1 id="title">Projects</h1>

<div className="containerbox">
<Container2 p_name="Petavista Aquaculture" img={PV} hosting="https://petavistaaquaculture.in/" description="A webapp to visualize sensor data. It aids fishermen to understand optimum conditions for fish farming."/>
    <Container p_name="Frenznity" img={Frenznity} g_link="https://github.com/Dwitrisha/Frenznity" hosting="https://slack-clone-ds.web.app/" description="A communication platform with the following functionalities: creating channels. posting messages  etc."/>
    <Container p_name="3"/>
    </div>
</div>

    </div>
 
    )
}

export default Projects
