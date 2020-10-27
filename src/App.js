import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './styling/styles.css';
import Code from './Code';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import PastProblems from './PastProblems';
import Gists from './Gists';
import TAs from './TAs';
import Footer from './footer';
import TAs_info from './TAs_info';
import Casual_Code from './casual_code';
import PreviousSubmissions from './PreviousSubmissions';
import Profile from './Profile';
import OfficeHours from './OfficeHours';
import zayanbir from './images/zayanbir.png';

const firebaseConfig = {
  apiKey: 'AIzaSyBQLxaTvjqJKTLeNEae1J2ZeufVUpQfnLM',
  authDomain: 'cfp-code-submitter.firebaseapp.com',
  databaseURL: 'https://cfp-code-submitter.firebaseio.com',
  projectId: 'cfp-code-submitter',
  storageBucket: 'cfp-code-submitter.appspot.com',
  messagingSenderId: '483775167429',
  appId: '1:483775167429:web:6c0f89494372bc871829ac',
  measurementId: 'G-L6BZEQ6ZJ9',
};

try {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} catch {
  console.log('An error occured');
}
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { isSignedIn } = this.state;
    if (!isSignedIn) {
      return (
        <div>
          <head>
            <title>CFP Code Submitter</title>
          </head>
          <NavBar name="hatem" signedIn={false} />
          <h1 className="welcome-msg">
            Welcome to All Code for Palestine Students, TAs, and Instructors
          </h1>
          <p className="signin-msg">Please sign-in:</p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <h4 className="version">v 1.3.0 beta</h4>
          <h5 className="version">
            Thanks to
            <a href="https://github.com/Mohammed-Atalah">Mohammed Atalah</a>
            &
            <a href="https://github.com/AhmadHerzallah">Ahmad Herzallah</a>
          </h5>
          {/* <h4 className="notify">The bug of flickering login page is finally solved!!! </h4> */}
        </div>
      );
    }
    return (
      <div>
        <head>
          <title>CFP Code Submitter</title>
        </head>
        <Router>
          <div>
            <NavBar
              name={firebase.auth().currentUser.displayName}
              signedIn="true"
              isSuperUser={
                firebase.auth().currentUser.uid ===
                  'QDQ3iECmX1RIu2mJkNlQJHIlmkg1' ||
                firebase.auth().currentUser.uid ===
                  'fZlj3iLifVM49ixPPzucktMgrkq2' ||
                firebase.auth().currentUser.uid ===
                  'w80C141S5CQA8qcWGadFlzHuAbO2'
              }
            />
            <Switch>
              <Route path="/main">
                <Code name={firebase.auth().currentUser.displayName} />
              </Route>
              <Route path="/pastproblems">
                <PastProblems />
              </Route>
              <Route path="/gists">
                <Gists />
              </Route>
              <Route path="/previous-submissions">
                <PreviousSubmissions
                  nameOfUser={firebase.auth().currentUser.displayName}
                />
              </Route>
              <Route path="/office-hours">
                <OfficeHours
                  nameOfUser={firebase.auth().currentUser.displayName}
                />
              </Route>
              <Route path="/TAs_info">
                <TAs_info
                  nameOfUser={firebase.auth().currentUser.displayName}
                />
              </Route>
              <Route path="/profile">
                <Profile
                  imageURL={firebase.auth().currentUser.photoURL}
                  name={firebase.auth().currentUser.displayName}
                />
              </Route>
              <Route path="/admin">
                {firebase.auth().currentUser.uid ===
                  'QDQ3iECmX1RIu2mJkNlQJHIlmkg1' ||
                firebase.auth().currentUser.uid ===
                  'fZlj3iLifVM49ixPPzucktMgrkq2' ||
                firebase.auth().currentUser.uid ===
                  'w80C141S5CQA8qcWGadFlzHuAbO2' ? (
                  <TAs nameOfUser={firebase.auth().currentUser.displayName} />
                ) : (
                  <h1>Sorry You do not have permission to view this page</h1>
                )}
              </Route>
              <Route path="/">
                <Code name={firebase.auth().currentUser.displayName} />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
