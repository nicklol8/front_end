import React from 'react';

const Menu = props => {
  return (
    <div className='table'>
      <table className='table '>
        <thead />
        <tbody>
          <tr>
            <td>{props.restaurant.menu.item1.item}</td>
            <td>Price:${props.restaurant.menu.item1.price}</td>
          </tr>
          <tr>
            <td>{props.restaurant.menu.item2.item}</td>
            <td>Price: ${props.restaurant.menu.item2.price}</td>
          </tr>
          <tr>
            <td>{props.restaurant.menu.item3.item}</td>
            <td>Price: ${props.restaurant.menu.item3.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Menu;
