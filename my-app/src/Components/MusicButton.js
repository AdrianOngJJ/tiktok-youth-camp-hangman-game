import React from "react";
import './Button.css'
import {useState} from 'react';


export const MusicButton = ({
    type,
    id,
    audio,
}) => {

    const [buttonText, setButtonText] = useState('Music: On');

    function handleClick() {
        if (buttonText == 'Music: On') {
            setButtonText('Music: Off');
            audio.pause()
            alert('off')
        } else {
            setButtonText('Music: On');
            audio.play()
            alert('on')
        }
    }

    return (
        <button
        className={`btn--primary`}
        audio = {audio}
        id = {id}
        onClick={handleClick}
        type={type}>
            {buttonText}
        </button>
    )
}
