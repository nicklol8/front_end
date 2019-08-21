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
    this.deleteRestaurant = this.deleteRestaurant.bind(this)
    this.handleAddRestaurants = this.handleAddRestaurants.bind(this)
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
          // <ShowIndex deleteRestaurant={this.deleteRestaurant} restaurant={restaurant} key={index} />
          <AppChild eachRestaurant={restaurant} key={index} />
        );

      }
    );
    return mapAllRestaurants;
  }
  async deleteRestaurant(id) {
    await axios.delete(`${baseURL}/restaurant/${id}`)
    const filteredRestaurants = this.state.allRestaurants.filter((restaurant)=> {
      return restaurant._id !== id
    })
  this.setState({
    allRestaurants: filteredRestaurants
  })
  }

  handleAddRestaurants(restaurant){
    const copyRestaurants = [...this.state.allRestaurants];
    copyRestaurants.unshift(restaurant);
    this.setState({
      allRestaurants: copyRestaurants
      
    })
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
        <CreateRestaurant handleAddRestaurants = {this.handleAddRestaurants} baseURL={baseURL} />
      </div>
    );
  }
}

export default App;
