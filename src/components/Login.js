import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Logo from './assets/logo.png';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            toHome: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        console.log('state', this.state);
        axios.post('http://3.88.224.1/login/', this.state)
        //axios.post('http://localhost/login/', this.state)
        .then(response => {
            console.log('response: ', response.data)
            if (response.data.message == 'invalid password')
                alert('Incorrect password');
            else if (response.data.username != null)
                this.setState({ toHome: true})
            else
                alert('User doesnt exist');
        }).catch(error => {
            console.error(error)
        })
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log('users: ', this.state.username);
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/home'/>
        }

        return(
            <div>
                <img src={Logo} alt="logo"/>
                <form className="form-signing">
                    <input
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        autoFocus=""
                        onChange={this.handleInput}
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleInput}
                    />
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLogin}>Log in</button>
                <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        )
    }
}

export default Login;