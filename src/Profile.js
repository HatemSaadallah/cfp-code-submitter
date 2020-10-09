import React from 'react';
import './styling/styles.css';
import './styling/profileStyles.css';



export default function Profile({ imageURL, name }) {
    return (
        <div>
        <div className="container">
            <head>
            </head>

            <img className="profileImage" src={imageURL} />
            <h1>{name}</h1>
            
            
        </div>
        
        </div>
            
           
    );
}
