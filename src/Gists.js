import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
import Gist from 'super-react-gist' // <-- import the library
import { gists } from './data/gistsLinks';
import { Accordion, Card } from "react-bootstrap";


export default function Gists() {

    return (
        <div>

            
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
