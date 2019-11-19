import React from 'react';
import './style.scss';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <div>
          <h3>my name</h3>
        </div>
        <div>
          <h5>my name</h5>
          <p>Our Brand</p>
          <p>Stores</p>
          <p>Lookbook</p>
          <p>Presse</p>
        </div>
        <div>
          <h5>CUSTOMER SERVICE</h5>
          <p>Contact</p>
          <p>Shipping</p>
          <p>Returns & exchange</p>
          <p>Terms</p>
          <p>FAQ</p>
        </div>
        <div>
          <h5>Follow me</h5>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;