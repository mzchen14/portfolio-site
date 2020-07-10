import React from "react"
import "./singleProject.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const singleProject = (props) => (
    <div>
        <figure class="single-project">
            <img id="project-img" src={props.imgSrc} alt={props.alt} />
            <figcaption>
                <h3>{props.header}</h3>
                <p>{props.summary}</p>
                <div className="links">
                <a href={props.link} aria-label="external-link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a href={props.gitHub} aria-label="gitHub-link"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                
            </figcaption>
            
        </figure>
    </div>
)

export default singleProject