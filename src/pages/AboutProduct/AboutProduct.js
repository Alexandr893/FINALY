import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink, useLocation, useParams} from 'react-router-dom'
import axios from "axios";
import {MyContext} from "../../Context";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import Footer from '../../Layout/Footer/Footer';
import "./AboutProduct.scss"



const Aboutproduct = () => {
// вот по этим 2ум хукам и в лэйаут в маршруте с id находим продукт
    const params = useParams();
    const location = useLocation();
    console.log(params)
    console.log(location)
    const [sale, setSale] = useState(false);
    const [saleCount, setSaleCount] = useState(0);
    const [size, setSize] = useState('');
    const [count, setCount] = useState(1);
    const {setPage, setStatus, shop, product, setProduct, addCart, getAllClothes, key,setKey,color} = useContext(MyContext);


    useEffect(() => {
        axios(`http://localhost:8080/products/${params.id}`)
            .then(({data}) => {
                setProduct(data);
              
             
            })
    }, [location, shop]);
    return (
        <>
        <section className='product'>
            <div className="container">
                { product.title && <>
                    <h2 className="title">{product.title}</h2>
                    <div className="contactHeader__links">
                        <Link className="contactHeader__link" to='/'>Главная</Link>
                        -
                        <NavLink className="contactHeader__link" to='/shop' onClick={() => {
                            setPage(1);
                            setStatus(product.category)}}>Назад</NavLink>
                        -
                        <p className="product__unlink">{product.title}</p>
                    </div>
                    <div className="product__content">
                        <LazyLoadImage
                            src={`../${product.image[key]}`}
                            effect='blur'
                            className='product__content-img'
                        />
                        <div className="product__content-info">

                            {
                                !product.priceSale ?
                                    <>
                                        {sale ? <input className='product__content-inputSale' value={saleCount} onChange={(e) => setSaleCount(e.target.value)} type="number"/> : ''}

                                        <button className='product__content-btnSale' type='button' onClick={() => {
                                            if (sale) {
                                                axios.patch(`http://localhost:8080/products/${product.id}`, {priceSale: product.price - product.price / 100 * saleCount})
                                                    .then(() => {
                                                        getAllClothes();
                                                        setSaleCount(0)
                                                    })
                                            }
                                            setSale(!sale);
                                        }}>Добавить {sale ? '' : 'скидку'}</button>
                                    </>
                                    : ''
                            }

                            <p className='product__content-price'>&#8381;{product.priceSale
                                ? <>
                                    <span style={{textDecoration: 'line-through'}}>{product.price}</span>
                                    <span className='product__content-price-line'>-</span>
                                    <span className='product__content-price-sale'>&#8381;{product.priceSale}</span>
                                </>
                                : product.price}</p>
                         
                            {
                                product.inStock ?
                                    <p className='product__content-choose'>
                                        В наличии : <span>{product.inStock}</span>
                                    </p> :
                                    <p className='product__content-choose'>
                                        Нет в наличии !
                                    </p>
                            }
                            <div className='product__content-form'>
                                <input className='product__content-input' style={{color: !product.inStock ? "grey" : "black"}} disabled={!product.inStock} min='1'  max={product.inStock} value={count} onChange={(e) => setCount(e.target.value >= product.inStock ? product.inStock : e.target.value)} type="number"/>
                                <button className='product__content-btn' style={{background: !product.inStock ? "grey" : "#6E9C9F"}} disabled={!product.inStock} type='button' onClick={() => addCart({
                                    id: product.id,
                                    title: product.title,
                                    image: product.image,
                                    key,
                                    count,
                                    price: product.priceSale || product.price,
                                    category: product.category
                                })}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                  
                </>}
            </div>
            
        </section>
          <Footer/>
          </>
    );
};

export default Aboutproduct;