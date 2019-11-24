import React, { Component } from 'react';

//Routing

class Login extends Component {
    render() {
        return(
            <div id="login-comp">
                <form className="form-signing">
                    <input id="email" className="form-control" placeholder="Email" required="" autoFocus=""></input>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                <p>
                    Don't have an accout? <a href="/signup">Sign up</a>
                </p>
            </div>
        )
    }
}

export default Login;