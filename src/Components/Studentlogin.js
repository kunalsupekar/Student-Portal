import React,{useState} from 'react';
//import axios from 'axios';
//import base_url1 from '../API/URL';
import { Link } from 'react-router-dom';
import { Person, Key } from 'react-bootstrap-icons';


export default function Student() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 



//   const handleLoginadmin = (e) => {
//      e.preventDefault();
//      axios.post(`${base_url1}/adminlogin`, { username, password })
//   .then((response) => {
//     // Log the data object from the response
//     console.log("hey welcome admin", response.data);

//     // Rest of your code...
//     if (response.data) {
//       // ... Handle the successful response ...
//       handleAdminLogin(response.data);
//     } else {
//       alert('Invalid Credentials. Please try again.');
//     }
//   })
//   .catch((error) => {
//     // Log the specific error message for troubleshooting
//     console.error('Error while connecting to the API:', error);
//     alert('Error while connecting to the API. Please try again later.');
//   });

//   }
  




    const [passwordType, setPasswordType] = useState("password");
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }







  return (
    <div className="container" style={{ width: '800px', height: '420px', display: 'flex', justifyContent: 'center', 
    alignItems: 'center',marginBottom:'200px',marginTop:'10px' }}>
    <div className="container d-flex justify-content-center align-items-center vh-70" >
      <form className="login-form p-4 rounded" onSubmit="">
        <h2 className="text-center mb-4">Student login</h2>

        <div className="form-group mb-6">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Person />
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
                <Key />
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
                     className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
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
                // checked={rememberMe}
                // onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMeCheckbox">
                Remember me
              </label>
            </div>
          </div>
          <div className="col text-right">
            <Link to="/">Forgot password?</Link>
          </div>
        </div>

<Link to="/studentdashboard">
        <button  className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        </Link>

        <div className="text-center">
          <p>
            Don't have an account? <Link to="/registerstudent">Create Account</Link>
          </p> 
        </div>
      </form>
    </div>
    </div>
  );
};