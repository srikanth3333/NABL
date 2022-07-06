import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function CustomerRegister() {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [name, setName] = React.useState('')
  const [mobileNo, setMobileNo] = React.useState('')
  const [password, setPassword] = React.useState('')
  let history = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    let data = {
      name:name,
      role:"customer",
      mobileNo:mobileNo,
      password:password,
    }
    await axios.post("http://192.168.0.243:7000/api/addProfile",data)
    .then(res => {
      console.log(res)
      if(res.data.status == true) {
        history("/customerLogin")
      }else {
        alert(res.data.msg)
      }
    })
    .catch(err => alert("try again later"))
  }

  return (
    <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-lg-6">
              <div className="card">
                <div className="card-body p-4">
                  <h2 className="text-center">Register</h2>
                  <form onSubmit={postData}>
                    <div className="form-group">
                      <label htmlFor="">Username</label>
                      <input type="text" required placeholder="Enter username" onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="text"  placeholder="Enter email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Mobile Number</label>
                      <input type="text" required placeholder="Enter mobile number" onChange={(e) => setMobileNo(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input type="password" required placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn px-4 btn-success py-2">Submit</button>
                    </div>
                    <div className="text-center">
                        <Link to="/customerLogin">Already registered</Link>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default CustomerRegister;
