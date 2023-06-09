
import logo  from '../../assets/logo.PNG'
import React, {useContext, useRef, useState} from 'react';
import {MyContext} from "../../Context";
import {Link, NavLink} from "react-router-dom";
import {MdPhoneInTalk} from 'react-icons/md'
import {SlLogin} from 'react-icons/sl'
import basket from '../../assets/basket.svg'
import vhod from "../../assets/vhod.svg"
import Modal from './Modal/Modal';


export default function Header() {

    const [modalactive,setModalactive]=useState(false)
    const {user, removeUser} = useContext(MyContext)


  return (
   
    
        <header className="header">
            <div className="container">
                <nav className="header__nav">

                    <a href= "#" >
                        <h1 className="header__title">
                            <img src={logo} alt=""/>
                        </h1>
                    </a>


                    <div className="header__menu">
                        {/* у навлинка есть active проверка url */}
                        <NavLink to="/"  className="header__link">
                            Главная
                        </NavLink>

                        <NavLink to="/Shop"  className="header__link">
                            Каталог
                            </NavLink>

                        <NavLink to="/Product"  className="header__link">
                            О продукте
                            </NavLink>

                        <NavLink to="/Contact"  className="header__link">
                            Контакты
                            </NavLink>
                        <NavLink to="/Blog"  className="header__link">
                            Блог
                            </NavLink>
                            <button className='modal-btn' onClick={()=>setModalactive(true)}>Связь</button>
                            
                    </div>


                    <div className="header__right">

                  
                       

                    {
                            // user.email === 'admin@mail.ru' ? <li className='header__item'><NavLink className='header__link' to="/products">Admin Panel</NavLink></li> : ''
                        }
                                
                            
                             {/* КОРЗИНА */}
                            <Link to="/Basket"> 
                                <div className="header__user">
                                <img src={basket} className="header__basket"/> 
                            </div>
                            </Link>

                            {
                                // если длина логина больше 0,true  так???
                                user.login.length?<Link className="header__out" to="/" onClick={() => removeUser()}>Выйти</Link>:<Link to="/Login" className="header__user">  <img src={vhod} className="header__basket"/> </Link>
                                                                                               
                             }

                    </div>

                </nav>
                <Modal active={modalactive} setActive={setModalactive}>
                            <form>
                            <h2 className='login__title'>Обратная связь</h2>
                            <p className='login__text'></p>
                                <label className='login__label'  htmlFor="1">Почта</label>
                                <input  className='login__input' type="email" placeholder='Действительный email'/>
                             <  label className='login__label' htmlFor="2">Пароль</label>
                                     <input className='login__input' type="password" placeholder='Введите пароль'/>
                            <button className='login__btn cent' type='submit'>Отправить</button>
                
                            </form>
                </Modal>
            </div>
        </header>
        
    );
    

}
