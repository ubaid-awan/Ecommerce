import React from 'react'
import './Offers.css'
import Offers_image from "../Assets/exclusive_image.png"


const Offers = () => {
  return (
   <div className="Offers">
     <div className="Offers_left">
                 <h2>Exclusive</h2>
                 <h2>Offers For You</h2>
                 <p>Get the best deals and discounts on your favorite products</p>
                 <button>
                         check now
                     </button>
             </div>
 
             <div className="Offers_Right">
 
                 <img src={Offers_image} alt="" />
             </div>
   </div>
  )
}

export default Offers