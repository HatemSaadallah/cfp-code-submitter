import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
import Gist from 'super-react-gist' // <-- import the library
import {gists} from './gistsLinks';


export default function Gists() {
    const [markdown, setMarkdown] = useState("");

    return (
        <div>
            {gists.map((gist) => {
            return <Gist url={gist["url"]}
            file={gist["fileName"]} />

            })}
        </div>
    );

}