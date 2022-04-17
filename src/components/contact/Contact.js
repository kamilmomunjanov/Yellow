import React from 'react';
import Emotion from '../../assets/contact/emoticon.svg'
import {NavLink} from "react-router-dom";
import './contact.css'

const Contact = () => {
    return (
        <div className='nothing'>
            <div className='nothing__center'>
                <img src={Emotion} alt=""/>
                <p className='nothing__title'>Nothing is there</p>
                <NavLink to="/jogs"><button className='nothing__btn' type='button'>Create your jog first</button></NavLink>
            </div>
        </div>
    );
};

export default Contact;