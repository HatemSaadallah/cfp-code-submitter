import React from 'react';
import { pastproblems } from './weeklyQuestions';
import { Table } from 'react-bootstrap';

export default function PastProblems() {

  return (
    <div>
      { pastproblems.map(week => {
        return (
          <div>
            <h1>Week {week[0]["week"]}</h1>
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
                      <td>{index+1}</td>
                      <td>{problem["qName"]}</td>
                      <td>{problem["content"]}</td>
                    </tr>
                  </tbody>
                );
              })}

            </Table>
          </div>
        );
      })}
    </div>
  )
}