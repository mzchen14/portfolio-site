import React from 'react'

export default () => (
    <div id="contact">
        <form 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="input">
                <label htmlFor="name"> Your Name: </label>
                <input name="name" placeholder="Your Name" type="text"/>
            </div>
            <div className="input">
                <label htmlFor="email"> Your Email:</label>
                <input name="email" placeholder="email@email.com" type="text"/>
            </div>
            <div className="input">
                <label htmlFor="message"> Message </label>
                <textarea name="message"/>
            </div>
            <button>Send</button>
        </form>
    </div>
)