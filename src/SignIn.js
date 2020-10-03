import React from 'react';
import './styles.css';
import NavBar from "./NavBar";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";


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

try {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
} catch { }


export default class SignIn extends React.Component {
    state = {
        isSignedIn: false,
        loading: false
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
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        );
    }
}
