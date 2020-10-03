import React, { useState } from "react";
import "./styles.css";
import Code from "./Code";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PastProblems from "./PastProblems";
import Gists from './Gists';


var firebaseConfig = {
  apiKey: "AIzaSyBQLxaTvjqJKTLeNEae1J2ZeufVUpQfnLM",
  authDomain: "cfp-code-submitter.firebaseapp.com",
  databaseURL: "https://cfp-code-submitter.firebaseio.com",
  projectId: "cfp-code-submitter",
  storageBucket: "cfp-code-submitter.appspot.com",
  messagingSenderId: "483775167429",
  appId: "1:483775167429:web:6c0f89494372bc871829ac",
  measurementId: "G-L6BZEQ6ZJ9"
};

try{firebase.initializeApp(firebaseConfig);
firebase.analytics();}catch{}

export default class App extends React.Component {
  state = {
    isSignedIn: false
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <NavBar name="hatem" signedIn={false} />
          <h1 className="welcome-msg">
            Welcome to All Code for Palestine Students, TAs, and Instructors
          </h1>
          <p className="signin-msg">Please sign-in:</p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <div>
        <Router>
          <div>

            <NavBar
              name={firebase.auth().currentUser.displayName}
              signedIn={true}
            />
            <Switch>

              <Route path="/main">
                <Code name={firebase.auth().currentUser.displayName}/>
              </Route>
              <Route path="/pastproblems">
                <PastProblems />
              </Route>
              <Route path="/gists">
                <Gists />
              </Route>
              <Route path="/">
              <Code name={firebase.auth().currentUser.displayName}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
