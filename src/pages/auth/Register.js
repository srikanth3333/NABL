import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [name, setName] = React.useState('')
  const [ulrNumber, setUlrNumber] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [city, setCity] = React.useState('')
  const [pincode, setPincode] = React.useState('')
  const [accCerNo, setAccCerNo] = React.useState('')
  const [accValid, setAccValid] = React.useState('')
  const [accLink, setAccLink] = React.useState('')
  const [mobileNo, setMobileNo] = React.useState('')
  let history = useNavigate()

  const postData = async (e) => {
    e.preventDefault();
    let data = {
      name:name,
      role:"admin",
      address:address,
      city:city,
      pincode:pincode,
      AccCertificateNo:accCerNo,
      AccValidity:accValid,
      AcccerificateLink:accLink,
      mobileNo:mobileNo,
    }
    await axios.post("http://192.168.0.243:7000/api/addProfile",data)
    .then(res => {
      if(res.data.status == true) {
        history("/")
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
                  <h2 className="text-center">Fill the profile</h2>
                  <form onSubmit={postData}>
                    <div className="form-group">
                      <label htmlFor="">Company Name</label>
                      <input type="text" required placeholder="Company name" onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Address</label>
                      <input type="text" required placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}  className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">City</label>
                      <input type="text" required placeholder="Enter city" onChange={(e) => setCity(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Pincode</label>
                      <input type="text" required placeholder="Enter pincode" onChange={(e) => setPincode(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">NABL Accrediation Certificate No.</label>
                      <input type="text" required onChange={(e) => setAccCerNo(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">NABL Accrediation validity till</label>
                      <input type="date" required onChange={(e) => setAccValid(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">NABL Accrediation Certificate Link</label>
                      <input type="text" required onChange={(e) => setAccLink(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Enter mobile number</label>
                      <input type="number" min="1"  required placeholder="Enter mobile number" onChange={(e) => setMobileNo(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn px-4 btn-success py-2">Submit</button>
                    </div>
                    <div className="text-center">
                        <Link to="/">Already registered</Link>
                      </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
