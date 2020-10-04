import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import firebase from "firebase";


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
} catch { }

export default function NavBar({ name, signedIn, isSuperUser=false}) {
  return (
    <Navbar className="NavBar">
      <Navbar.Brand>
        <Nav.Link href="/main">Code for Palestine Online Submitter</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      {(signedIn) ?
        <div class="userNav">
          <Nav.Link href="/pastproblems">Past Problems</Nav.Link>
          <Nav.Link href="/gists">Gists</Nav.Link>
          <Nav.Link href="/previous-submissions">Previous Submissions</Nav.Link>
          {(isSuperUser) ?
          <Nav.Link href="/admin">Admin Panel</Nav.Link>
          :
          null
          }
        </div>
        :
        null
      }


      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>

          {(signedIn) ? <a>signed in as {name}</a> : <a>You are not signed in</a>}
          {signedIn ? (
            <a
              className="singout-button"
              onClick={() => firebase.auth().signOut()}
            >
              Sign out
            </a>
          ) : null}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
