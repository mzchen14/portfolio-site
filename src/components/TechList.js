import React from "react"
import "./TechList.css"
const TechList = (props) => (
    
    <div id="tech" className="list">
     
            <h3>{props.header}</h3>
            <div className="items">{props.items.map(item => {
            return(
                <li>{item}</li>
            )
        })}
        </div>
    </div>
)

export default TechList