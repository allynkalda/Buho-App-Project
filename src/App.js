import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/auth/Landing'
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import ShowProfile from './components/profile/ShowProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={ShowProfile} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
