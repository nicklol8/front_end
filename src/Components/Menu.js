import React from 'react';

const Menu = props => {
  return (
    <div className='table'>
   <table class="table ">
    <thead> 
     
      

        
        
        </thead>
        <tbody>
      <tr>
        
        <td>{props.restaurant.menu.item1.item}</td>
        <td>Price:${props.restaurant.menu.item1.price}</td>
        </tr>
          <tr>
     
           
        <td>{props.restaurant.menu.item2.item}</td>
        <td>Price: ${props.restaurant.menu.item2.price}</td>
     </tr>
        <td>{props.restaurant.menu.item3.item}</td>
        <td>Price: ${props.restaurant.menu.item3.price}</td>
     </tbody>
    </table>
    </div>
  );
};
  export default Menu;
  
  
















//   return (
//     <div className='container restaurants'>
//     <div className='row  restaurants'>
//       <div className='col-6 restaurants'>
//         <h3>{props.restaurant.menu.item1.item}</h3>
//         <h3>{props.restaurant.menu.item2.item}</h3>
//         <h3>{props.restaurant.menu.item3.item}</h3>
//       </div>
//       <div className='col-6 restaurants'>
//         <h3>Price:${props.restaurant.menu.item1.price}</h3>
//         <h3>Price: ${props.restaurant.menu.item2.price}</h3>
//         <h3>Price: ${props.restaurant.menu.item3.price}</h3>
//       </div>
//       </div>
//     </div>
//   );
// };