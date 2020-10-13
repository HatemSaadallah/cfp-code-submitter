import React, { useState, useRef, useEffect } from 'react';
import './styling/styles.css';
import './styling/profileStyles.css';
import { Button } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { ImCheckmark } from 'react-icons/im';

export default function Profile({ imageURL, name }) {
  function editAble() {
    document.getElementById('breif').contentEditable = 'true';
    document.getElementById('saveBtn').style.display = 'unset';
  }
  function editUnAble() {
    document.getElementById('breif').contentEditable = 'false';
    document.getElementById('saveBtn').style.display = 'none';
    console.log('brief changed.');
  }

  return (
    <div>
      <div className="container">
        <head></head>

        <img className="profileImage" src={imageURL} />
        <h1 id="username" className="profile_name">
          {name}
        </h1>
        <p className="breif" id="breif">
          add your brief here :3
        </p>
        <Button onClick={editAble}>
          <BiEdit />
        </Button>
        <Button id="saveBtn" onClick={editUnAble}>
          <ImCheckmark />
        </Button>
      </div>
    </div>
  );
}
