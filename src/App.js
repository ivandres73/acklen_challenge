import React from 'react';
import './App.css';

//Custom Components and routes
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact={true} path='/' render={() => (<Login/> )}/>
      <Route exact={true} path='/signup' render={() => (<Signup/> )}/>
      <Route exact={true} path='/login' render={() => (<Login/> )}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
