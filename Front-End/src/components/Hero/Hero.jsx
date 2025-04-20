import React from 'react'
import Hero_image from "../Assets/hero_image.png"
import hand_icon from "../Assets/hand_icon.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="hero_left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                    <button>
                        Latest Collection
                    </button>
                </div>
            </div>

            <div className="Hero_Right">
                <div className='image_box'>

                <img src={Hero_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero