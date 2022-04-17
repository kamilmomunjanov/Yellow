import React from 'react';
import Cancel from '../../../assets/modal/cancel.svg'
import './modal.css'

const Modal = ({active,setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <img onClick={()=>setActive(false)}  className='modal__svg' src={Cancel} alt=""/>
                <form className='modal__form'>
                    <label className='modal__label'>
                        <span className='modal__text'>Distance</span>
                        <input className='modal__subtitle' type="text"/>
                    </label>
                    <label className='modal__label'>
                        <span className='modal__text'>Time</span>
                        <input className='modal__subtitle' type="text"/>
                    </label>
                    <label className='modal__label'>
                        <span className='modal__text'>Date</span>
                        <input className='modal__subtitle' type="text"/>
                    </label>
                    <label>
                        <button className='modal__btn' type='submit'>Save</button>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Modal;