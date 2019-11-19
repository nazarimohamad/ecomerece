import React from 'react';
import { Button } from '@material-ui/core';

import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TelegramIcon from '@material-ui/icons/Telegram';
import SvgIcon from '@material-ui/core/SvgIcon';

import './style.scss';

import shoe1 from '../images/shoe1.jpeg';
import shoe2 from '../images/shoe2.jpeg';
import shoe3 from '../images/shoe3.jpeg';
import shoe4 from '../images/shoe4.jpeg';
import shoe5 from '../images/shoe5.jpeg';

const socialIcons = [
  {icon: MobileFriendlyIcon, title: 'Mobile Friendly'},
  {icon: TelegramIcon, title: 'Close Location'},
  {icon: QueryBuilderIcon, title: 'Save Time'},
  {icon: CreditCardIcon, title: 'Secure Payment'},
]



const SocialMedia = () => {
  return (
    <section className='socialMedia'>
      <div className='icons'>
        {/* {socialIcons.map(item => ( */}
          <div className='icon'>
            <MobileFriendlyIcon style={{width:'32px', height:'32px', color:'lightslategray'}}/>
            <h3>Mobile Friendly</h3>
          </div>
          <div className='icon'>
            <TelegramIcon style={{width:'32px', height:'32px', color:'lightslategray'}}/>
            <h3>Close Location</h3>
          </div>
          <div className='icon'>
            <QueryBuilderIcon style={{width:'32px', height:'32px', color:'lightslategray'}}/>
            <h3>Save Time</h3>
          </div>
          <div className='icon'>
            <CreditCardIcon style={{width:'32px', height:'32px', color:'lightslategray'}}/>
            <h3>Secure Payment</h3>
          </div>
        {/* ))} */}
      </div>
      <div className='sexyShoe'>
        <div className='sexyShoe_store'>
          <h2>Store Locator</h2>
          <p>the phisical address is in Shiraz, Malio. you can buy online,too</p>
          <Button variant="contained" color="secondary" type='submit'>
            READ MORE
          </Button>
        </div>
      </div>
      <div className='instagram'>
        <div className='headline'>
          <h1>Follow us on Instagram</h1>
        </div>
        <div className='sampleImage'>
          <div className='smImage'>
            <img src={shoe1} alt='' />
            <img src={shoe2} alt='' />
            <img src={shoe3} alt='' />
            <img src={shoe4} alt='' />
          </div>
          <div className='bgImage'>
            <img src={shoe5} alt=''/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;