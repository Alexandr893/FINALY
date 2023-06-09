import React, {useContext, useEffect, useState,useRef} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {MyContext} from "../../Context";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import axios from "axios";

import "./Order.scss"
const Order = () => {



    const [buy,setBuy]=useState('');

   const handleChange=(e)=>{
       setBuy( e.target.value);
    }

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

    const email = useRef({});
    email.current = watch("email", "");

   

    const navigate = useNavigate()
// оформление заказа
const {cart, ticket, user, setUser, setCart, setTicket} = useContext(MyContext);
const addOrder = async (data) => {
    console.log(data);
    await axios.post('http://localhost:8080/orders', {
        ...data,
        products: cart,
        price: Array.isArray(ticket) && ticket.length
            ? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
            : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0),
        userEmail: user.email,
        date: new Date()
    }).then(() =>
  { 
    
       
    });
    await navigate('/success')
        


        // await axios.patch(`http://localhost:8080/users/${user.id}`, {
        //     orders: [
        //         ...user.orders,
        //         {
        //             ...data,
        //             ...data,
        //             clothes: cart,
        //             price: Array.isArray(ticket) && ticket.length
        //                 ? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
        //                 : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0),
        //             date: new Date()
        //         }
        //     ]
        // }).then(() => console.log('Успешно добавлен'));

        // await axios(`http://localhost:8080/users/${user.id}`).then((res) => setUser(res.data));

        // await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ?
        //     axios.patch(`http://localhost:8080/tickets/${ticket[0].id}`, {count: ticket[0].count - 1})
        //         .then(() => console.log('успешно использован'))
        //     : Array.isArray(ticket) && ticket.length && ticket[0].count === 1 ? axios.delete(`http://localhost:8080/tickets/${ticket[0].id}`).then(() => console.log('Успешно удален'))
        //     : console.log('Error');

        await reset();
        await setCart([]);
        await setTicket([]);
    


    };

    return (
        <section className="checkout">
            <div className="container">
                <h2 className="title" /> Заказ
                <div className="basket__crumbs">
                    <Link className="basket__crumbs-home" to='/'>Главная</Link>
                    -
                    <NavLink className="basket__crumbs-cart" to='/order'>Заказ</NavLink>
                </div>
                <form onSubmit={handleSubmit(addOrder)}>
                    <div className="checkout__buyer">
                        <div className="checkout__buyer-form">
                            <h3 className="checkout__title"/> Ваши данные

                            <input id='1' {...register('login', {
                    required: 'Это поле обязательное '
                })} className="checkout__buyer-input" type="text" placeholder='Введите логин'/>
                <span>{errors?.login?.message}</span>

         
<input id='2' {...register('email', {
                    required: "Ошибки в почте",
                    minLength: {
                        value: 3,
                        message: "Почта должна быть идентична",
                        color:"red"
                    }
                })} className="checkout__buyer-input" type="email" placeholder='Введите email'/>
                <span>{errors?.email?.message}</span>

                               <InputMask mask={`+\\8\\(999)999-99-99`} type='tel'  id='tel' {...register('phone', {
                    required: 'Это поле обязательное *'
                })} className="checkout__buyer-input" placeholder='Ввеите номер телефона'/>
                <span>{errors?.phone?.message}</span>
                        </div>
                        <div className="checkout__buyer-left">
                            <h3 className="checkout__title"
                                />  Ваши товары
                            <ul className="checkout__buyer-list">
                                <li className="checkout__buyer-item">
                                    <p className="checkout__buyer-info">
                                      
                                    </p>
                                    <p className="checkout__buyer-info">
                                       
                                    </p>
                                </li>




                               








                                {
                                    cart.map((item, idx) => (
                                        <div key={idx} className="checkout__buyer-cart">
                                            <img className='checkout__buyer-cart-img' src={`../${item.image[Object.keys(item.image)[0]]}`}
                                                 alt={item.title}/>
                                            <div className='checkout__buyer-cart-info'>
                                                <div className='checkout__buyer-cart-top'>
                                                    <p className="checkout__buyer-product checkout__buyer-product-title">
                                                        <span>Наименование:</span>
                                                        {item.title}
                                                    </p>
                                                    <p className="checkout__buyer-product checkout__buyer-product-text">
                                                        <span>Количество:</span>
                                                        {item.count}</p>
                                                </div>
                                                <div className='checkout__buyer-cart-top'>
                                                  
                                                    <p className="checkout__buyer-product checkout__buyer-product-text">
                                                        <span>Цена заказа:</span>
                                                        &#8381; {item.count * item.price}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }

                                <li className="checkout__buyer-item checkout__buyer-product-text">
                                    <p className="checkout__buyer-product">
                                      
                                      Стоимость
                                    </p>
                                    <p className="checkout__buyer-price">&#8381; {cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)}</p>
                                </li>
                                <li className="checkout__buyer-item checkout__buyer-product-text checkout__buyer-item_act">
                                    <p className="checkout__buyer-product">
                                       Общая стоимость
                                    </p>
                                    <p className="checkout__buyer-product ">&#8381;{Array.isArray(ticket) && ticket.length
                                        ? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
                                        : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)
                                    }</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="checkout__address">
                        <div className="checkout__address-left">
                            <h3 className="checkout__title"/> оплата
                            <div className="checkout__address-check">
                                <input className="checkout__address-checked" type="checkbox" value="наличными" id="money"
               onChange={handleChange} name="buy" />
                                Наличные
                                <input className="checkout__address-checked" type="checkbox"  value="по карте" id="card"
              onChange={handleChange} name="abuy" />
                                Карта
                            </div>
                            <button type="submit" className="checkout__address-btn" >Оформить</button>
                        </div>
                        
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Order;