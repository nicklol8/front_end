import React from 'react';

class Individual extends React.Component {
  render() {
    return (
      <>
        <div className='details'>
          <h3>Reastaurant Information:</h3>
          <hr />
          <h4> {this.props.allRestaurants.name} </h4>
          <h6>{this.props.allRestaurants.theme}</h6>
          <h6>
            <span>Menu:</span> {this.props.allRestaurants.menu}
          </h6>
          <h3>Contact Information:</h3>
          <hr />
          <h6>
            <span>Address:</span> {this.props.allRestaurants.address}
          </h6>
          <h6>
            <span>Phone:</span> {this.props.allRestaurants.phone}
          </h6>
          <h6>
            <span>Website:</span> {this.props.allRestaurants.url}
          </h6>
          <h6>
            <span>Likes:</span> {this.props.allRestaurants.like}
          </h6>
        </div>
      </>
    );
  }
}
export default Individual;
