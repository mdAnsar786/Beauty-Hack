import React from 'react';
import kadarius from "../../Assets/images/kadarius-seegars.png"
import './Product.css'


const Product = () => {
    return (
        <div>
            <div className="productdiv">
                <div className="product-topdiv">
                <p style={{ color:"#954F25",fontSize:"30px",}}>Product</p>
                <h2 className='bestseller'>Our bestseller this week...</h2>
                </div>
                <div className="product-boxdiv">
                    <div className='display'>
                        <div className='product-text'>
                    <h2>Daily Serum</h2>
                    <p className='Bakuchiol-text '>Bakuchiol is a natural alternative to Retinol,
                     which is safe and gentle to use on sensitive skin by all,
                      including teenagers and pregnant women.</p>
                      </div>
                      <img src={kadarius} alt="..." className="kadarius-img"/>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default Product;