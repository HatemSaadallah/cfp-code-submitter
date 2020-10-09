import React from 'react';
import './styling/styles.css';
export default function OfficeHours(){
    return(
        <div className="office-hours-container">
       
                <h2>Next session topics: </h2>
               
                    <iframe className="office-hours-sheet" src="https://sheet2api.com/table/Aut0uCtvTSQJ/next-session/Sheet1"
                    width="100%" height="600" frameBorder="0"></iframe>
                
                <p><a href="https://zoom.us/j/94592609039">Zoom Session Link</a></p>
            
        
            
            <h2>Office Hours:</h2>
            <iframe className="office-hours-sheet" src="https://sheet2api.com/table/o9tywNtETM2Q/cfp-y1-office-hours/Week2"
            width="100%" height="600" frameBorder="0"></iframe>
        </div>
    );
}
