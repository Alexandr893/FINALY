
import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom"
import {useForm} from "react-hook-form";
import {MyContext} from "../../Context";
import Header from "../../Layout/Header/Header";

import "./Login.scss"

const Login = () => {



    const {loginUser} = useContext(MyContext);


    const {
        register,
        handleSubmit,
        setError: {
            errors
        },
        reset
    } = useForm();



    return (
        <section className='login'>
            <form className='login__form' onSubmit={handleSubmit(loginUser)}>
                <h2 className='login__title'>Вход в аккаунт</h2>
                <p className='login__text'>Войдите в свою учетную запись, используя адрес электронной почты и пароль, указанные при регистрации.</p>
                <label className='login__label' htmlFor="1">Email</label>
                <input id='1' {...register('email')} className='login__input' type="email" placeholder='Действительный email'/>
                <label className='login__label' htmlFor="2">Пароль</label>
                <input id='2' {...register('password')} className='login__input' type="password" placeholder='Введите пароль'/>
                <button className='login__btn' type='submit'>ВОЙТИ</button>
                <p className='login__quest'>Не зарегистрированы? <Link className='login__link' to='/register'>Регистрация</Link> </p>
                <Link to='/' className='home'>Вернуться на главную страницу</Link>
            </form>
        </section>
    );
};

export default Login;