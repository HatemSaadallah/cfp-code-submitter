import React from 'react';
import './styling/styles.css';
export default function OfficeHours(){
    return(
        <div className="container">
            <h1>Welcome, Student.</h1>
            <hr></hr>
            <h2>Office Hours:</h2>
            <iframe className="office-hours-sheet" src="https://sheet2api.com/table/o9tywNtETM2Q/cfp-y1-office-hours/Week2"
            width="100%" height="600" frameBorder="0"></iframe>
        </div>
    );
}