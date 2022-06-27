import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CustomerLogin() {

  const [username,setUsername] = React.useState(null)
  const [password,setPassword] = React.useState(null)


  const handleLogin = (e) => {
    e.preventDefault();
    if(!username || !password) {
      return alert("Below fields cannot be empty");
    }
    axios.get(`http://localhost:7000/api/login?name=${username}&password=${password}`)
    .then((res) => {
      if(res.data.status == true) {
        localStorage.setItem('role', res.data.profile.role);
        window.location.href = "/"
      }else {
        alert(res.data.msg)
      }
      
    })
    .catch(err => alert("Something went wrong please try again later"))
  }

  return (
    <div className="container">  
            <div className="row justify-content-center h-100 align-items-center mt-5">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body p-4 ">
                      <h2>Login Here</h2>
                      <form onSubmit={handleLogin}>
                          <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter username" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                          </div>
                          <div className="form-group text-center">
                            <button type="submit" className="btn px-4 btn-success py-2">Submit</button>
                          </div>
                          <div className="text-center">
                            <Link to="/customerRegister">Not a registered user</Link>
                          </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
      </div>
  );
}

export default CustomerLogin;
