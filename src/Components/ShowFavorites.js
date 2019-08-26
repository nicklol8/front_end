import React from 'react';
import ShowIndex from './ShowIndex';

const ShowFavorites = props => {
  const mapFavorites = props.myFavorites.map((restaurant, index) => {
    return (
      <div className='favBackground' key={index}>
        <ShowIndex
          addToFavorites={props.addToFavorites}
          deleteRestaurant={props.deleteRestaurant}
          restaurant={restaurant}
          key={index}
        />
      </div>
    );
  });
  return <div className='favBackground'>{mapFavorites}</div>;
};

export default ShowFavorites;
