import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import './burgerMenu.css'
import burger from "../../assets/burger/logo@2x.png";
import {NavLink} from "react-router-dom";
import Cancel from "../../assets/modal/cancel.svg";

const BurgerMenu = () => {
    const {logOutUser,setOpenBurger,openBurger} = useContext(CustomContext)
    return (
        <div className={openBurger ? 'burger active' : 'burger'} onClick={()=>setOpenBurger(false)}>
            <div className={openBurger ? 'burger__box active' : 'burger__box'} onClick={e => e.stopPropagation()}>
            <div className="burger__nav">
                <NavLink to="/"><img className='burger__logo' src={burger} alt=""/></NavLink>
                <img style={{background:'gray',padding:'1px', fill: 'gray'}} onClick={()=>setOpenBurger(false)}  className='burger__svg' src={Cancel} alt=""/>
            </div>
            <ul className='burger__menu'>
                <li><NavLink className='burger__list' to="/jogs" onClick={()=>setOpenBurger(false)}>JOGS</NavLink></li>
                <li><NavLink className='burger__list' to="/info" onClick={()=>setOpenBurger(false)}>INFO</NavLink></li>
                <li><NavLink className='burger__list' to="/contact" onClick={()=>setOpenBurger(false)}>CONTACT US</NavLink></li>
                <li><NavLink  className='burger__list' to="/login" onClick={() => logOutUser()}>Sign Up</NavLink></li>
            </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;