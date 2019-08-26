import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: '',
      image: '',
      address: '',
      theme: '',
      menu: {
        item1: {
          item: '',
          price: Number
        },
        item2: {
          item: '',
          price: Number
        },
        item3: {
          item: '',
          price: Number
        }
      },
      like: '',
      url: '',
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const newMenu = {
      item1: {
        item: this.state.menuitem1item,
        price: this.state.menuitem1price
      },
      item2: {
        item: this.state.menuitem2item,
        price: this.state.menuitem2price
      },
      item3: {
        item: this.state.menuitem3item,
        price: this.state.menuitem3price
      }
    };
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/restaurant`, {
      name: this.state.name,
      image: this.state.image,
      address: this.state.address,
      theme: this.state.theme,
      menu: newMenu,
      like: this.state.like,
      url: this.state.url,
      phone: this.state.phone
    });
    this.setState({
      name: '',
      image: '',
      address: '',
      theme: '',
      menu: {
        item1: {
          item: '',
          price: Number
        },
        item2: {
          item: '',
          price: Number
        },
        item3: {
          item: '',
          price: Number
        }
      },
      like: '',
      url: '',
      phone: ''
    });
    this.props.handleAddRestaurants(response.data);
    this.setRedirect();
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  setRedirect() {
    this.setState({
      redirect: true
    });
  }
  renderRedirect() {
    if (this.state.redirect === true) {
      return <Redirect to='/login' />;
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <h3>Add a Restuarant</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='Name' />
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='name'
            onChange={this.handleChange}
          />
          <label htmlFor='Url' />
          <input
            type='text'
            name='url'
            value={this.state.url}
            placeholder='http://'
            onChange={this.handleChange}
          />
          <label htmlFor='img' />
          <input
            type='text'
            name='image'
            value={this.state.image}
            placeholder='img'
            onChange={this.handleChange}
          />
          <label htmlFor='address' />
          <input
            type='text'
            name='address'
            value={this.state.address}
            placeholder='address'
            onChange={this.handleChange}
          />
          <label htmlFor='theme' />
          <input
            type='text'
            name='theme'
            value={this.state.theme}
            placeholder='theme'
            onChange={this.handleChange}
          />
          <label htmlFor='menu' />
          <input
            type='text'
            name='menuitem1item'
            value={this.state.menuitem1item}
            placeholder='item 1'
            onChange={this.handleChange}
          />
          <label htmlFor='menu' />
          <input
            type='text'
            name='menuitem1price'
            value={this.state.menuitem1price}
            placeholder='item 1 price'
            onChange={this.handleChange}
          />
          <label htmlFor='menu' />
          <input
            type='text'
            name='menuitem2item'
            value={this.state.menuitem2item}
            placeholder='item 2'
            onChange={this.handleChange}
          />
          <label htmlFor='menu' />
          <input
            type='text'
            name='menuitem2price'
            value={this.state.menuitem2price}
            placeholder='item 2 price'
            onChange={this.handleChange}
          />
          <label htmlFor='menu' />
          <input
            type='text'
            name='menuitem3item'
            value={this.state.menuitem3item}
            placeholder='item 3'
            onChange={this.handleChange}
          />
          <label htmlFor='menu' />
          <input
            type='text'
            name='menuitem3price'
            value={this.state.menuitem3price}
            placeholder='item 3 price'
            onChange={this.handleChange}
          />
          <label htmlFor='phone' />
          <input
            type='text'
            name='phone'
            value={this.state.phone}
            placeholder='phone'
            onChange={this.handleChange}
          />

          <input type='submit' value='Add Resturant' />
        </form>
      </div>
    );
  }
}

export default NewFormComponent;
