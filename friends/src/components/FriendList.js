import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

class FriendList extends React.Component {
state = {
    name: '',
    age: '',
    email: ''
}


  componentDidMount() {
    this.props.getFriends();
  }  

  handleChanges = e => {
    this.setState ({
            ...this.state,
            [e.target.name]: e.target.value
    });
};

    render() {
        return (
            <div>
            <h3>Welcome to the club!</h3>
            {this.props.friends.map(friend=>(
                <h5>{friend.name}</h5>
            ))}
            <form onSubmit ={this.addFriend}>
            <input
            type = 'text'
            name = 'name'
            value = {this.state.name}
            onChange = {this.handleChanges}
            placeholder = 'name'
            />
            <input
             type = 'number'
             name = 'age'
             value = {this.state.age}
             onChange = {this.handleChanges}
             placeholder = 'age'
            />
            <input
             type = 'text'
             name = 'email'
             value = {this.state.email}
             onChange = {this.handleChanges}
             placeholder = 'email'
            />
            <button>Add Friend</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
});

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendList);