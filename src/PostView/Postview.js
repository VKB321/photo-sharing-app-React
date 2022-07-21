import React, { useEffect, useState } from 'react';
import Insta from './Insta';
import './insta.css';
import cam from '../images/cam.png';
import spiral from "../images/spiral.png"

export default function Postview() {
    const [variable, setVariable] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3004/user")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setVariable(data);
            })
    })


    return (
        <div className='Insta'>
            <div className='Insta1'>
                <header className='head'>
                    <p id='start'>
                        <img id='logo' src={spiral} alt='Logo' /><span id='clone'>Instaclone</span>
                    </p>
                    <p id='end'><img src={cam} alt="loading camera image" /></p>
                </header>
                <p classsName="container">
                    {variable.map((element, i) => {
                        return (<Insta data={element} key={i} />)
                    })}
                </p>
            </div>
        </div>

    )
}