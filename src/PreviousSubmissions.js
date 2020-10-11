import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import firebase from "firebase";
import "./styling/styles.css";
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
    // console.log(snapshot.docs[0].Nf.key.path.segments);
    let output = [];
    snapshot.docs.map(doc => {
        let temp = { "qn": doc.data().nameOfQuestion, "code": doc.data().code };
        output.push(temp);
    })
    return output;
}

// async function nameOfQuestion(nameOfStudent) {
//     const snapshot = await firebase.firestore().collection(nameOfStudent).get()
//     return snapshot.docs.map(doc =>
//         doc.data().nameOfQuestion
//     )
// }
const realdb = firebase.database();


export default function PreviousSubmissions({ nameOfUser }) {
    const [studentCode, setStudentCode] = useState([]);
    // const [questionName, setQuestionName] = useState([]);
    const [notesRet, setNotesRet] = useState({});
    const [note, setNote] = useState();
    useEffect(() => {
        name(nameOfUser).then((data) => {
            // console.log(data);
            setStudentCode(data)
        });
        realdb.ref("notes").on("value", snapshot => {
            let allNotes = {};
            snapshot.forEach(snap => {
                // console.log(snap)
                // allNotes.push(snap.val());
                allNotes[snap.key] = snap.val()
            })
            console.log(allNotes);
            setNotesRet(allNotes);
            console.log(Object.keys(allNotes).length)
        })
    }, []);
    const note_id = `note-${Date.now()}`;
    return (
        <div>
            <h1 className="previousSubsWelcomeMessage">Hello {nameOfUser}</h1>
            <h3 className="previousSubsWelcomeMessage">Here are your previous submissions</h3>
            {studentCode.map((item_sp) => {
                {/* console.log("this is from map", item); */ }
                return (
                    <div>
                        <div className="note_div">
                        <h1>{item_sp.qn}</h1>
                        </div>
                        <SyntaxHighlighter language="python" style={docco} className="previous-s-container">
                            {item_sp.code}
                        </SyntaxHighlighter>
                        <div className="note_div">
                        <h3>Notes:</h3>
                        {
                            notesRet.hasOwnProperty(nameOfUser) ?
                                (
                                    Object.entries(notesRet[nameOfUser]).map(item => {
                                        return (
                                            <div>
                                                {Object.entries(item[1]).map(itemChild => {
                                                    {/* console.log("This is item child" ,itemChild) */}
                                                    if (itemChild[1].question_name == item_sp.qn)
                                                        return (
                                                            <div>
                                                                <h4>{itemChild[1].nameOfTA}</h4>
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
                        <hr className="hr_q"/>
                        {/* <textarea onChange={(text) => setNote(text.target.value)}></textarea>
                        <button onClick={() => {
                            let question_name = item_sp.qn;
                            realdb.ref(`notes/${nameOfUser}/${question_name}/${note_id}`)
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

                        }}>Send note</button> */}
                    </div>);
                   
            })}
            
        </div>
    );
}  
