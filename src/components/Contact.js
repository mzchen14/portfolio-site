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
            <input name="name" placeholder="Your Name" type="text"/>
            <button>Send</button>
        </form>
    </div>
)