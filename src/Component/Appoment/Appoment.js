import React from 'react';
import istockphoto from "../../Assets/images/istockphoto.png"
import istockphoto2 from "../../Assets/images/istockphoto2.png"
import alancaishan from "../../Assets/images/alan-caishan.png"
import pexelsmonstera from "../../Assets/images/pexels-monstera.png"
import istockphoto3 from "../../Assets/images/istockphoto3.png"
import './Appoment.css';

const Appoment = () => {
    return (
        <div>
            <div className="appoment-div">
              <div className='appoment-imgdiv'>
                <img src={istockphoto} alt="..." />
                <img src={istockphoto2} alt="..." />
                <img src={alancaishan} alt="..." />
                <img src={pexelsmonstera} alt="..." />
                <img src={istockphoto3} alt="..." />
              </div>
              <div className='appoment-textdiv'>
                <h2 style={{fontSize:"31px",fontWeight:"600"}}>
                Book an appointment to get all the amazing services we provide 
                </h2>
                <p style={{marginLeft:"20px" ,fontWeight:"400",width:"300px"}}>Follow us to get more attractive vouchers. We update events every Friday </p>
              </div>
            </div>
        </div>
    );
};

export default Appoment;