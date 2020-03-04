import React, { Component } from 'react';
import './Auth.css';
import axios from 'axios';

class Auth extends Component {
    state = {
        username: '',
        password: '',

        error: ''
    }

    loginHandler = () => {
        axios.post('http://localhost:8080/login', { username: this.state.username, password: this.state.password })
            .then(result => {
                if (result.data.auth) {
                    this.props.history.push('/weather');
                } else {
                    this.setState({ error: result.data.message });
                }
            });

    }

    render() {
        return (
            <div className="LoginPage">
                <div className="LoginForm">
                    <p>Please enter your username and password</p>
                    <p className="ErrorMessage">{this.state.error}</p>
                    <input type="text" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                    <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                    <button onClick={this.loginHandler}>Log in</button>
                </div>
            </div>
        )
    }
}

export default Auth;