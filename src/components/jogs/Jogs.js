import React, {useContext, useEffect, useState} from 'react';
import Icon from '../../assets/jogs/icon.svg'
import './jogs.css'
import Modal from "./modal/Modal";
import {CustomContext} from "../../Context";
import axios from "axios";

const Jogs = () => {
    const [modalActive, setModalActive] = useState(false)
    const {addFolder, setAddFolder} = useContext(CustomContext)

    useEffect(() => {
        axios('http://localhost:8080/static')
            .then(({data}) => setAddFolder(data))
    },[])

    return (
        <main>
            <section className='section__jogs'>
                <div className='section__jogs-date'>
                    <div className='section__jogs-form'>
                        <span className='section__jogs-text'>Date from</span>
                        <input className='section__jogs-search' type="search"/>
                    </div>
                    <div className='section__jogs-form'>
                        <span className='section__jogs-text'>Date to</span>
                        <input className='section__jogs-search' type="search"/>
                    </div>
                </div>
                    <div>
                        {
                           addFolder.map((item) => (
                               <div className='jogs__card'>
                                   <div className='jogs__between'>
                                   <div className='jogs__img'>
                                       <img src={Icon} alt=""/>
                                   </div>
                                   <div className='jogs__list'>
                                       <span className='jogs__subtitle'>20.12.2017</span>
                                       <p className='jogs__title'>Speed: <span className='jogs__subtitle'>{item.speed}</span></p>
                                       <p className='jogs__title'>Distance: <span className='jogs__subtitle'>{item.distance} km</span></p>
                                       <p className='jogs__title'>Time: <span className='jogs__subtitle'>{item.time} min</span></p>
                                   </div>
                                   </div>
                               </div>
                           ))
                        }
                    </div>
                <button className='section__button' type='button' onClick={() => setModalActive(true)}>+</button>
                <Modal active={modalActive} setActive={setModalActive}/>
            </section>
        </main>
    );
};

export default Jogs;