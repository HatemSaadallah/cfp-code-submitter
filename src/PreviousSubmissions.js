import React, {useState, useEffect} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import firebase from "firebase";

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

// async function nameOfQuestion(nameOfStudent) {
//     const snapshot = await firebase.firestore().collection(nameOfStudent).get()
//     return snapshot.docs.map(doc =>
//         doc.data().nameOfQuestion
//     )
// }


export default function PreviousSubmissions({nameOfUser}) {
    const [studentCode, setStudentCode] = useState([]);
    // const [questionName, setQuestionName] = useState([]);

    useEffect(() => {
        console.log(nameOfUser);
        name(nameOfUser).then((data) => {
            setStudentCode(data)
        });
    }, []);

    return (
        <div>
            <h1>Hello {nameOfUser}</h1>
            <h3>Here are your previous submissions</h3>
            {studentCode.map((code) => {
                return (
                    <div>
                        <SyntaxHighlighter language="python" style={docco}>
                            {code}
                        </SyntaxHighlighter>
                    </div>);
            })}
        </div>
    );
}  