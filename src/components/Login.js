import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  if (username && password) {
    axios.post('http://localhost:8000/api/v1/accounts/token/login', { username, password })
      .then(response => {
        console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data.auth_token));
         window.location.href = '/products';
        // dispatch(toggleLoggedIn())
        // do something with the response, like store the token in local storage
      })
      .catch(error => {
        console.log(error);
        setFeedback(error.response.statusText)
        // handle error, show an error message
      });
  } else {
    console.log('Username and password are required.');
    // show an error message to the user
  }
  setUsername('')
  setPassword('')
};

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
    </form>
    <h3 style={{color:'red'}}>{feedback}</h3>
    </>
  );
};

export default Login;
