import React from 'react';
import Gist from 'super-react-gist';
import { Accordion, Card } from 'react-bootstrap';
import { gists } from './data/gistsLinks';

export default function Gists() {
  return (
    <div>
      {gists.map((gist) => (
        <div>
          <Accordion className="gists-card">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                {gist.gistName}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Gist
                  url={gist.url}
                  file={gist.fileName}
                />
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>
      ))}

    </div>
  );
}
