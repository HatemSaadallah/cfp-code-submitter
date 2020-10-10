import React from 'react';
import './styling/styles.css';
import './styling/TAs_infoStyles.css';
import { Divider } from '@material-ui/core';



export default function TAs_info(){
    return(
        <div className="main">
            <h1>TAs</h1>

        <div class="row">
            
            <div class="column">
                <div class="card">
                    <img src={process.env.PUBLIC_URL + '/images/hatemphoto.jpg'} alt="Hatem Saadallah"/>
                    <div class="container">
                        <h2>Hatem Saadallah</h2>
                        {/* <p class="title">CEO &amp; Founder</p> */}
                        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                        {/* <p>example@example.com</p> */}
                        <p><a href="https://www.facebook.com/messages/t/HeatoMu"> <button class="button">Contact</button> </a> </p>
                    </div>
                </div>   
            </div>
            <div class="column">
                <div class="card">
                    <img src={process.env.PUBLIC_URL + '/images/nonephoto.jpg'} alt="Hanaa Zaqout" />
                    <div class="container">
                        <h2>Hanaa Zaqout</h2>
                        {/* <p class="title">Art Director</p> */}
                        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                        {/* <p>example@example.com</p> */}
                        <p><a href="https://www.facebook.com/messages/t/hanaa.zaqout.351"> <button class="button">Contact</button> </a> </p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src={process.env.PUBLIC_URL + '/images/nonephoto.jpg'} alt="Abdullah Baraka" />
                    <div class="container">
                        <h2>Abdullah Baraka</h2>
                        {/* <p class="title">Designer</p> */}
                        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                        {/* <p>example@example.com</p> */}
                        <p><a href="https://www.facebook.com/messages/t/abdullah.baraka.5"> <button class="button">Contact</button> </a> </p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={process.env.PUBLIC_URL + '/images/zayanphoto.jpg'} alt="Zayan Hassan" />
                    <div class="container">
                        <h2>Zayan Hassan</h2>
                        {/* <p class="title">Designer</p> */}
                        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                        {/* <p>example@example.com</p> */}
                        <p><a href="https://www.facebook.com/messages/t/zayan.hassan.1"> <button class="button">Contact</button> </a> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
