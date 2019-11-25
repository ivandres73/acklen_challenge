import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleInput(e) {
        console.log(e.target.name, e.target.value);
    }

    render() {
        return(
            <div>
                <form className="form-signing">
                    <input
                        name="username"
                        className="form-control"
                        placeholder="username"
                        onChange={this.handleInput}
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleInput}
                    />
                    <input
                        type="password"
                        name="password confirm"
                        className="form-control"
                        placeholder="Password Confirmation"
                        onChange={this.handleInput}
                    />
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </div>
        )
    }
}

export default Signup;