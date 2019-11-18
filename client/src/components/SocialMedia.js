import React from 'react';
import { Button } from '@material-ui/core';

import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TelegramIcon from '@material-ui/icons/Telegram';
import SvgIcon from '@material-ui/core/SvgIcon';

import './style.scss';

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
        {socialIcons.map(item => (
          <div className='icon'>
            <SvgIcon style={{width:'32px', height:'32px', color:'lightslategray'}}><MobileFriendlyIcon /></SvgIcon>
            <h3>{item.title}</h3>
          </div>
        ))}
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
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
          </div>
          <div>
            <img src='' alt='' className='bgImage'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;