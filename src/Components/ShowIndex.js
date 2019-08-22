import React from 'react';
import Menu from './Menu';

class ShowIndex extends React.Component {
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
    const showMenu = this.state.menuButton ? <Menu restaurant={restaurant}/> : null;
    return (
      <div className='showAll'>
        <h2>{restaurant.name}</h2>
        <img src={restaurant.image} />
        <div>
          <p>{restaurant.address}</p>
          <p>{allThemes}</p>
          <p>{restaurant.url}</p>
          <p>{restaurant.phone}</p>
        </div>
        <button onClick={this.handleMenuButton}>Menu</button>
        {showMenu}
      </div>
    );
  }
}

export default ShowIndex;
