import React, {useContext, useState} from 'react';
import {CustomContext} from '../../Context'
import {NavLink, useLocation} from "react-router-dom";
import SmallBear from "../../assets/home/logo.svg";
import Logo from "../../assets/home/filteractive.svg";


const Layout = () => {
    const location = useLocation()
    const {logOutUser} = useContext(CustomContext)

    return (
            <header className='header'>
                <div className='header__nav'>
                    <div>
                        <NavLink to="/"><img className='header__logo' src={SmallBear} alt=""/></NavLink>
                    </div>
                    {
                        location.pathname !== '/' ? <ul className='header__menu'>
                            <li><NavLink className='header__item' to="/jogs">JOGS</NavLink></li>
                            <li><NavLink  className='header__item' to="/info">INFO</NavLink></li>
                            <li><NavLink  className='header__item' to="/contact">CONTACT US</NavLink></li>
                            <li><NavLink  className='header__item' to="/login" onClick={() => logOutUser()}>Sign Up</NavLink></li>
                            <li><NavLink  className='header__icon' to=""><img src={Logo} alt=""/></NavLink></li>
                        </ul>
                            : ''
                    }



                </div>
            </header>
    );
};

export default Layout;