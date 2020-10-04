import React from "react";
import "./styles.css";
import ReactMarkdown from 'react-markdown';
import { Accordion, Card } from "react-bootstrap";

export default function Questions({ questions }) {
  return (
    <div className="questions">
      {questions.map(question => {
        return (
          <div>
            <Accordion defaultActiveKey="1">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={question["num"]}>
                <h3>Q{question["num"]}- {question["qName"]}</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={question["num"]}>
                <p><ReactMarkdown source={question["content"]} /></p>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
