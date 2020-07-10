import React from "react"
import SingleProject from "./SingleProject"
import "./Projects.css"
import hive from '../images/hive.png'
import abiliteas from '../images/abiliteas.gif'

const Projects = () => {
    return(
        <div id="projects" className="projects">
            <h1>Projects</h1>
        
            <div className="projectContainer">
                <SingleProject imgSrc={hive}
                alt="Hive" 
                header="Hive" 
                summary="A collaborative whiteboarding platform. Created using: Typescript, React, Fabric.js, Socket.io and more." 
                link="http://hivebymlln.herokuapp.com/"
                gitHub="https://github.com/themlln/hive"
                />
                <SingleProject imgSrc={abiliteas} 
                alt="Abiliteas" 
                header="Abiliteas" 
                summary="A fictitious e-commerce website selling magical teas with superpowers. Created using: JS, React, Node.js, Express.js and more." 
                link="http://graceshopperlamchops.herokuapp.com/"
                gitHub="https://github.com/team-lambchops/abiliteas"
                />
            </div>
        </div>
    )
}

export default Projects