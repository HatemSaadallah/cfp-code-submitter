import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";


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

export default function NavBar({ name, signedIn, isSuperUser = false }) {
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

          {(signedIn) ? null: <a>You are not sign in</a>}
          {signedIn ? (
            <div className="signedIn">

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="profile">
                  <a className="nameUser">{name}</a>
                  <img className="profileImg" src={firebase.auth().currentUser.photoURL} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => firebase.auth().signOut()}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>
          ) : null}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
