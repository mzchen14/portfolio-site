import React, {useState} from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Scrollchor from 'react-scrollchor';
import './Navigation.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Nav
  } from "reactstrap";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const data = useStaticQuery(graphql `
    query logo {
        image: file(relativePath: {eq: "Logo.png" }) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    const logo = data.image.childImageSharp.fluid
    return (
        <div>
            <Navbar className="background-color" light expand="md" fixed={"top"}>
            <NavbarBrand>
                <Scrollchor to="#top" className="nav-item">
                   <Img
                   className="logo"
                   fluid={logo}
                   alt="logo"
                   ></Img>
                </Scrollchor>
            </NavbarBrand>

            <NavbarToggler onClick={toggle}></NavbarToggler>

            <Collapse isOpen={!isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem onClick={toggle}>
                        <Scrollchor to="#about" animate={{offset: -150}} id="test" className="nav-item">About Me</Scrollchor>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <Scrollchor to="#tech" animate={{offset: -170}} className="nav-item">Technologies</Scrollchor>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <Scrollchor to="#form" className="nav-item">Contact Me</Scrollchor>
                    </NavItem>
                    <NavItem>
                        <a className="nav-item" href="https://mzchen14.github.io/resume/" aria-label="resume">Resume</a>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
      );
}

export default Navigation