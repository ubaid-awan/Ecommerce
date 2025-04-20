import React from 'react'
import "./NewLetter.css"

const NewLetter = () => {
    return (
        <div className="NewLetter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p> Subscribe to our newsletter and get exclusive offers, latest news and updates on your email</p>
           <div>
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>  
           </div>
        </div>
    )
}

export default NewLetter