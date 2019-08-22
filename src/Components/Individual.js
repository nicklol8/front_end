import React from 'react';

class Individual extends React.Component {
  render() {
    return (
      <>
        <div className='details'>
          <h3>Reastaurant Menu:</h3>
          <hr />
          <h6>{this.props.allRestaurants.menu.item1}</h6>
          <h6>{this.props.allRestaurants.menu.item2}</h6>
          <h6>{this.props.allRestaurants.menu.item3}</h6>
          <h6>
            <span>Likes:</span> {this.props.allRestaurants.like}
          </h6>
        </div>
      </>
    );
  }
}
export default Individual;
