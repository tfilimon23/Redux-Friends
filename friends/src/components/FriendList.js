import React from 'react';
import { connect } from 'react-redux';

class FriendList extends React.Component {
    render() {
        return (
            <div>
            <h2>Friend List</h2>
            {this.props.friends.map(friend=>(
                <h4>{friend.name}</h4>
            ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(
    mapStateToProps,
    {}
)(FriendList);