import React from 'react'

export default () => (
    <div id="contact">
        <form 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
        <p>
            <label>Your Name: <input type="text" name="name" /></label>   
        </p>
            <button>Send</button>
        </form>
    </div>
)