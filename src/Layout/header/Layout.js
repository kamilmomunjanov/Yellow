import React, {useContext} from 'react';
import {CustomContext} from '../../Context'
import {NavLink, useLocation} from "react-router-dom";
import SmallBear from "../../assets/home/logo.svg";
import Logo from "../../assets/home/filteractive.svg";
import DateFilter from "../../components/jogs/modal/date/DateFilter";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";


const Layout = () => {
    const location = useLocation()
    const {logOutUser,active, setActive, setOpenBurger, openBurger} = useContext(CustomContext)

    return (
        <>
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
                            <li className='header__icon' onClick={()=> setActive(!active)}><img src={Logo} alt=""/></li>
                        </ul>
                            : ''
                    }
                    <div className='header__burger-menu'>
                    <div style={{cursor:'pointer'}} className='header__burger-icon' onClick={()=> setActive(!active)}><img src={Logo} alt=""/></div>
                    <div className='header__burger-btn' onClick={() => setOpenBurger(true)}></div>
                    </div>
                </div>
            </header>
            {
                openBurger && <BurgerMenu/>
            }
        </>
    );
};

export default Layout;