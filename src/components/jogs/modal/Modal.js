import React, {useContext, useEffect} from 'react';
import Cancel from '../../../assets/modal/cancel.svg'
import './modal.css'
import {CustomContext} from "../../../Context";
import {useForm} from "react-hook-form";
import axios from "axios";

const Modal = ({active,setActive}) => {

    const {setFolder,setAddFolder} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()



    const addParameter = async (data) => {
       await axios.post('http://localhost:8080/static',{
           ...data, date: new Date(Date.now()).toISOString().slice(0,10)
       })
            .then((res) => {
                setFolder(res.data.folder)
                reset()
            })

       await axios('http://localhost:8080/static')
            .then(({data}) => setAddFolder(data))

    }

    // const addParameter = async (data) => {
    //     await axios.put(`http://localhost:8080/users/${user.id}`,{
    //      orders:[
    //          ...user.orders,
    //          {
    //              ...data, date: new Date(Date.now()).toISOString().slice(0,10)
    //          }
    //      ]
    //     })
    //         .then((res) => {
    //             setAddFolder(res.data.user.id)
    //             console.log(setAddFolder)
    //             reset()
    //         })
    //
    //     await axios(`http://localhost:8080/users/${user.id}`)
    //         .then(({data}) => setAddFolder(data))
    //
    // }


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <img onClick={()=>setActive(false)}  className='modal__svg' src={Cancel} alt=""/>
                <form className='modal__form' onSubmit={ handleSubmit(addParameter)}>
                    <label className='modal__label'>
                        <span className='modal__text'>Speed</span>
                        <input {...register('speed')} className='modal__subtitle' type="text"/>
                    </label>
                    <label className='modal__label'>
                        <span className='modal__text'>Distance</span>
                        <input {...register('distance')} className='modal__subtitle' type="text"/>
                    </label>
                    <label className='modal__label'>
                        <span className='modal__text'>Time</span>
                        <input {...register('time')} className='modal__subtitle' type="text"/>
                    </label>
                    <label>
                        <button className='modal__btn' type='submit' onClick={() => setActive(false)}>Save</button>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Modal;