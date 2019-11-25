import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return(
            <div className="sigup-comp">
                <form className="form-signing">
                    <input id="username" className="form-control" placeholder="username" required="" autoFocus=""></input>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""></input>
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </div>
        )
    }
}

export default Signup;