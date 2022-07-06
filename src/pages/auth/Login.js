import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [username,setUsername] = React.useState("")
  const [otp,setOtp] = React.useState("")
  const [otpView, setOtpView] = React.useState(false)

  const handleOtp = (e) => {
    e.preventDefault();
    if(!otp) {
      return alert("Below fields cannot be empty");
    }

    axios.get(`http://192.168.0.243:7000/api/verifyOtp?name=${username}&otp=${otp}`)
    .then((res) => {
      console.log(res)
      if(res.data.status == true) {
        // seOtpView(true)
        localStorage.setItem('role', res.data.profile.role);
        window.location.href = "/"
      }else {
        alert(res.data.msg)
      }
    })
    .catch(err => alert("Something went wrong please try again later"))
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if(!username) {
      return alert("Below fields cannot be empty");
    }

    axios.get(`http://192.168.0.243:7000/api/login?name=${username}`)
    .then((res) => {
      console.log(res)
      if(res.data.status == true) {
        setOtpView(true)
        // localStorage.setItem('role', res.data.profile.role);
        // window.location.href = "/"
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
                      {
                        !otpView
                        ?
                          <form onSubmit={handleLogin}>
                              <div className="form-group">
                                <label htmlFor="">Mobile Number</label>
                                <input type="number" min="1" 
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Mobile Number" />
                              </div>
                              <div className="form-group text-center">
                                <button type="submit" className="btn px-4 btn-success py-2">Submit</button>
                              </div>
                              <div className="text-center">
                                <Link to="/registerAdmin">Not a registered user</Link>
                              </div>
                          </form>
                        :
                            <form onSubmit={handleOtp}>
                              <div className="form-group">
                                <label htmlFor="">Enter Otp</label>
                                <input type="number" min="1" 
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)} className="form-control" placeholder="Enter otp" />
                              </div>
                              <div className="form-group text-center">
                                <button type="submit" className="btn px-4 btn-success py-2">Submit</button>
                              </div>
                          </form>
                      }
                      
                      
                  </div>
                </div>
              </div>
            </div>
      </div>
  );
}

export default Login;
