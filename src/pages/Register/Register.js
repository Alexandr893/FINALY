import React, {useContext, useRef} from 'react';
import {MyContext} from "../../Context";
import InputMask from 'react-input-mask';
import {Link, useNavigate} from "react-router-dom";
// 2.
import {useForm} from "react-hook-form";
import "./Register.scss"





const Register = () => {

    const {regUser} = useContext(MyContext)



    // 2.встроенные функций хука форм
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        watch,
        reset

    } = useForm({
            mode: 'onBlur'
        }
    );


    const password = useRef({});
    password.current = watch("password", "");



    return (
        <section className='register'>
            <form className='register__form' onSubmit={handleSubmit(regUser)}>
                <h2 className='register__title'>Регистрация</h2>
                <p className='register__text'>Регистрация занимает меньше минуты</p>



                <label className='register__label' htmlFor="1">Email</label>


                {/* 2.используем хук реакт форм  описываем объект в инпут который на сервер пойдет*/}


                {/* email */}
                <input id='1' {...register('email', {
                    required : 'Это поле обязательное ',
                })} className='register__input' type="email" placeholder='Введите email'/>
                <span>{errors?.email?.message}</span>


                {/*логин  */}
                <label className='register__label' htmlFor="2">Логин</label>
                <input id='2' {...register('login', {
                    required: 'Это поле обязательное '
                })} className='register__input' type="text" placeholder='Введите логин'/>
                <span>{errors?.login?.message}</span>


                {/* телефон */}
                <label className='register__label' htmlFor="tel">Телефон</label>
                <InputMask mask={`+\\8\\(999)999-99-99`} type='tel'  id='tel' {...register('phone', {
                    required: 'Это поле обязательное *'
                })} className="register__input" placeholder='Ввеите номер телефона'/>
                <span>{errors?.phone?.message}</span>


                {/* пароль */}
                <label className='register__label' htmlFor="4">Пароль</label>
                <input id='4' {...register('password', {
                    required: "Ошибки в пароле",
                    minLength: {
                        value: 5,
                        message: "Длина пароля должна содержать минимум 5 символов!",
                        color:"red"
                    }
                })} className="register__input" type='password' placeholder='Введите пароль'/>
                <span>{errors?.password?.message}</span>

                {/* подтверждение пароля */}
                <label className='register__label' htmlFor="5">Подтверите пароль</label>
                <input id='5' className="register__input"  type='password' placeholder='Введите пароль повторно' {...register('confirmPwd', {
                    validate: value =>
                        value === password.current || "Пароли не совпадают"
                })}/>
                {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                

                {/* handle */}
                <button className='register__btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                <p className='register__quest'>уже есть аккаунт? <Link className='register__link' to='/Login'>Войти</Link> </p>
                <Link to='/' className='Home'>Вернуться на главную страницу</Link>

            </form>
        </section>
    );
};

export default Register;