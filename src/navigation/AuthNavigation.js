import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from '../pages/auth/Login';
import Register from "../pages/auth/Register";
import CustomerRegister from "../pages/auth/CustomerRegister";
import CustomerLogin from "../pages/auth/CustomerLogin";

function AuthNavigation() {
    return (
      <Router>
          <Routes>
            <Route exact path="/registerAdmin" element={<Register />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/customerRegister" element={<CustomerRegister />} />
            <Route exact path="/customerLogin" element={<CustomerLogin />} />
          </Routes>
      </Router>
    )
}

export default AuthNavigation
