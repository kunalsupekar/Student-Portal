import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Person, Key } from 'react-bootstrap-icons';

export default function Student() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with:', { username, password });
  };

  return (

    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="login-form p-4 rounded border" onSubmit={handleLogin}>
        <h2 className="text-center mb-4">Student Login</h2>

        <div className="form-group mb-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Person size={20} color="#007BFF" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              style={{ height: '40px', width: '400px' }}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Key size={20} color="#007BFF" />
              </span>
            </div>
            <input
              type={passwordType}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="input-group-btn">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={togglePassword}
              >
                {passwordType === 'password' ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-start align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMeCheckbox"
              />
              <label
                className="form-check-label"
                htmlFor="rememberMeCheckbox"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="col text-right">
            <Link to="/">Forgot password?</Link>
          </div>
        </div>

        
        <Link to="/studentdashboard">
  <button className="btn btn-primary btn-block mb-4" type="submit">
    Sign in
  </button>
</Link>

        <div className="text-center">
          <p>
            Don't have an account?{' '}
            <Link to="/studentregister">Create Account</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
