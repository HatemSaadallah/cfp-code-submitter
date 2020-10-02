import React from "react";
import "./styles.css";

export default function Questions({ questions }) {
  return (
    <div className="questions">
      {questions.map(question => {
        return (
          <div>
            <h3>Q{question["num"]}- {question["qName"]}</h3>
            <p>{question["content"]}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
