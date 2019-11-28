import React, { Component } from 'react';
import Logo from './assets/logo.png';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            password_confirm: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
    }

    handleCreateUser() {
        if (this.state.password !== this.state.password_confirm) {
            alert('Passwords dont match!');
            return;
        }

        axios.post('http://3.88.224.1/login/', this.state)
        //axios.post('http://localhost/user/', this.state)
        .then(response => {
            if (response.data.message == 'user already exist')
                alert('user already exist');
            else if (response.data.message == 'invalid password')
                alert('try another user');
            else
                alert('User created Succesfully!');
        }).catch(error => {
            console.error(error)
        })
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
                <img src={Logo} alt="logo"/>
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
                        name="password_confirm"
                        className="form-control"
                        placeholder="Password Confirmation"
                        onChange={this.handleInput}
                    />
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleCreateUser}>Sign up</button>
                <p>
                    Already have an account? <a href="/login">Log in</a>
                </p>
            </div>
        )
    }
}

export default Signup;