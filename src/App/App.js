import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavBar from '../components/shared/MyNavBar/MyNavBar';
import EditScat from '../components/pages/EditScat/EditScat';
import Home from '../components/pages/Home/Home';
import SingleScat from '../components/pages/SingleScat/SingleScat';
import NewScat from '../components/pages/NewScat/NewScat';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <MyNavBar />
        <h2>HELLO THERE</h2>
        <Auth />
        <EditScat />
        <NewScat />
        <SingleScat />
        <Home />
        <button className="btn btn-success">CRAP</button>
      </div>
    );
  }
}

export default App;
