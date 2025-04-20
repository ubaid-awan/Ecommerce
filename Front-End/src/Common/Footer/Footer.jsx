import React from 'react'
import "./Footer.css"
import FOOTER_LOGO from '../../components/Assets/logo_big.png'
import instagram_icon from '../../components/Assets/instagram_icon.png'
import pintester_icon from '../../components/Assets/pintester_icon.png'
import whatsapp_icon from '../../components/Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="Footer-logo">
                    <img src={FOOTER_LOGO} alt="" />
                    <p>SHOPPER</p>
                </div>
                <ul className='Footer-links'>
                    <li>

                        Company
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Offices
                    </li>
                    <li>
                        Products
                    </li>
                </ul>
                <div className="footer-social-icons">
                    <img src={instagram_icon} alt="" />
                    <img src={pintester_icon} alt="" />
                    <img src={whatsapp_icon} alt="" />
                </div>

            </div>
            <hr />
            <p className='copyRight'> Copyright 2025 Shopper. All rights reserved.</p>
        </>
    )
}

export default Footer