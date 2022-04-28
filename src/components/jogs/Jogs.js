import React, {useContext, useEffect, useState} from 'react';
import Icon from '../../assets/jogs/icon.svg'
import './jogs.css'
import Modal from "./modal/Modal";
import {CustomContext} from "../../Context";
import axios from "axios";
import DateFilter from "./modal/date/DateFilter";

const Jogs = () => {
    const [modalActive, setModalActive] = useState(false)
    const {addFolder, setAddFolder, before, after} = useContext(CustomContext)


    useEffect(() => {
        axios('http://localhost:8080/static')
            .then(({data}) => setAddFolder(data))
    },[])

    // useEffect(() => {
    //     axios(`http://localhost:8080/users/${user.id}`)
    //         .then(({data}) => setAddFolder(data))
    // },[])



    console.log(addFolder.map(item => Date.parse(item.date)))

    return (
        <main>
            <section className='section__jogs'>
                <DateFilter/>
                    <div>
                        {
                           addFolder.filter((item) => {
                               if (before.length && after.length){
                                   return Date.parse(item.date) > Date.parse(before) && Date.parse(item.date) < Date.parse(after)
                               } else if (before.length){
                                   return Date.parse(item.date) > Date.parse(before)
                               }else if (after.length){
                                   return Date.parse(item.date) < Date.parse(after)
                               } else {
                                   return item
                               }
                           }).map((item) => (
                               <div className='jogs__card' key={item.id}>
                                   <div className='jogs__between'>
                                   <div className='jogs__img'>
                                       <img src={Icon} alt=""/>
                                   </div>
                                   <div className='jogs__list'>
                                       <span className='jogs__subtitle'>{item.date}</span>
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