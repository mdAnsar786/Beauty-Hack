import React from 'react';
import icon from "../../Assets/images/icon.png"
import star from "../../Assets/images/Star 1.png"
import elipse1 from "../../Assets/images/Ellipse 152.png"
import elipse2 from "../../Assets/images/Ellipse 153.png"
import elipse3 from "../../Assets/images/Ellipse 154.png"
import './Bestquality.css'

const Bestquality = () => {
    return (
        <div>
           <div className="bestquality-div">
            <div className="quality-firstdiv">
               <div className="box-1">
                  <img src={icon} alt=""/>
                  <p className="text-1">Their products are organic and make my skin feel so goooood.</p>
                  <div className="star">
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  </div>
                </div>  
               <div className="box-2">
                  <img src={icon} alt=""/>
                  <p className="text-2">For their quality, they are extremely affordable</p>
                  <div className="star">
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  </div>
                </div>  
               <div className="box-3">
                  <img src={icon} alt=""/>
                  <p className="text-3">The staff are very friendly and the environment is comfortable.</p>
                  <div className="star">
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  <img src={star} alt="..."/>
                  </div>
                </div>  
            </div>
            <div className="elipse-div">
                <img src={elipse1} alt="" style={{paddingRight:"10px"}}/>
                <img src={elipse2} alt="" style={{paddingRight:"10px"}}/>
                <img src={elipse3} alt=""/>
            </div>
            <div className='quality-secdiv'>
                <div>
                    <h2 style={{width:"590px",fontSize:"22px",fontWeight:"500"}}>Bienestar - We provide beauty and treatment products and services with 
                        the <span style={{fontWeight:"700"}}>best quality </span> at affordable prices </h2>
                </div>
                <div >
                    <button className="getbtn">GET STARTED</button>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Bestquality;