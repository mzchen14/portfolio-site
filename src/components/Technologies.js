import React from "react"
import TechList from "./TechList"
import "./Technologies.css"
export default () => (
    <div>
        <h1 className="heading">Technologies</h1>
        <div className="container">
        <TechList header="Languages" items={["JavaScript", "HTML", "CSS", "SQL", "Python", "TypeScript", ]}/>
        <TechList header="Frameworks/Libraries" items={["React.js", "Redux","Node.js", "Express", "socket.io", "Fabric.js", "Gatsby"]} />
        <TechList header="Databases" items={["Postgres", "MongoDB"]} />
        <TechList header="DevOps/Tools" items={["Git", "GitHub", "Heroku", "Netlify", "Chrome DevTools"]} />
        <TechList header="Software" items={["Adobe Photoshop", "Adobe InDesign" ]} />
        </div>
    </div>
)