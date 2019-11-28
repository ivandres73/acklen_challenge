import React, { Component } from 'react';
import Logo from './assets/logo.png';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <img src={Logo}/>
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
                <p>
                    Already have an account? <a href="/login">Log in</a>
                </p>
            </div>
        )
    }
}

export default Signup;