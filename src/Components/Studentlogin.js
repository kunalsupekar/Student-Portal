import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Person, Key } from 'react-bootstrap-icons';
import { studentLogin } from './API/Url';
import { Spinner } from 'reactstrap';

export default function Student() {
  const [prn, setPrn] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // Use only 'prn' in the request
      const credentials = { prn, password };
      const response = await studentLogin(credentials);

      console.log('Login successful:', response);

      // Set login success status to true
      setLoginSuccess(true);

      // Simulate a delay for 2 seconds before redirecting
      setTimeout(() => {
        // Redirect to the next page (replace '/dashboard' with your actual route)
        window.location.href = '/studentdashboard';
      }, 20);

    } catch (error) {
      console.error('Login failed:', error);

      // Set login success status to false
      setLoginSuccess(false);

    } finally {
      // Ensure that the loading spinner is turned off
      setIsLoading(false);
    }
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
              placeholder="Enter PRN"
              style={{ height: '40px', width: '400px' }}
              required
              value={prn}
              onChange={(e) => setPrn(e.target.value)}
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

        {loginSuccess === false && (
          <div className="alert alert-danger" role="alert">
            Wrong credentials. Please try again.
          </div>
        )}

        <button className="btn btn-primary btn-block mb-4" type="submit">
          {isLoading ? <Spinner>Loading...</Spinner> : 'Sign'}
        </button>

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
