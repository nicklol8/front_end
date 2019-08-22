import React from 'react';
import axios from 'axios';

class NewFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      address: '',
      theme: '',
      menu: '',
      like: '',
      url: '',
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/restaurant`, {
      name: this.state.name,
      image: this.state.image,
      address: this.state.address,
      theme: this.state.theme,
      menu: this.state.menu,
      like: this.state.like,
      url: this.state.url,
      phone: this.state.phone
    });
    this.setState({
      name: '',
      image: '',
      address: '',
      theme: '',
      menu: '',
      like: '',
      url: '',
      phone: ''
    });
    this.props.handleAddRestaurants(response.data);
    
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  render() {
    return (
      <div>
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
            name='menu'
            value={this.state.menu}
            placeholder='menu'
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
