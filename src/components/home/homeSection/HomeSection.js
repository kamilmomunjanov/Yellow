import React from 'react';
import BearFace from '../../../assets/home/bearface.svg'
import {NavLink} from 'react-router-dom'
import './homeSection.css'

const HomeSection = () => {
    return (
        <main>
            <section className='section'>
                <div className='section__box'>
                    <div className='section__bear'>
                    <img  style={{marginTop:77}} src={BearFace} alt=""/>
                        <NavLink to="/jogs"><button className='section__btn' type='button' style={{cursor:'pointer'}}>Let me in</button></NavLink>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default HomeSection;