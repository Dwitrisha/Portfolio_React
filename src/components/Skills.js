import React from 'react'
import "./css/Skills.css"
import SkillList from './SkillList'
function Skills() {
    return (
        <div>

            <div id="iconcontainer">
              <br/>
            <h1>Skills</h1>
            <div id="grid">

       <SkillList name="React" icon="https://kunal-kushwaha.github.io/icons/react.png"/>
       <SkillList name="JavaScript" icon="https://kunal-kushwaha.github.io/icons/js.png"/>
       <SkillList  name="Node" icon="https://kunal-kushwaha.github.io/icons/node.png"/>
       <SkillList name="Azure" icon="https://abouttmc.com/wp-content/uploads/2019/02/logo_azure.png"/>
       <SkillList name="Java" icon="https://kunal-kushwaha.github.io/icons/java.png"/>
       <SkillList name="Express" icon="https://camo.githubusercontent.com/438522ac26bb05c47b5a243f914d2dab7c49265b6ee09bbc7df43004f96754f6/68747470733a2f2f6432656970397366336f6f3663322e636c6f756466726f6e742e6e65742f746167732f696d616765732f3030302f3030302f3335392f66756c6c2f657870726573736a736c6f676f2e706e67"/>
       <SkillList name="Python" icon="https://kunal-kushwaha.github.io/icons/python.png"/>
       <SkillList name="C++" icon="https://kunal-kushwaha.github.io/icons/cpp.png"/>
       <SkillList name="php" icon="https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png"/>
       <SkillList name="SQL" icon="https://th.bing.com/th/id/R1a350423b8ca9640930797207d6d457a?rik=nUThPA%2fBEOkO2A&riu=http%3a%2f%2fwww.faceofit.com%2fwp-content%2fuploads%2f2016%2f04%2flogoAzureSql.png&ehk=DzShEI6qQ1BxDE4IBA0ZGoztIQxeeyK5ksOnJKzuh%2bI%3d&risl=&pid=ImgRaw"/>

       </div>
       </div>
        </div>
    )
}

export default Skills
