import React from 'react';
import PropTypes from 'prop-types';
import './styling/styles.css';
import ReactMarkdown from 'react-markdown';
import { Accordion, Card } from 'react-bootstrap';

export default function Questions({ questions, submissions }) {
  return (
    <div className="questions">
      {/* <a href='/casual_code' className='a_casual_code_btn' >
        <button type='button' className='casual_code_btn'> Submit Your Code Now</button>
      </a>  */}
      {questions.map(question => {
        return (
          <div>
            <Accordion defaultActiveKey='1'>
              
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={question['num']}>
                <h3>Q{question['num']}- {question['qName']}</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={question['num']}>
                <p><ReactMarkdown source={question['content']} /></p>
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
Questions.defaultProps = {
  questions: '',
  submissions: '',
};

Questions.propTypes = {
  questions: PropTypes.string,
  submissions: PropTypes.string,
};
