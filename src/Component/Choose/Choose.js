import React from 'react';
import pin from "../../Assets/images/Pin_light.png"
import key from "../../Assets/images/Key_alt_light.png"
import drink from "../../Assets/images/drink_light.png"
import calender from "../../Assets/images/Calendar_light.png"
import './Choose.css'

const Choose = () => {
    return (
        <div>
            <div className="choose-maindiv">
                
                <div className='use'> 
                <h4 style={{ fontSize: "30px", marginTop: "32px", marginBottom: "6px" }}>Why Choose us</h4>
                <div className="first-div">
                    <div className='img-content'>
                        <div className="img-div">
                            <img src={pin} alt="" className="icon" />
                        </div>
                        <h5 className="text-tag">EASY ACESS</h5>
                        <p className="small-text">Find our Locations with easy </p>
                    </div>
                    <div className='img-content'>
                        <div className="img-div">
                            <img src={key} alt="" className="icon" />
                        </div>
                        <h5 className="text-tag">Secure</h5>
                        <p className="small-text"> personal self lock wardrobe </p>
                    </div>
                    <div className='img-content'>
                        <div className="img-div">
                            <img src={drink} alt="" className="icon" />
                        </div>
                        <h5 className="text-tag">Free drinks</h5>
                        <p className="small-text">A mini bar to get 1 free drink</p>
                    </div>
                    <div className='img-content'>
                        <div className="img-div">
                            <img src={calender} alt="" className="icon" />
                        </div>
                        <h5 className="text-tag">Fast booking</h5>
                        <p className="small-text">Make an appointment quickly and easily </p>
                    </div>
                </div>
                </div>
            </div>


        </div>
    );
};

export default Choose;