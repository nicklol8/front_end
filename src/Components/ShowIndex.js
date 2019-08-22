import React from 'react';
import axios from 'axios';

class ShowIndex extends React.Component {
  constructor() {
    super();
  
  }


  render() {
    // const { index, restaurant } = this.props;
    // const allThemes = restaurant.theme.map((theme, index) => {
    //   return (
    //     <div>{theme}</div>
    //   )
    // });
    console.log('show', this.props)


    // {return (
    //   <div className='showAll'>
    //     <h2>{restaurant.name}</h2>
    //     <div>
    //       <p>{restaurant.address}</p>
    //       <p>{allThemes}</p>
    //       <p>{restaurant.url}</p>
    //       <p>{restaurant.phone}</p>
          
    //     </div>
       
       
    //   </div>
    // );}
    return (
      <div>show</div>
    )
  }
}

export default ShowIndex;
