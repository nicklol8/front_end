import React, { Component } from 'react';
import DisplayFiltered from './DisplayFiltered';

class FilterByTheme extends Component {
  constructor() {
    super();
    this.state = {
      theme: '',
      eachRestaurant: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.filterRestaurants = this.filterRestaurants.bind(this);
  }

  filterRestaurants(evt) {
    evt.preventDefault();
    const filterThemes = this.props.allRestaurants.filter(eachRestaurant => {
      if (this.state.theme === eachRestaurant.theme[0]) {
        console.log('filtered', eachRestaurant);
        this.setState({ eachRestaurant: eachRestaurant });
        return eachRestaurant;
      }
    });
  }

  async handleOnChange(event) {
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={evt => this.filterRestaurants(evt)}>
          <input
            type='text'
            name='theme'
            value={this.state.theme}
            onChange={this.handleOnChange}
          />
          <button type='submit'>Filter</button>
        </form>
        <DisplayFiltered filtered={this.state.eachRestaurant} />
      </div>
    );
  }
}

export default FilterByTheme;
