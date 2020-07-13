import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./About.css"

const About = () => {
    const data = useStaticQuery(graphql `
    query photos {
        image: file(relativePath: {eq: "Ming.JPG" }) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return (
    <div id="about" className="about-section">
         <div className="profile-image">
            <h1 className="about-me">About Me</h1>
            <Img
            className="photo"
            fluid={data.image.childImageSharp.fluid}
            alt="Profile Image"
            />
        </div>
        <div className="text">
            <h3>My journey...</h3>
            <p>
            Hi I'm Ming, a software engineer based in New York City. 
            After graduating from SUNY Stony Brook with a bachelor's degree in English Literature, 
            I became a lead teacher at an elementary school and worked as a freelance digital illustrator. </p>
            <p>Wanting to combine my love for creativity and problem solving, 
                I dove into software development and realized my passion for programming. 
                I attended the Grace Hopper program at Fullstack Academy to turn my passion into my profession.</p>
            <p>Now as a developer, I hope to use my skills to contribute to applications that benefit the lives of others. </p>
            <h3>When I'm not coding...</h3>
            <p>
            In my free time, I enjoy digital painting, listening to true crime podcasts, playing video games, reading novels, and trying new foods.
            </p>
        </div>
    </div>)
}

export default About