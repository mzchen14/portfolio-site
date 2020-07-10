import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Scrollchor from 'react-scrollchor';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import "./Landing.css"


const Landing = () => {
    const data = useStaticQuery(graphql `
    query Images {
        image: file(relativePath: {eq: "ocean.jpg" }) {
            id
            childImageSharp {
                fixed(
                    width: 400
                ) {
                    ...GatsbyImageSharpFixed
                }
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `) 

    return(
        <div id="#top" className="landing">
            <Img
            fluid={data.image.childImageSharp.fluid} 
            alt="Ocean"
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            }}
            />
            <div className="center">
                <h1 className="name">Ming Chen</h1>
                <h2 id="sub">I am a Software Engineer.</h2>
            </div>
            <div className="external-links">
                    <Tippy className="tippy" content="LinkedIn" placement="bottom"><a className="link-icons" href="https://www.linkedin.com/in/mingzchen/"><FontAwesomeIcon icon={faLinkedin}/></a></Tippy>
                    <Tippy className="tippy" content="GitHub" placement="bottom" ><a className="link-icons" href="https://github.com/mzchen14"><FontAwesomeIcon icon={faGithub}/></a></Tippy>
                    <Tippy className="tippy" content="Resume" placement="bottom" ><a className="link-icons" href="https://mzchen14.github.io/resume/"><FontAwesomeIcon icon={faFileAlt}/></a></Tippy>
                    <Tippy className="tippy" content="Contact Me" placement="bottom"><a className="link-icons" href="mailto:mzchen14@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></Tippy>
                    
         
            </div>
            <Scrollchor to="#about"><div className="icon">
                <div class="chevron"></div> 
                <div class="chevron"></div> 
                <div class="chevron"></div>
            </div></Scrollchor>
           
            
        </div>
    )
}

export default Landing