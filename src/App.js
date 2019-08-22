import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ShowIndex from './Components/ShowIndex';
import Individual from './Components/Individual';
import CreateRestaurant from './Components/CreateRestaurant';
import AppChild from './Components/AppChild';

let baseURL = 'http://localhost:3003';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: [],
      apiCheck: false
    };
  }

  async getAllRestaurants() {
    const response = await axios(`${baseURL}/restaurant`);
    const data = response.data;
    this.setState({
      allRestaurants: data,
      apiCheck: true
    });
  }

  componentDidMount() {
    this.getAllRestaurants();
  }

  showAllRestaurants() {
    const mapAllRestaurants = this.state.allRestaurants.map(
      (restaurant, index) => {
        return (
          <div>
            <ShowIndex restaurant={restaurant} key={index} />
          </div>
        );
      }
    );
    return mapAllRestaurants;
  }

  render() {
    const renderRestaurant = this.state.apiCheck ? (
      this.showAllRestaurants()
    ) : (
      <h1>Failed</h1>
    );
    return (
      <div className='App'>
        <h1>Restaraunts:</h1>
        {renderRestaurant}
        <CreateRestaurant baseURL={baseURL} />
      </div>
    );
  }
}

export default App;
