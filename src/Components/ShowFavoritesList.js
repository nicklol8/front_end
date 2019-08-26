import React from 'react';
import Menu from './Menu';

class ShowFavoritesList extends React.Component {
  constructor() {
    super();
    this.state = {
      menuButton: false
    };
    this.handleMenuButton = this.handleMenuButton.bind(this);
  }

  handleMenuButton() {
    this.setState(prevState => ({ menuButton: !prevState.menuButton }));
  }

  render() {
    const { index, restaurant } = this.props;
    const allThemes = restaurant.theme.map((theme, index) => {
      return <span key={index}>{theme}</span>;
    });
    const showMenu = this.state.menuButton ? (
      <Menu restaurant={restaurant} />
    ) : null;
    return (
      <div className='container '>
        <div className='row butter'>
          <div className='col-6'>
            <img
              className='img1 banana flutter'
              src={restaurant.image}
              alt=''
            />
          </div>

          <div className='col-6 butter '>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{allThemes}</p>
            <p>
              <a href={restaurant.url}>{restaurant.url}</a>
            </p>
            <p>{restaurant.phone}</p>

            <button onClick={() => this.props.deleteRestaurant(restaurant._id)}>
              Remove from favorites
            </button>
            <button onClick={this.handleMenuButton}>Menu</button>
          </div>
        </div>

        <div className='card  '>{showMenu}</div>
      </div>
    );
  }
}

export default ShowFavoritesList;
