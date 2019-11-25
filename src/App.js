import React from 'react';
import './App.css';

//Custom Components and routes
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  console.log('hola soy ivan');
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Route exact={true} path='/' render={() => (<Login/> )}/>
      <Route exact={true} path='/signup' render={() => (<Signup/> )}/>
      <Route exact={true} path='/login' render={() => (<Login/> )}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
