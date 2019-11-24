import React, { Component } from 'react';

//Routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Signup';

class Login extends Component {
    render() {
        return(
            <div id="login-comp">
                <form className="form-signing">
                    <input id="email" className="form-control" placeholder="Email" required="" autoFocus=""></input>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""></input>
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
            </div>
        )
    }
}

export default Login;