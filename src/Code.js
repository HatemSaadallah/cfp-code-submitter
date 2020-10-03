import React, { useState } from "react";
import "./styles.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import * as firebase from 'firebase';
import Questions from "./Questions";
import weeksproblem from "./weeklyQuestions";

import AceEditor from "react-ace";


import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

var firebaseConfig = {
  apiKey: "AIzaSyBQLxaTvjqJKTLeNEae1J2ZeufVUpQfnLM",
  authDomain: "cfp-code-submitter.firebaseapp.com",
  databaseURL: "https://cfp-code-submitter.firebaseio.com",
  projectId: "cfp-code-submitter",
  storageBucket: "cfp-code-submitter.appspot.com",
  messagingSenderId: "483775167429",
  appId: "1:483775167429:web:6c0f89494372bc871829ac",
  measurementId: "G-L6BZEQ6ZJ9"
};

try {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} catch { }

var db = firebase.firestore();
export default function Code({ name }) {
  const [code, setCode] = useState(
    `def main():
  pass
if __name__ == "__main__":
  main()`
  );

  const [selectedQuestion, setSelectedQuestion] = useState(
    weeksproblem[0]["qName"]
  );
  
  return (
    <div>
      <Questions questions={weeksproblem} className="currentQs" />

      <form className="codeSubmission">
        <p>Select the problem</p>
        {weeksproblem.map(item => {
          return (
            <div
              onChange={event => {
                console.log(event.target.value, name, code);

                setSelectedQuestion(event.target.value);
              }}
            >
              <input type="radio" value={item["qName"]} name="problem" />
              <label>{item["qName"]}</label>
              <br />
            </div>
          );
        })}
          <AceEditor
            className = "theEditor"
            placeholder="Insert your Python code"
            mode="python"
            theme="monokai"
            name="blah2"
            onChange={(code) => setCode(code)}
            fontSize={20}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }} />



        <button
          type='button'
          className="send-button"
          onClick={() => {
            console.log("I am clicked");
            db.collection(name).doc(selectedQuestion).set({
              code: code
            })
              .then(function () {
                alert("Code Sent successfully");
              })
              .catch(function (error) {
                alert("Error sending, please contact Hatem");
                // console.error("Error writing document: ", error);
              });

          }}
        >
          Send Code
        </button>
      </form>
    </div>
  );
}
