import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a className="footer-links" aria-label="LinkedIn" href="https://www.linkedin.com/in/mingzchen/"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a className="footer-links" aria-label="gitHub" href="https://github.com/mzchen14"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
            <div className="copyright">© Ming Chen 2020</div>
        </div>
    )
}

export default Footer;
