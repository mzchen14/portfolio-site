import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import './About.css'

const About = () => {
    const data = useStaticQuery(graphql `
    query photos {
        image: file(relativePath: {eq: "Ming.JPG" }) {
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
    return (
    <div className='about-section'>
         <div className="profile-image">
            <h1 className="about-me">About Me</h1>
            <Img
            className="photo"
            fluid={data.image.childImageSharp.fluid}
            alt="Profile Image"
            />
        </div>
        <div id="about" className='text'>
            <h3>My journey...</h3>
            <p>
            Hello! I am a software engineer based in New York City. I graduated from SUNY Stony Brook with a bachelors in English Literature.
            Just a year ago, I was working as an elementary school teacher as well as a freelance digital illustrator. </p>
            <p>Wanting to combine my love for creativity and problem solving, 
            I began to explore and grow my passion for software development and ended up attending the Grace Hopper program at Fullstack Academy. </p> 
            <p>To this day, I believe it was one of the best decisions I've made. I was able to challenge myself in ways I never imagined and came out even more immersed in programming.</p>
            <p>Now as a developer, I hope to use my skills to contribute to applications that benefit the lives of others. :)</p>
            <h3>When I'm not coding...</h3>
            <p>
            In my free time, I enjoy traveling, digital painting, listening to true crime podcasts, playing video games, reading novels, and trying new foods!
            </p>
        </div>
    </div>)
}

export default About