import React from 'react';
import {NavLink} from "react-router-dom";
import SmallBear from "../../assets/home/logo.svg";
import Logo from "../../assets/home/filteractive.svg";

const Header = () => {
    return (
            <header className='header'>
                <div className='header__nav'>
                    <div>
                        <NavLink to="/"><img className='header__logo' src={SmallBear} alt=""/></NavLink>
                    </div>
                    <ul className='header__menu'>
                        <li><NavLink className='header__item' to="/jogs">JOGS</NavLink></li>
                        <li><NavLink  className='header__item' to="/info">INFO</NavLink></li>
                        <li><NavLink  className='header__item' to="/contact">CONTACT US</NavLink></li>
                        <li><NavLink  className='header__icon' to=""><img src={Logo} alt=""/></NavLink></li>
                    </ul>
                </div>
            </header>
    );
};

export default Header;