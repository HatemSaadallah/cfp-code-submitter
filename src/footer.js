import React from 'react';
import './styling/styles.css';
import firebase from 'firebase';

const Footer = () => (
  <div className="footer">
    <p>Contact a TA |</p>
    <p><a href="https://www.facebook.com/messages/t/HeatoMu">Hatem</a></p>
    <p><a href="https://www.facebook.com/messages/t/hanaa.zaqout.351">Hanaa</a></p>
    <p><a href="https://www.facebook.com/messages/t/abdullah.baraka.5">Abdullah</a></p>
    <p><a href="https://www.facebook.com/messages/t/zayan.hassan.1">Zayan</a></p>
    <br />
    <p>Links |</p>
    <p><a href="http://www.codeforpalestine.ps/">Code For Palestine</a></p>
    <p><a href="https://www.w3schools.com/python/python_getstarted.asp">W3schools</a></p>
    <p><a href="https://docs.python.org/3.8/">Python documentation</a></p>
    <p><a href="https://kahoot.it/">Kahout</a></p>

    <button type="button" onClick={() => firebase.auth().signOut()} className="sign-out-button"> Sign out  </button>
  </div>
);

export default Footer;
