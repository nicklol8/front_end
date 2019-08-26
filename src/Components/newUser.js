import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    console.log('before', this.state);
    const newUser = await axios.post(`${baseURL}/user/register`, {
      // await axios.post(`${baseURL}/user/register`, {
      username: this.state.username,
      password: this.state.password
    });
    console.log('sent', newUser);
    this.setState({
      username: '',
      password: '',
      redirect: true
    });
    this.setRedirect();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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
      <div className='backgroundUser'>
        {this.renderRedirect()}
        <form className='user' onSubmit={this.handleSubmit}>
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
          <input type='submit' value='Sign up' />
        </form>
      </div>
    );
  }
}

export default NewUser;
