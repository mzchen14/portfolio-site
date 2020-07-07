import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
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
    console.log(data)

    return(
        <div id="#top" className="landing">
            <Img
            fluid={data.image.childImageSharp.fluid} 
            alt="Single Sunflower"
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            }}
            />
            <div className="overlay" />
            <div className="center">
                <h1 className="name">Ming Chen</h1>
                <h2 id="sub">I am a Software Engineer.</h2>
            </div>
        </div>
    )
}

export default Landing