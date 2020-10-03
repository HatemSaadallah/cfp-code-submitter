import React from "react";
import "./styles.css";
import ReactMarkdown from 'react-markdown';

export default function Questions({ questions }) {
  return (
    <div className="questions">
      {questions.map(question => {
        return (
          <div>
       
            <h3>Q{question["num"]}- {question["qName"]}</h3>
            <p><ReactMarkdown source={question["content"]}/></p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
