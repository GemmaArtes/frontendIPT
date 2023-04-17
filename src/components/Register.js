import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/v1/accounts/users/', { username, email, password, confirmPassword })
      .then(response => {
        console.log(response);
        // do something with the response, like show a success message
      })
      .catch(error => {
        console.log(error);
        // handle error, show an error message
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit" onClick={(e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/v1/accounts/users/', { username, email, password, confirmPassword })
              .then(response => {
                console.log(response);
                // do something with the response, like show a success message
              })
              .catch(error => {
                console.log(error);
                // handle error, show an error message
              });
      }}>Register</button>
    </form>
  );
};

export default Register;
