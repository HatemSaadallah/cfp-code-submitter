import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import firebase from 'firebase';
import './styling/styles.css';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import { weeks } from './data/weeklyQuestions';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBQLxaTvjqJKTLeNEae1J2ZeufVUpQfnLM',
  authDomain: 'cfp-code-submitter.firebaseapp.com',
  databaseURL: 'https://cfp-code-submitter.firebaseio.com',
  projectId: 'cfp-code-submitter',
  storageBucket: 'cfp-code-submitter.appspot.com',
  messagingSenderId: '483775167429',
  appId: '1:483775167429:web:6c0f89494372bc871829ac',
  measurementId: 'G-L6BZEQ6ZJ9',
};

try {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} catch {
  console.log('An error occurred');
}

async function name(nameOfStudent) {
  const snapshot = await firebase.firestore().collection(nameOfStudent).get();
  const output = [];
  snapshot.docs.map((doc) => {
    const temp = {
      qn: doc.data().nameOfQuestion,
      code: doc.data().code,
      week: doc.data().week,
      grade: doc.data().grade,
    };
    output.push(temp);
    return 0;
  });
  return output;
}

const realdb = firebase.database();

export default function PreviousSubmissions({ nameOfUser }) {
  const [studentCode, setStudentCode] = useState([]);
  const [notesRet, setNotesRet] = useState({});
  const [note, setNote] = useState();
  const [studentSelection, setStudentSelection] = useState(weeks[0].value);

  useEffect(() => {
    name(nameOfUser).then((data) => {
      setStudentCode(data);
    });

    realdb.ref('notes').on('value', (snapshot) => {
      const allNotes = {};
      snapshot.forEach((snap) => {
        if (snap.key === nameOfUser) {
          allNotes[snap.key] = snap.val();
        }
      });
      setNotesRet(allNotes);
    });
  }, []);
  const note_id = `note-${Date.now()}`;
  return (
    <div>
      <h1 className="previousSubsWelcomeMessage">
        Hello
        {nameOfUser}
      </h1>
      <h3 className="previousSubsWelcomeMessage">Here are your previous submissions</h3>
      <Select
        className="selector"
        options={weeks}
        onChange={(e) => {
          setStudentSelection(e.value);
        }}
      />

      {studentCode.map((item_sp) => {
        let q = item_sp.qn;
        if (item_sp.week == studentSelection) return (
          <div>
            <div className="note_div">
              <h1>{item_sp.qn}</h1>
              <h3>{item_sp.grade}</h3>
            </div>
            <SyntaxHighlighter 
              language="python" 
              style={docco} 
              className="previous-s-container">
              {item_sp.code}
            </SyntaxHighlighter>
            <div className="note_div">
              <h3>Notes:</h3>
              {
                Object.prototype.hasOwnProperty.call(notesRet, nameOfUser) 
                  ?
                  (
                    Object.entries(notesRet[nameOfUser]).map((item) => 
                    {
                      return (
                        <div>
                          {Object.entries(item[1]).map(itemChild => {
                            if (itemChild[1].question_name == item_sp.qn)
                              return (
                                <div>
                                  <h4>{itemChild[1].nameOfUser}</h4>
                                  <p>{itemChild[1].note}</p>
                                </div>
                              )
                            else return (<span></span>)
                          })}
                        </div>
                      );

                    })
                  ) : <p>Theres no comments here</p>
              }
            </div>
            <div className="note_div">
              <hr className ="hr_send"/>
              <textarea className="note_input" id="text_area" onChange={
                (text) => setNote(text.target.value)}></textarea>
              <Button variant="primary" className="note_btn center" onClick={() => {
                let question_name = item_sp.qn;
                if (note === undefined) {
                  console.log("well, that was an undefined value :), ")
                  alert("Add a note to send :)")
                } else if (note === '') {
                  console.log("well, that was an undefined value :), ")
                  alert("Add a note to send :)")
                } else {
                  realdb.ref(`notes/${nameOfUser}/${question_name}/${note_id}`)
                    .set({
                      nameOfUser,
                      note,
                      note_id,
                      question_name
                    })
                    .then(() => {
                      console.log("Note sent successfully");
                    }).catch(error => {
                      console.log("An error occurred", error);
                    });
                }
              }}
              >
                Send note
              </Button>

            </div>
            <hr className="hr_q" />
          </div>);
      })}

    </div>
  );
}
PreviousSubmissions.defaultProps = {
  nameOfUser: '',
};

PreviousSubmissions.propTypes = {
  nameOfUser: PropTypes.string,
};
