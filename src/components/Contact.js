import React from "react"
import "./Contact.css"

export default () => (
    <div id="form">
        <h1>Get in touch with me!</h1>
        <p>Want to chat or get in touch? Email me at <a className="email" href="mailto:mzchen14@gmail.com">mzchen14@gmail.com</a> or leave a message below!</p>
        <form 
        className="form-box"
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="input">
                <input name="name" placeholder="NAME" type="text"/>
            </div>
            <div className="input">
                <input name="email" placeholder="YOUR E-MAIL" type="text"/>
            </div>
            <div className="input">
                <textarea name="message" placeholder="MESSAGE"/>
            </div>
            
            <div className="input">
                <input id="submit" type="submit" value="Send"/>
            </div>
        </form>
    </div>
)