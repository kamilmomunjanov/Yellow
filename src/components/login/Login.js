import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './login.css'
import {useForm} from "react-hook-form";
import {CustomContext} from "../../Context";


const Login = () => {

    const {loginUser} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()



    return (
        <section className='login'>
            <form className='login__form' onSubmit={handleSubmit(loginUser)}>
                <h2 className='login__title'>Вход в аккаунт</h2>
                <input {...register('email')} className='login__input' type="email" placeholder='Введите email'/>
                <input {...register('password')} className='login__input' type="password" placeholder='Введите пароль'/>
                <button className='login__btn' type='submit'>Войти</button>
                <p style={{fontSize:20}}>
                    Нет аккаунта? <Link className='login__subtitle' to='/register'>Зарегистрируйтесь</Link>
                </p>
            </form>
        </section>
    );
};

export default Login;