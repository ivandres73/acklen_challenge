import React, { Component } from 'react';

class Login extends Component {
    render() {
        return(
            <form className="form-signing">
                <input id="email" className="form-control" placeholder="Email" required="" autoFocus=""></input>

            </form>
        )
    }
}

export default Login;