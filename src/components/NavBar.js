import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Scrollchor from 'react-scrollchor';
import "./NavBar.css"
const NavBar = () => {
    const data = useStaticQuery(graphql `
    query logo {
        image: file(relativePath: {eq: "Logo.png" }) {
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

    const logo = data.image.childImageSharp.fluid
    return (
        <div className="nav-bar">
            <nav>
               <Scrollchor to="#top" className="nav-item">
                   <Img
                   className="logo"
                   fluid={logo}
                   alt="logo"
                   ></Img></Scrollchor>
               <Scrollchor to="#about" className="nav-item"><a>About Me</a></Scrollchor>
               <Scrollchor to="#tech" className="nav-item"><a>Technologies</a></Scrollchor>
               <Scrollchor to="#projects" className="nav-item"><a>Projects</a></Scrollchor>
               <Scrollchor to="#contact" className="nav-item"><a>Contact Me</a></Scrollchor>
               <a className="nav-item" href="https://mzchen14.github.io/resume/" aria-label="resume" >Resume</a>
            </nav>
        </div>
    )

}

export default NavBar