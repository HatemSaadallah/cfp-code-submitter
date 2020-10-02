import React, { useState } from "react";
import "./styles.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import firebase from "firebase";
import Questions from "./Questions";
import weeksproblem from "./weeklyQuestions";

// import AceEditor from 'react-ace';

// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/theme-github";

var firebaseConfig = {
  apiKey: "AIzaSyAW7-NGHjYyEOUWZL9eIvSp-glELUXuq0E",
  authDomain: "inclass-qs.firebaseapp.com",
  databaseURL: "https://inclass-qs.firebaseio.com",
  projectId: "inclass-qs",
  storageBucket: "inclass-qs.appspot.com",
  messagingSenderId: "76230869433",
  appId: "1:76230869433:web:de34cca5ec6ecc92457668",
  measurementId: "G-151K89PMKH"
};

try {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} catch {}
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
  // const [name, setName] = firebase.auth().currentUser.displayName;

  return (
    <div>
      <Questions questions={weeksproblem} className="currentQs" />

      <form className="codeSubmission">
        <div className="codeblock">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            tabSize={2}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              height: 320
            }}
          />
        </div>
        {
          // <AceEditor
          //   placeholder="Placeholder Text"
          //   mode="python"
          //   theme="monokai"
          //   name="blah2"
          //   onLoad={() => {}}
          //   onChange={code => {
          //     console.log(code);
          //     setCode(code);
          //   }}
          //   fontSize={12}
          //   showPrintMargin={true}
          //   showGutter={true}
          //   highlightActiveLine={true}
          //   value={code}
          //   setOptions={{
          //     enableBasicAutocompletion: true,
          //     enableLiveAutocompletion: true,
          //     enableSnippets: true,
          //     showLineNumbers: true,
          //     tabSize: 2
          //   }}
          // />
        }
        <p>Select the problem</p>
        {weeksproblem.map(item => {
          return (
            <div
              onChange={event => {
                console.log(event.target.value);
                setSelectedQuestion(event.target.value);
              }}
            >
              <input type="radio" value={item["qName"]} name="problem" />
              <label>{item["qName"]}</label>
              <br />
            </div>
          );
        })}

        <button
          className="send-button"
          onClick={() => {
            db.collection(name)
              .doc(selectedQuestion)
              .set({
                code: code
              })
              .then(function() {
                console.log("Question sent successfully!");
              })
              .catch(function(error) {
                console.error("Error sending question: ", error);
              });
          }}
        >
          Send Code
        </button>
      </form>
    </div>
  );
}
