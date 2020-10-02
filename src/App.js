import React, { useState } from "react";
import "./styles.css";
import Code from "./Code";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PastProblems from "./PastProblems";

var firebaseConfig = {
  apiKey: "AIzaSyAW7-NGHjYyEOUWZL9eIvSp-glELUXuq0E",
  authDomain: "inclass-qs.firebaseapp.com",
  databaseURL: "https://inclass-qs.firebaseio.com",
  projectId: "inclass-qs",
  storageBucket: "inclass-qs.appspot.com",
  messagingSenderId: "76230869433",
  appId: "1:76230869433:web:de34cca5ec6ecc92457668",
  measurementId: "G-151K89PMKH"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch {}

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
      // Avoid redirects after sign-in.
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
          <NavBar name="" signedIn={false} />
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
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/main">
            <Code />
          </Route>
          <Route path="/pastproblems">
            <PastProblems />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}
//  <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//             </ul>
//           </nav>
