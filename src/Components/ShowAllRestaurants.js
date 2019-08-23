import React from 'react';
import ShowIndex from './ShowIndex';

const ShowAllRestaurants = props => {
  const mapAllRestaurants = props.allRestaurants.map((restaurant, index) => {
    return (
      <div>
        <ShowIndex restaurant={restaurant} key={index} />
      </div>
    );
  });
  return <div>{mapAllRestaurants}</div>;
};

export default ShowAllRestaurants;
