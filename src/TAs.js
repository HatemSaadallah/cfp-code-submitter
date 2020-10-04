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
    console.log(snapshot.docs[0].Nf.key.path.segments);
    return snapshot.docs.map(doc =>
        doc.data().code
    )
}

async function nameOfQuestion(nameOfStudent){
    const snapshot = await firebase.firestore().collection(nameOfStudent).get()
    return snapshot.docs.map(doc =>
        doc.data().nameOfQuestion
    )
}

console.log(nameOfQuestion("Hatem Saadallah"))
const studentsNames = [
    "Ahmad Herzallah",
    "Ahmad Mortaja",
    "Hind Wihaidi",
    "Hosny Omar Arfat Al-khatib",
    "Mohammed Eyad Atalah",
    "Kareem Fadi",
    "hadil owda",
    "Hatem Saadallah"
]
export default function TAs() {
    const [studentCode, setStudentCode] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [questionName, setQuestionName] = useState([]);
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
                    </div>);
            })}
        </div>
    );
}