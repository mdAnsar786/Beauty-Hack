import React from 'react';
import main_image from "../../Assets/images/main_image.png"
import ring from "../../Assets/images/Check_ring_light (1).png"
import raphael from "../../Assets/images/raphael-lovaski.png"
import saltbody from "../../Assets/images/salt on body.png"
import suna from "../../Assets/images/sauna 2.png"
import './Wellness.css'

const Wellness = () => {
    return (
        <div className="Wellness-maindiv">
            <div className='big-part'>
                <div className="small-part">
                    <div>
                        <h1 className="htag">The essence of wellness and vitality in one place</h1>
                    </div>
                    <div className="listtype">
                        <ul style={{listStyleType:"none",textAlign:"left"}}>
                        <li> <img src={ring} alt="" className="check-ring"/>Aromatherapeutic massage</li>
                        <li> <img src={ring} alt=""  className="check-ring"/>Relaxation baths with the use of aromatheraphy</li>
                        <li> <img src={ring} alt=""  className="check-ring"/>SPA & wellness treatments</li>
                        </ul>
                    </div>

                    <div className="relaxbtn">
                        <button className="readybtn">Ready to relax?</button>
                    </div>
                </div>
                <div className='image-part'>
                    <img src={main_image} alt="..."  className="imgdiv"/>
                </div>

            </div>
            <div>
                    <div className="bodytraphy">
                        <div className="therapy-box">
                            <div>
                                <img src={raphael} alt="..." style={{ borderRadius: "50%" }} />
                                <h5>Facial & therapy</h5>
                            </div>
                            <div>
                                <img src={saltbody} alt="..." style={{ borderRadius: "50%" }} />
                                <h5>Body Treatment</h5>
                            </div>
                            <div>
                                <img src={suna} alt="..." style={{ borderRadius: "50%" }} />
                                <h5>Sauna Skin</h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Wellness;