import React from 'react';

class ShowIndex extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { index, restaurant } = this.props;
    const allThemes = restaurant.theme.map((theme, index) => {
      return <span key={index}>{theme}</span>;
    });
    return (
      <div className='showAll'>
        <h2>{restaurant.name}</h2>
        <div>
          <p>{restaurant.address}</p>
          <p>{allThemes}</p>
          <p>{restaurant.url}</p>
          <p>{restaurant.phone}</p>
        </div>
      </div>
    );
  }
}

export default ShowIndex;
