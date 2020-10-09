import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
import Gist from 'super-react-gist' // <-- import the library
import { gists } from './data/gistsLinks';
import { Accordion, Card } from "react-bootstrap";


export default function Gists() {

    return (
        <div>

            <Accordion className="gists-card  next-session-topics-card" >
                <h2>Next session topics: </h2>
                <Card>
                    <iframe className="office-hours-sheet" src="https://sheet2api.com/table/Aut0uCtvTSQJ/next-session/Sheet1"
                    width="100%" height="600" frameBorder="0"></iframe>
                </Card>
            </Accordion>
            {gists.map((gist) => {
                return (
                    <div>
                        <Accordion className="gists-card" >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {gist["gistName"]}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Gist url={gist["url"]}
                                        file={gist["fileName"]} />
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        
                    </div>
                );
            })}
            
                        
        </div>
    );

}
