import React from "react";
import './styling/styles.css';
import firebase from "firebase";


const Footer = () => (
  <div className="footer">
    <p>Contact |</p>
    
    <p><a href="https://www.facebook.com/messages/t/HeatoMu">Hatem</a></p>
    <p><a href="https://www.facebook.com/messages/t/hanaa.zaqout.351">Hanaa</a></p>
    <p><a href="https://www.facebook.com/messages/t/abdullah.baraka.5">Abdullah</a></p>
    <p><a href="https://www.facebook.com/t/zayan.hassan.1">Zayan</a></p>
    <button onClick={() => firebase.auth().signOut()} className="sign-out-button"> Sign out  </button>
  </div>
);

export default Footer;