import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ShowIndex from './Components/ShowIndex';
import CreateRestaurant from './Components/CreateRestaurant';
import NewUser from './Components/newUser';
import Login from './Components/Login.js';
import ShowAllRestaurants from './Components/ShowAllRestaurants.js';
import Cover from './Components/Cover';
import User from './Components/User';
import FilterByTheme from './Components/FilterByTheme';

import ShowFavorites from './Components/ShowFavorites';

let baseURL = 'http://localhost:3003';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: [],
      apiCheck: false,
      isLoggedIn: false,
      currentUser: {
        name: '',
        favorites: [],
        id: null
      }
    };
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.handleAddRestaurants = this.handleAddRestaurants.bind(this);
    this.logIn = this.logIn.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.findOneToDelete = this.findOneToDelete.bind(this);
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
            <ShowIndex
              deleteRestaurant={this.deleteRestaurant}
              restaurant={restaurant}
              key={index}
            />
          </div>
        );
      }
    );
    return mapAllRestaurants;
  }

  async deleteRestaurant(id) {
    await axios.delete(`${baseURL}/restaurant/${id}`);
    const filteredRestaurants = this.state.allRestaurants.filter(restaurant => {
      return restaurant._id !== id;
    });
    this.setState({
      allRestaurants: filteredRestaurants
    });
  }

  handleAddRestaurants(restaurant) {
    const copyRestaurants = [...this.state.allRestaurants];
    copyRestaurants.unshift(restaurant);
    this.setState({
      allRestaurants: copyRestaurants
    });
  }

  addToFavorites(restaurant) {
    const copyUser = this.state.currentUser;
    copyUser.favorites.unshift(restaurant);
    this.setState({
      currentUser: copyUser
    });
    this.handleAddToFavorites();
  }

  findOneToDelete(restaurant) {
    const thisRestaurant = restaurant;
    const copyRestaurants = this.state.currentUser.favorites;
    const copyUser = this.state.currentUser;
    copyRestaurants.splice(
      copyRestaurants
        .map(function(e) {
          return e._id;
        })
        .indexOf(thisRestaurant),
      1
    );
    console.log(copyUser);
    copyUser.favorites = copyRestaurants;
    this.setState({
      currentUser: copyUser
    });
    this.handleAddToFavorites();
  }
  async handleAddToFavorites() {
    console.log(this.state.currentUser.favorites);
    await axios.put(`${baseURL}/user/${this.state.currentUser.id}`, {
      favorites: this.state.currentUser.favorites
    });
  }
  logIn(data) {
    this.setState({
      isLoggedIn: true,
      currentUser: {
        name: data.username,
        favorites: data.favorites,
        id: data._id
      }
    });
    console.log(`Welcome ${data.username}`);
  }

  render() {
    const renderRestaurant = this.state.apiCheck ? (
      this.showAllRestaurants()
    ) : (
      <h1>Failed</h1>
    );

    const loggedIn = this.state.isLoggedIn ? (
      <h1>Welcome Back {this.state.currentUser.name}</h1>
    ) : (
      <h2>Please Log In</h2>
    );
    return (
      <Router>
        <div className='App'>
          <Link to='/restaurants'>
            <button className='coverButton'>Restaurants</button>
          </Link>
          <Link to='/register'>
            <button className='coverButton'>Sign up</button>
          </Link>
          <Link to='/login'>
            <button className='coverButton'>Log IN</button>
          </Link>
          <Link to='/favorites'>Show Favorites</Link>
          <Link to='/filter'>Filter by Food Type</Link>
          {loggedIn}
          <Route path='/' exact component={Cover} />
          <Route
            path='/restaurants'
            render={props => (
              <ShowAllRestaurants
                {...props}
                addToFavorites={this.addToFavorites}
                allRestaurants={this.state.allRestaurants}
                deleteRestaurant={this.deleteRestaurant}
              />
            )}
          />

          <Route
            path='/register'
            render={props => <NewUser {...props} baseURL={baseURL} />}
          />
          <Route
            path='/login'
            render={props => (
              <Login {...props} logIn={this.logIn} baseURL={baseURL} />
            )}
          />
          <Route
            path='/filter'
            render={props => (
              <FilterByTheme
                {...props}
                allRestaurants={this.state.allRestaurants}
              />
            )}
          />
          <Route
            path='/favorites'
            render={props => (
              <ShowFavorites
                {...props}
                addToFavorites={this.addToFavorites}
                myFavorites={this.state.currentUser.favorites}
                deleteRestaurant={this.findOneToDelete}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
