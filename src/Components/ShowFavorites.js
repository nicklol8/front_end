import React from 'react';
import ShowFavoritesList from './ShowFavoritesList';

const ShowFavorites = props => {
  const mapFavorites = props.myFavorites.map((restaurant, index) => {
    return (
      <div key={index}>
        <ShowFavoritesList
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
