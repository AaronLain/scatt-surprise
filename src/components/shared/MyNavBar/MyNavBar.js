import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavBar.scss';

class MyNavBar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
}

  render() {
    return (
      <div className="myNavBar">
        <h1>NavBar</h1>
        <button className="btn btn-info" onClick={this.logMeOut}>Logout</button>
      </div>
    );
  }
}

export default MyNavBar;
