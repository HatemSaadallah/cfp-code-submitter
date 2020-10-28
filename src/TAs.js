import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Dropdown } from "react-bootstrap";
import "./styling/TAstyle.css"

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
async function gradeRet(nameOfStudent) {
    const snapshot = await firebase.firestore().collection(nameOfStudent).get()

    return snapshot.docs.map(doc =>
        doc.data()
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
    "Fatima Alzahraa",
    "hanaa zaqout",
    "Hatem Saadallah"
]
const realdb = firebase.database();

export default function TAs({ nameOfUser }) {
    const [studentCode, setStudentCode] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [questionName, setQuestionName] = useState([]);
    const [note, setNote] = useState();
    const [notesRet, setNotesRet] = useState({});
    const note_id = `note-${Date.now()}`;
    const [grade_sp, setGrade_sp] = useState([]);
    const [grade, setGrade] = useState(0);
    useEffect(() => {
        realdb.ref("notes").on("value", snapshot => {
            let allNotes = {};
            snapshot.forEach(snap => {
                allNotes[snap.key] = snap.val()
            })
            //console.log(allNotes);
            setNotesRet(allNotes);
        })


    }, []);
    return (
        <div>
            <h1>Hello from Admin</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select a student
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {studentsNames.map(item => {


                        //console.log("This is item",item)
                        return (
                            <Dropdown.Item onClick={(e) => {
                                setStudentName(e.nativeEvent.target.outerText);
                                name(e.nativeEvent.target.outerText).then((data) => {
                                    setStudentCode(data)
                                });
                                nameOfQuestion(e.nativeEvent.target.outerText).then(data => {
                                    setQuestionName(data);
                                })
                                gradeRet(e.nativeEvent.target.outerText).then((data) => {
                                    setGrade_sp(data);
                                })
                            }}>{item}</Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            {<h1>{studentName}</h1>}
            {studentCode.map((code, index) => {
                let arranged = {};
                grade_sp.map((data) => {
                    console.log("lol", data);
                    arranged[data.nameOfQuestion] = data.grade;
                })
                console.log("This is arranged", arranged);
                return (
                    <div>
                        <h1>{questionName[index]}</h1>
                        <SyntaxHighlighter language="python" style={docco}>
                            {code}
                        </SyntaxHighlighter>

                        <h1>Grade {arranged[questionName[index]]}</h1>
                        <h1>Notes: </h1>
                        <div>
                            {
                                notesRet.hasOwnProperty(studentName) ?
                                    (
                                        Object.entries(notesRet[studentName]).map(item => {
                                            return (
                                                <div>
                                                    {Object.entries(item[1]).map(itemChild => {
                                                        if (itemChild[1].question_name == questionName[index])
                                                            return (
                                                                <div>
                                                                    <h1>{itemChild[1].nameOfUser}</h1>
                                                                    <p>{itemChild[1].note}</p>
                                                                </div>
                                                            )
                                                        else return (<span></span>)
                                                    })}
                                                </div>
                                            );

                                        })
                                    ): <h1>Theres no comments here</h1>
                            }

                        </div>
                        <textarea onChange={(text) => setNote(text.target.value)}></textarea>
                        <button onClick={() => {
                            let question_name = questionName[index]
                            realdb.ref(`notes/${studentName}/${questionName[index]}/${note_id}`)
                                .set({
                                    nameOfUser,
                                    note,
                                    note_id,
                                    question_name
                                })
                                .then(_ => {
                                    console.log("Note sent successfully");
                                }).catch(error => {
                                    console.log("An error occurred", error);
                                })

                        }}>Send note</button>
                        <input value={grade} type="number" onChange={grade => {
                            setGrade(grade.target.value);
                        }}/>
                        <button onClick={() => {
                            db.collection(studentName).doc(questionName[index]).update({
                                grade: grade
                            })
                                .then(function () {
                                    alert("Grade Sent successfully");
                                })
                                .catch(function (error) {
                                    alert("Error sending grade, please contact Hatem");
                                });
                        }
                            }>Send Grade</button>
                    </div>);
            })}
        </div>
    );
}
