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
        favorites: []
      }
    };
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.handleAddRestaurants = this.handleAddRestaurants.bind(this);
    this.logIn = this.logIn.bind(this);
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

  logIn(data) {
    this.setState({
      isLoggedIn: true,
      currentUser: {
        name: data.username,
        favorites: data.favorites
      }
    });
    console.log(`Welcome ${data.username}`);
    // (prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    // console.log('logged');
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
          <Link to='/restaurants'>All</Link>
          <Link to='/register'>Sign up</Link>
          <Link to='/login'>
            <button>Log IN</button>
          </Link>
          {loggedIn}
          <Link to='/filter'>Filter</Link>
          <Route
            path='/restaurants'
            render={props => (
              <ShowAllRestaurants
                {...props}
                allRestaurants={this.state.allRestaurants}
                deleteRestaurant={this.deleteRestaurant}
              />
            )}
          />
          <Route path='/' exact component={Cover} />
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
        </div>
      </Router>
    );
  }
}

export default App;
