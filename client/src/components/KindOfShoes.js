import React from 'react';
import './style.scss';

import evening from "../images/shoe1.jpeg";
import sneakers from "../images/shoe2.jpeg";
import ballets from "../images/shoe3.jpeg";
import boots from "../images/shoe4.jpeg";
import raffia from "../images/shoe5.jpeg";
import sandals from "../images/shoe1.jpeg";


const KindOfShoes = () => {

  const items = [
    {img: evening, class: 'plate', name: 'evening'},
    {img: sneakers, class: 'plate', name: 'sneakers'},
    {img: ballets, class: 'bgPlate', name: 'ballets'},
    {img: boots, class: 'plate', name: 'boots'},
    {img: raffia, class: 'plate', name: 'raffia'},
    {img: sandals, class: 'bgPlate', name: 'sandals'},
  ]


  return (
    <section className='kindOfShoes'>
      <div className='container'>
        {items.map(item => (
          <div className='items'>
            <div className={item.class} />
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KindOfShoes;