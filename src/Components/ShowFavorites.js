import React from 'react';
import ShowIndex from './ShowIndex';

const ShowFavorites = props => {
  const mapFavorites = props.myFavorites.map((restaurant, index) => {
    return (
      <div key={index}>
        <ShowIndex
          addToFavorites={props.addToFavorites}
          deleteRestaurant={props.deleteRestaurant}
          restaurant={restaurant}
          key={index}
        />
      </div>
    );
  });
  return (<div>{mapFavorites}</div>);
};

export default ShowFavorites;


