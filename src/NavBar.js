import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyAW7-NGHjYyEOUWZL9eIvSp-glELUXuq0E',
  authDomain: 'inclass-qs.firebaseapp.com',
  databaseURL: 'https://inclass-qs.firebaseio.com',
  projectId: 'inclass-qs',
  storageBucket: 'inclass-qs.appspot.com',
  messagingSenderId: '76230869433',
  appId: '1:76230869433:web:de34cca5ec6ecc92457668',
  measurementId: 'G-151K89PMKH',
};
try {
  firebase.initializeApp(firebaseConfig);
} catch {
  console.log('An error occured');
}

export default function NavBar({ name, signedIn, isSuperUser }) {
  return (
    <Navbar className="NavBar">
      <Navbar.Brand>
        <Nav.Link href="/main">Code for Palestine Online Submitter</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      {signedIn ? (
        <div className="userNav">
          <NavLink className="NavLink" exact to="/pastproblems">
            Past Problems
          </NavLink>
          <NavLink className="NavLink" exact to="/gists">
            Gists
          </NavLink>
          <NavLink className="NavLink" exact to="/previous-submissions">
            Previous Submissions
          </NavLink>
          <NavLink className="NavLink" exact to="/office-hours">
            Sessions
          </NavLink>
          <NavLink className="NavLink" exact to="/TAs_info">
            TAs
          </NavLink>

          {isSuperUser ? <NavLink to="/admin">Admin Panel</NavLink> : null}
        </div>
      ) : null}

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {signedIn ? null : <span>You are not signed in</span>}
          {signedIn ? (
            <div className="signedIn">
              {/* <Dropdown> */}

              {/* <Dropdown.Toggle id="dropdown-basic" className="profile"> */}
              <NavLink to="profile">
                <span className="nameUser">{name}</span>
              </NavLink>
              <img
                alt="profile"
                className="profileImg"
                src={firebase.auth().currentUser.photoURL}
              />
            </div>
          ) : null}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
NavBar.defaultProps = {
  name: '',
  signedIn: false,
  isSuperUser: false,
};

NavBar.propTypes = {
  name: PropTypes.string,
  signedIn: PropTypes.bool,
  isSuperUser: false,
};
