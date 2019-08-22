import React from 'react';
import axios from 'axios';

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    await axios.post(`${baseURL}/user`, {
      username: this.state.username,
      password: this.state.password
    });
    this.setState({
      username: '',
      password: ''
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h3>Sign up!</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username' />
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor='password' />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type='Submit' value='Add User' />
        </form>
      </div>
    );
  }
}

export default NewUser;
