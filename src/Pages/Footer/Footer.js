import React from 'react';
import Swap from "../../images/Swap-logos.jpg"

const Footer = () => {
    return (
        <div className='bg-dark py-4 row d-flex justify-content-center align-items-center'>
            <div className='col-md-6 col-sm-12'>
                <p>Created by <span className='textCusColor'>Mr.Swap Developer</span></p>
                <h5>© All right reserved goes to Movie Dream Watch</h5>
            </div>
            <div className='col-md-6 col-sm-12'>
                <img style={{
                    width: "23%"
                }} src={Swap} alt="developer logo" />
            </div>
        </div>
    );
};

export default Footer;