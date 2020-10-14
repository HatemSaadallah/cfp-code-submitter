import React from 'react';
import PropTypes from 'prop-types';
import './styling/styles.css';
import './styling/profileStyles.css';
import { Button } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { ImCheckmark } from 'react-icons/im';

export default function Profile({ imageURL, name }) {
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
        <p id="breif" className="breif">
          add your brief here :3
        </p>
        <Button onClick={editAble}>
          Edit
          <BiEdit />
        </Button>
        <Button id="saveBtn" onClick={editUnAble}>
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
