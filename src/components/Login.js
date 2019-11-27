import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            local_username: '',
            local_password: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    logIn() {
        axios.get('http://localhost/user/'+this.state.local_username)//line changed in production
        .then(response => {
            console.log('response: ',response.data)
            //this.setState({users: response.data})
        }).catch(error => {
            console.error(error)
            alert('User not found');
        })
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log('users: ', this.state.local_username);
    }

    render() {
        //console.log(this.state.users);
        const users = this.state.users;
        
        return(
            <div>
                <form className="form-signing">
                    <input
                        name="local_username"
                        className="form-control"
                        placeholder="Username"
                        autoFocus=""
                        onChange={this.handleInput}
                    />
                    <input
                        type="password"
                        name="local_password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleInput}
                    />
                </form>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.logIn}>Log in</button>
                <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
                {
                    users.map(a => <h1>{a.username}</h1>)
                }
            </div>
        )
    }
}

export default Login;