import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Dropdown } from "react-bootstrap";


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

async function name(nameOfStudent) {
    const snapshot = await firebase.firestore().collection(nameOfStudent).get()

    return snapshot.docs.map(doc =>
        doc.data().code
    )
}

async function nameOfQuestion(nameOfStudent) {
    const snapshot = await firebase.firestore().collection(nameOfStudent).get()
    let qNames = [];
    snapshot.docs.map(doc => {
        qNames.push(doc.Nf.key.path.segments[6]);
    })
    return qNames;
}

async function noteRetrieve(nameOfStudent, nameOfQuestion) {
    const snapshot = await firebase.firestore().collection(nameOfStudent).doc(nameOfQuestion).collection("notes").get()
    let output = [];
    snapshot.docs.map(doc => {
        output.push(doc.data())
    })
    return output;
}
var db = firebase.firestore();

const studentsNames = [
    "Ahmad Herzallah",
    "Ahmad Mortaja",
    "Hind Wihaidi",
    "Hosny Omar Arfat Al-khatib",
    "Mohammed Eyad Atalah",
    "Kareem Fadi",
    "hadil owda",
    "Abdalrahman Abu Nimer",
    "Dina Saqer",
    "Eren yeager",
    "Rama Al Zeer",
    "diyar mershed",
    "shimaa azoom",
    "Hassan Jouda",
    "Rawaa Zaqqut",
    "Hatem Saadallah"
]
export default function TAs({ nameOfTA }) {
    const [studentCode, setStudentCode] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [questionName, setQuestionName] = useState([]);
    const [note, setNote] = useState([]);
    // useEffect(() => {
    //     name("Hatem Saadallah").then((data) => {
    //         setStudentCode(data)
    //         // console.log([0])
    //     });
    // }, []);

    return (
        <div>
            <h1>Hello from Admin</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select a student
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {studentsNames.map(item => {
                        return (
                            <Dropdown.Item onClick={(e) => {
                                setStudentName(e.nativeEvent.target.outerText);
                                name(e.nativeEvent.target.outerText).then((data) => {
                                    setStudentCode(data)
                                });
                                nameOfQuestion(e.nativeEvent.target.outerText).then(data => {
                                    setQuestionName(data);
                                })
                                questionName.map(qname => {
                                    nameOfQuestion(e.nativeEvent.target.outerText).then(data => {
                                        console.log(noteRetrieve(e.nativeEvent.target.outerText, data));
                                    })
                                    // console.log(noteRetrieve(e.nativeEvent.target.outerText, qname));
                                })
                                
                            }}>{item}</Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            {<h1>{studentName}</h1>}
            {studentCode.map((code, index) => {
                return (
                    <div>
                        <h1>{questionName[index]}</h1>
                        <SyntaxHighlighter language="python" style={docco}>
                            {code}
                        </SyntaxHighlighter>
                        <h1>Notes: </h1>
                        <div>
                            {/* <button onClick={() => {
                                noteRetrieve(studentName, questionName[index]).then((item) => {
                                    
                                        console.log(item)
                                    
                                });
                            }}>Click</button> */}
                            {/* {noteRetrieve(studentName, questionName[index]).then((item) => {
                                console.log(item);
                            })} */}
                        </div>
                        <textarea onChange={(text) => setNote(text.target.value)}></textarea>
                        <button onClick={() => {
                            db.collection(studentName).doc(questionName[index]).collection("notes").add({
                                name: nameOfTA,
                                note: note,
                            })
                                .then(function () {
                                    console.log("Document successfully updated!");
                                })
                                .catch(function (error) {
                                    // The document probably doesn't exist.
                                    console.log("Error updating document: ", error);
                                });

                        }}>Send note</button>
                    </div>);
            })}
        </div>
    );
}