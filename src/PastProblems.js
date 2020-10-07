import React from 'react';
import { pastproblems } from './data/weeklyQuestions';
import { Table } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import "./styling/styles.css";
import { Accordion, Card } from "react-bootstrap";

export default function PastProblems() {

  return (
    <div>
      { pastproblems.map(week => {
        return (
          <div>
              <Accordion >
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h1 className="week-in-past-problems">Week {week[0]["week"]} Problems</h1>
            </Accordion.Toggle>
            
              <Card>

                <Accordion.Collapse eventKey="0">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Problem</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    {week.map((problem, index) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{problem["qName"]}</td>
                            <td><ReactMarkdown source={problem["content"]} /></td>
                          </tr>
                        </tbody>
                      );
                    })}

                  </Table>
                </Accordion.Collapse>
              </Card>
            </Accordion>

          </div>
        );
      })}
    </div>
  )
}