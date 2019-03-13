import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <nav>
        <Link to= "/home"> Home</Link> 
        <Link to = "/friends">Friends</Link>
      </nav>
      <h1>Friends</h1>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendList} />
      </div>
      </Router>
    );
  }
}

export default App;
