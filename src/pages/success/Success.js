import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Succes.scss"

import img from './check.png'

const Success = () => {
   
    return (
        <section className='order'>
            <div className="container">
                <h2 className='order__title'>Заказ</h2>
                <div className='order__links'>
                    <Link className='order__link' to='/'>Главная</Link>
                    -
                    <NavLink className='order__link' to='/shop'>Каталог</NavLink>
                    -
                    <NavLink className='order__current' to='/shop'>Каталог</NavLink>
                </div>
                <div className='order__content'>
                    <div className='order__content-left'>
                        <img className='order__content-img' src={img} alt="img"/>
                        <div className='order__content-subtitle'>
                            <p className='order__content-text'>Ваш заказ оформлен</p>
                            <p className='order__content-info'>Узнать подробнее 8942512522</p>
                        </div>
                    </div>
                    <div className='order__content-right'>
                        <Link className='order__content-home' to='/'>
                            <button className='order__content-btn'>К главной</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;