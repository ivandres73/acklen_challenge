import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return(
            <form className="form-signing">
                <input id="username" className="form-control" placeholder="username" required="" autoFocus=""></input>

            </form>
        )
    }
}

export default Signup;