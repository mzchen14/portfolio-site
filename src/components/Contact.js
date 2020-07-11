import React from 'react'

export default () => (
    <div id="contact">
        <form 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
            <input name="name" placeholder="Your Name" type="text"/>
            <button>Send</button>
        </form>
    </div>
)