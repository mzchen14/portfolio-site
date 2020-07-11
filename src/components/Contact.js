import React from 'react'
import "./Contact.css"

export default () => (
    <div id="contact-form">
        <form className="form" name="contact" data-netlify="true" data-netlify-honeyput="bot-field">
            <div className="input">
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Your Name" type="text"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Your Email" type="email"/>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message"/>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
)