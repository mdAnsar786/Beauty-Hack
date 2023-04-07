import React from 'react';
import Footerlogo from "../../Assets/images/Bienestar.png"
import twitter from "../../Assets/images/twitter.png"
import facebook from "../../Assets/images/Facebook.png"
import instagram from "../../Assets/images/Instagram.png"
import './Footer.css';

const Footer = () => {
    return (
        <div>
           <div className="footerDiv">
            <div >
            <img src={Footerlogo} alt="..." className="footerimg"/>
            </div>
            <div style={{borderBottom:"1px solid #954F25", width:"90%", margin:"auto"}}></div>
            <div className='footer-seconddiv'>
            <div>
                <ul style={{listStyle:"none"}}>
                   <li className="listtyp">About</li>
                   <li>About us</li>
                   <li>Features</li>
                   <li>News</li>
                   <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul style={{listStyle:"none"}}>
                   <li className="listtyp">Product</li>
                   <li>New arrival</li>
                   <li>Discounts</li>
                   <li>Customize</li>
                   
                </ul>
            </div>
            <div>
                <ul style={{listStyle:"none"}}>
                   <li className="listtyp">Company</li>
                   <li>Our team</li>
                   <li>Partner with us</li>
                   <li>Blog</li>
                   <li>FAQs</li>
                </ul>
            </div>
            </div> 
            <div className='copy-div'>
            <div className='copy-right'>
                <div>
                    <img src={twitter} alt="..."/>
                </div>
                <div>
                <img src={facebook} alt="..."/>
                </div>
                <div>
                <img src={instagram} alt="..."/>
                </div>
                <div>
                Copyright Bienestar 2022 - Terms and Conditions Privacy Policy
                </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default Footer;