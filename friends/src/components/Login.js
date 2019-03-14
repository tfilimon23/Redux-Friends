import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/friends');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                <input
                type= 'text'
                name= 'username'
                value={this.state.credentials.username}
                onChange={this.handleChanges}
                />
                <input
                type= 'password'
                name= 'password'
                value={this.state.credentials.password}
                onChange={this.handleChanges}
                />
                <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { login }
)(Login);