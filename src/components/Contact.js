import React from 'react'
import "./Contact.css"

export default () => (
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Your Name" type="text"/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Your Email" type="email"/>
                <label htmlFor="message">Message</label>
                <textarea name="message"/>
            <button type="submit">Send</button>
        </form>
)