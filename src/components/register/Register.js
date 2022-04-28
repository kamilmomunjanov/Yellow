import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import './register.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";



const Register = () => {


    const {registerUser} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
    } = useForm()



    return (
        <section className='register'>
            <form className='register__form' onSubmit={handleSubmit(registerUser)}>
                <h2>Регистрация</h2>
                <input {...register('email')} className='register__input' type="email" placeholder='Введите email'/>
                <input {...register('login')} className='register__input' type="text" placeholder='Введите логин'/>
                <input {...register('phone')} className='register__input' type="tel" placeholder='Введите номер'/>
                <input {...register('password')} className='register__input' type="password" placeholder='Введите пароль'/>
                <input className='register__input' type="password" placeholder='Подтвердите пароль'/>
                <button className='register__btn' type='submit'>Регистрация</button>
                <p style={{fontSize:20}}>
                    Есть аккаунт? <Link to='/login'  className='register__subtitle'>Войти</Link>
                </p>
            </form>
        </section>
    );
};

export default Register;