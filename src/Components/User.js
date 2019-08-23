import React from 'react';

const User = () => {
  return (
    <div className='backgroundUser'>
      <header className='header1'>FOODSO</header>
      <form className='user'>
        <label>USERNAME:</label>
        <input type='text' name='username' placeholder='Enter username' />
        <br />
        <label>PASSWORD:</label>
        <input type='text' name='password' placeholder='Enter Password' />
        <br />
        <input
          className='userSubmit'
          type='submit'
          value='Log In'
          name='submit'
          placeholder='Submit'
        />
      </form>
    </div>
  );
};

export default User;
