import React, {useState, useContext} from 'react';
import {MyContext} from "../../Context";
import {Link, NavLink} from "react-router-dom";

import 'antd/dist/reset.css';
import {Pagination} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component'


import "./shop.scss"


const Shop = () => {
    
  // Сначала определены три значения через деструктуризацию объекта, полученного из контекста:

  // page - текущая страница для пагинации элементов магазина;
  // shop - массив объектов с данными о товарах магазина;
  // status - текущий фильтр по категориям товаров (либо "all", либо одна из категорий из объявленных в массиве объектов товаров).
  // Далее объявлено состояние sort, которое определяет текущее состояние сортировки товаров в магазине.
  
  // Затем происходит вычисление двух значений - showCount и showCountsLength.
  
  // Первое значение (showCount) определяет количество элементов магазина, которые необходимо отобразить на текущей странице пагинации. 
  // Это число равно количеству элементов, которые прошли фильтрацию по статусу 
  // категории (если выбрана не категория "all") и сортировку по цене (если это выбранное значение состояния sort). 
  // Затем из этого фильтрованного массива берутся только 9 элементов, соответствующих текущей странице пагинации, и их количество возвращается.
  
  // Второе значение (showCountsLength) определяет общее количество элементов в магазине, удовлетворяющих фильтрацию по статусу категории и сортировку по цене.
    const [sort, setSort] = useState('');

    const {page, setPage, shop, status, setStatus, user, color, setColor} = useContext(MyContext);

    const showCount = shop.filter(item => status === 'all' ? item : item.category === status).filter(el => sort === 'discount' ? el.priceSale : el).filter((item, idx) => {
            return idx + 1 <= page * 9 && idx >= page * 9 - 9
        }).length,
        showCountsLength = shop.filter(item => status === 'all' ? item : item.category === status).filter(el => sort === 'discount' ? el.priceSale : el).length;


    return (
        <section className='shop'>
            <div className="container">
                <h2 className="title">Каталог</h2>
                <div className="contactHeader__links">
                    <Link className="contactHeader__link" to='/'>Назад</Link>
                    -
                    <NavLink className="contactHeader__link" to='/shop'>Каталог</NavLink>
                    <select className='shop__select' onChange={(e)=> {setStatus(e.target.value); setPage(1)}}>
                        <option className='shop__select-item' defaultValue='Все' value="Все">Все</option>
                        <option value="Семена">Семена</option>
                        <option value="Корма">Корма</option>
                        <option value="Пиломатериалы">Пиломатериалы</option>
                    </select>

                </div>
                <ul className='shop__list'>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('all')
                    }} className={`shop__item ${status === "all" && 'shop__item_active'}`}>Все
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('semena')
                    }} className={`shop__item ${status === "semena" && 'shop__item_active'}`}>Семена
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('korm')
                    }} className={`shop__item ${status === "korm" && 'shop__item_active'}`}>Корма
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('pilomat')
                    }} className={`shop__item ${status === "pilomat" && 'shop__item_active'}`}>Пиломатериалы
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('animals')
                    }} className={`shop__item ${status === "animals" && 'shop__item_active'}`}>Шкуры
                    </li>
                </ul>
                <div className='shop__sort-content'>
                    {/* {user.email === 'admin@mail.ru' ? <Link to='/create' className='shop__sort'>Add</Link> : <span/>} */}
                    <div className='shop__sort-type'>
                        
                        <div className='shop__sorts'>
                            <button type='btn' className={`shop__sort ${sort === 'big' ? 'active' : ''}`}
                                    onClick={() => setSort('big' !== sort ? 'big' : '')}>К наименьшей  </button>
                            <button type='btn' className={`shop__sort ${sort === 'less' ? 'active' : ''}`}
                                    onClick={() => setSort('less' !== sort ? 'less' : '')}>К наибольшой </button>
                            <button type='btn' className={`shop__sort ${sort === 'discount' ? 'active' : ''}`}
                                    onClick={() => setSort('discount' !== sort ? 'discount' : '')}>Со скидкой</button>
                        </div>
                    </div>
                </div>


                {
                    showCountsLength <= 0
                        ? <p className='shop__discount-text'></p>
                        : <>
                            <p>Показано: {showCount} из {showCountsLength} товаров</p>
                            <div style={{minHeight: '800px'}} className='shop__row'>
                                
                                    {
                                        shop.sort((a, b) => {
                                            if (sort === 'big') {
                                                return (b.priceSale || b.price) - (a.priceSale || a.price)
                                            } else if (sort === 'less') {
                                                return (a.priceSale || a.price) - (b.priceSale || b.price)
                                            }

                                        }).filter(el => sort === 'discount' ? el.priceSale : el)
                                            .filter(item => status === 'all' ? item : item.category === status).filter((item, idx) => {
                                            return idx + 1 <= page * 9 && idx >= page * 9 - 9
                                            // вывод товаров
                                        }).map((item) => (

                                            <div key={item.id} className='shop__card'>
                                                <Link className="shop__card-link" to={`/product/${item.id}`}>
                                                    <LazyLoadImage
                                                        className='shop__card-img'
                                                        alt='t-short'
                                                        src={`../${item.image[Object.keys(item.image)[0]]}`}
                                                        effect='blur'
                                                    />
                                                </Link>
                                                <h3 className='shop__card-title'>{item.title}</h3>
                                                <p className='shop__card-price'>&#8381;{item.priceSale
                                                    ? <>
                                                        <span style={{textDecoration: 'line-through'}}>{item.price}</span>
                                                        -
                                                        <span className='shop__card-price-sale'>&#8381;{item.priceSale}</span>
                                                    </>
                                                    : item.price}</p>
                                                {
                                                    item.inStock ?
                                                        <p className='shop__card-instock'>
                                                            В наличии : <span>{item.inStock}</span>
                                                        </p> :
                                                        <p className='shop__card-instock'>
                                                            Нет в наличии !
                                                        </p>
                                                }
                                            </div>
                                        ))
                                    }
                                

                            </div>
                            <p>Показано: {showCount} из {showCountsLength} товаров</p></>
                }
                {
                    showCountsLength > 9 ?
                    // пагинация
                        <Pagination simple onChange={setPage} current={page}
                                    total={shop.filter(item => status === 'all' ? item : item.category === status).length}
                                    pageSize={9}/> : ''
                }
            </div>
        </section>
    );
};

export default Shop;