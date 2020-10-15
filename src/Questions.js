import React from "react";
import "./styling/styles.css";
import ReactMarkdown from 'react-markdown';
import { Accordion, Card } from "react-bootstrap";
import zayanbir from './images/zayanbir.png';

export default function Questions({ questions, submissions }) {
  return (
    
    <div className="questions">
      {/* <a href="/casual_code" className="a_casual_code_btn" >
        <button type="button" className="casual_code_btn"> Submit Your Code Now</button>
      </a>  */}
      <img src={zayanbir} alt="Zayan Birthday" className="birthday"/>
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
