import React from 'react';

const Menu = props => {
  return (
    <div className='restaurants'>
      <div className='item'>
        <h3>{props.restaurant.menu.item1.item}</h3>
        <h3>Price:${props.restaurant.menu.item1.price}</h3>
      </div>
      <div className='item'>
        <h3>{props.restaurant.menu.item2.item}</h3>
        <h3>Price: ${props.restaurant.menu.item2.price}</h3>
      </div>
      <div className='item'>
        <h3>{props.restaurant.menu.item3.item}</h3>
        <h3>Price: ${props.restaurant.menu.item3.price}</h3>
      </div>
    </div>
  );
};

export default Menu;
