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
                <li onClick={()=>{setMenu('Man')}}><Link to="/Men" >Mans </Link>{menu==="Men"? <hr/> :<></>}</li>
                <li onClick={()=>{setMenu('Women')}}><Link to="/women" >women </Link>{menu==="Women"? <hr/> :<></>}</li>
                <li onClick={()=>{setMenu('Kid')}}><Link to="/Kid" >Kids </Link>{menu==="Kid"? <hr/> :<></>}</li>
            </ul>
            <div className="nav-login-cart">
               
                <Link to="/login" > <button>Login</button> </Link>
                <Link to="/Cart" ><img src={cart_icon} alt="" className='card-icon' />  </Link>
               <div className="nav-cart-count">0</div>{menu===""? <hr/> :<></>}
            </div>
        </div>
  )
}

export default Navbar