import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const baseURL = this.props.baseURL;
      console.log('before', this.state);
      const reqBody = {
        username: this.state.username,
        password: this.state.password
      };
      const response = await axios.post(`${baseURL}/user/login`, reqBody);
      console.log('GET OK', response.data);
      if (response.data !== 'Not good') {
        this.props.logIn(response.data);
      }
    } catch (err) {
      console.log('Login error:', err.message);
    }
    this.setRedirect();
  }

  async handleOnChange(event) {
    const { name, value } = event.target;
    await this.setState({
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
      return <Redirect to='/restaurants' />;
    }
  }

  render() {
    return (
      <div className='backgroundUser'>
        {this.renderRedirect()}
        <form className='user' onSubmit={evt => this.handleSubmit(evt)}>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }
}

export default Login;
