import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styling/styles.css';
import './styling/profileStyles.css';
import { Button } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { ImCheckmark } from 'react-icons/im';
import firebase from 'firebase';

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
  console.log('An error occurred');
}

const realdb = firebase.database();

export default function Profile({ imageURL, name }) {
  const [bio, setBio] = useState('Add your bio');
  useEffect(() => {
    realdb.ref('bio').on('value', (snapshot) => {
      snapshot.forEach((snap) => {
        if (snap.key === name) {
          setBio(snap.val().sBio);
        }
      });
    });
  }, []);
  function editAble() {
    document.getElementById('breif').contentEditable = 'true';
    document.getElementById('saveBtn').style.display = 'unset';
    document.getElementById('breif').classList.add('breif_input');
  }
  function editUnAble() {
    document.getElementById('breif').contentEditable = 'false';
    document.getElementById('saveBtn').style.display = 'none';
    document.getElementById('breif').classList.remove('breif_input');
  }
  return (
    <div>
      <div className="container">
        <img className="profileImage" src={imageURL} alt="profile" />
        <h1 id="username" className="profile_name">
          {name}
        </h1>
        <p id="breif" className="breif" onChange={(text) => console.log(text)}>
          {bio}
        </p>
        <Button onClick={() => {
          editAble(); }
          }
        >
          Edit
          <BiEdit onChange={(e) => { console.log(e) }} />
        </Button>
        <Button
          id="saveBtn"
          onClick={() => {
            editUnAble();
            const sBio = document.getElementById('breif').innerHTML;
            setBio(sBio);
            realdb
              .ref(`bio/${name}`)
              .set({
                name,
                sBio,
              })
              .then(() => {
                console.log('Bio sent successfully');
              })
              .catch((error) => {
                console.log('error sending bio');
              });
          }}
        >
          Save
          <ImCheckmark />
        </Button>
      </div>
    </div>
  );
}
Profile.defaultProps = {
  imageURL: '',
  name: '',
};

Profile.propTypes = {
  imageURL: PropTypes.string,
  name: PropTypes.string,
};
