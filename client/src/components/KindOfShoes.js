import React from 'react';
import './style.scss';

import evening from "../images/sandal-2.png";
import sneakers from "../images/sandal-2.png";
import ballets from "../images/oneshoe-5.png";
import boots from "../images/boot-1.png";
import raffia from "../images/raffia-6.png";
import sandals from "../images/sandal-2.png";


const KindOfShoes = () => {

  const items = [
    {img: evening, class: 'plate', name: 'evening'},
    {img: sneakers, class: 'bgPlate', name: 'sneakers'},
    {img: ballets, class: 'bgPlate', name: 'ballets'},
    {img: boots, class: 'plate', name: 'boots'},
    {img: raffia, class: 'plate', name: 'raffia'},
    {img: sandals, class: 'bgPlate', name: 'sandals'},
  ]


  return (
    <section className='kindOfShoes'>
      <div className='container'>
        {items.map(item => (
          <div className='items' key={item.name}>
            <div className={item.class}/>
            <img src={item.img} alt={item.name} />
            <h3 className={item.class === 'bgPlate' ? 'bgh3': null}>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KindOfShoes;