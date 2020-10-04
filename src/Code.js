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



import { Button, Menu, MenuItem } from '@material-ui/core';


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

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [anchorEl, setanchorEl] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [message, setMessage] = useState("Select Question to Submit");


  const recordButtonPosition = (event) => {
    console.log(event.currentTarget);
    setanchorEl(event.currentTarget);
    setMenuOpen(true);
  }


  return (
    <div>
      <Questions questions={weeksproblem} className="currentQs" />

      <form className="codeSubmission">

        <div className="selectProblem">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={recordButtonPosition}>
            {message}
        </Button>
          <Menu
            className="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setanchorEl(false)}
          >
            {
              weeksproblem.map(item => {
                return (
                  <div>
                    <MenuItem onClick={(event) => { 
                      setSelectedQuestion(event.nativeEvent.target.outerText);
                      setMessage(event.nativeEvent.target.outerText);
                      setanchorEl(false);
                    }}>{item["qName"]}</MenuItem>
                  </div>
                );
              })
            }
          </Menu>
        </div>
        <AceEditor
          className="theEditor"
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
            try{
              db.collection(name).doc(selectedQuestion).set({
              code: code != null ? code : null,
              nameOfQuestion: selectedQuestion,
            })
              .then(function () {
                alert("Code Sent successfully");
              })
              .catch(function (error) {
                alert("Error sending, please contact Hatem");
              });
            }
            catch (FirebaseError){
              alert("Please select a question to submit");
            }
          }}
        >
          Send Code
        </button>
      </form>
    </div >
  );
}
