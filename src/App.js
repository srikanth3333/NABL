import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './navigation/AppNavigation';
import AuthNavigation from './navigation/AuthNavigation';
import './App.css'


function App() {

  const [token,setToken] = React.useState(null)

  const getToken = () => {
    let role = localStorage.getItem('role')
    setToken(role)
  }

  React.useEffect(() => {
    getToken()
  },[])

  return (
    !token ? <AuthNavigation /> : <AppNavigation role={token} />
    // <AppNavigation role={token} />
  );
}

export default App;
