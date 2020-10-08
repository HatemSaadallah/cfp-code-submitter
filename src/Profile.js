import React from 'react';
import './styling/styles.css';
import './styling/profileStyles.css';
import firebase from "firebase";



export default function Profile({ imageURL, name }) {
    return (
        <div className="container">
            <head>
            </head>

            <img className="profileImage" src={imageURL} />
            <h1>{name}</h1>
            <button onClick={() => firebase.auth().signOut()} className="sign-out-button"> Sign out  </button>

        </div>
            
           
    );
}
