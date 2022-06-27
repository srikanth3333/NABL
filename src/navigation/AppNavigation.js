import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from "../components/Layout";
import Home from '../pages/Home';
import AddData from '../pages/uploads/AddData';
import QrCode from '../pages/QrCode';

function AppNavigation({role}) {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addData" element={<AddData />} />
            <Route exact path="/qrCode" element={<QrCode role={role} />} />
          </Routes>
        </Layout>
      </Router>
    )
}

export default AppNavigation
