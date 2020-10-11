import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


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
          <NavLink exact to="/pastproblems">Past Problems</NavLink>
          <NavLink exact to="/gists">Gists</NavLink>
          <NavLink exact to="/previous-submissions">Previous Submissions</NavLink>
          <NavLink exact to="/office-hours">Sessions</NavLink>
          <NavLink exact to="/TAs_info">TAs</NavLink>
          {(isSuperUser) ?
            <NavLink to="/admin">Admin Panel</NavLink>
            :
            null
          }
        </div>
        :
        null
      }


      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>

          {(signedIn) ? null: <a>You are not signed in</a>}
          {signedIn ? (
            <div className="signedIn">

              {/* <Dropdown> */}
              
                {/* <Dropdown.Toggle id="dropdown-basic" className="profile"> */}
                  <Nav.Link href="profile"><a className="nameUser">{name}</a></Nav.Link>
                  <img className="profileImg" src={firebase.auth().currentUser.photoURL} />
                {/* </Dropdown.Toggle> */}

                {/* <Dropdown.Menu>
                  
                  <Dropdown.Item 
                    onClick={() => firebase.auth().signOut()}>Sign Out</Dropdown.Item>
                </Dropdown.Menu> */}
              {/* </Dropdown> */}

            </div>
          ) : null}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
