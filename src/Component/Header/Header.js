import React from 'react';
import './Header.css';
import logo from "../../Assets/images/Bienestar.png"

const Header = () => {
    return (
        <div  className="navbar">
            <div  className="header">
                <div className="first-part">
                    <a href="#Binestar" className="active">
                        <img src={logo} alt="..." />
                    </a>
                    <a href="#home" className="menu">Home</a>
                    <a href="#about" className="menu" >About</a>
                    <a href="#Product" className="menu">Product</a>
                    <a href="#contact" className="menu">Contact</a>
                </div>
                <div  className='sec-part'>
                    <div>
                        <select style={{border: "none",backgroundColor:"#E5E5E5"}}>
                            <option>EN</option>
                            <option>BENG</option>
                        </select>
                    </div>
                    <div><button className="book-btn">Book an Appointment</button></div>
                </div>
                kjsnkjfnakj
            </div>
        </div>
    );
};

export default Header;