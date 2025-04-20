import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../components/Assets/logo.png"
import cart_icon from "../components/Assets/cart_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {

    const[menu,setMenu]= useState("")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>
                SHOPPER
            </p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('Shop')}}><Link to="/" >Shop </Link>{menu==="Shop"? <hr/> :<></>}</li>
                <li onClick={()=>{setMenu('Mans')}}><Link to="/Mans" >Mans </Link>{menu==="Mans"? <hr/> :<></>}</li>
                <li onClick={()=>{setMenu('Womens')}}><Link to="/womens" >womens </Link>{menu==="Womens"? <hr/> :<></>}</li>
                <li onClick={()=>{setMenu('Kids')}}><Link to="/Kids" >Kids </Link>{menu==="Kids"? <hr/> :<></>}</li>
            </ul>
            <div className="nav-login-cart">
               
                <Link to="/Login" > <button>Login</button> </Link>
                <Link to="/Cart" ><img src={cart_icon} alt="" className='card-icon' />  </Link>
               <div className="nav-cart-count">0</div>{menu===""? <hr/> :<></>}
            </div>
        </div>
  )
}

export default Navbar