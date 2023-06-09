import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";

import {MyContext} from "../../Context";
import {ImCross} from 'react-icons/im'

const BasketCard = ({item}) => {
    const {deleteCart, updateCart, product} = useContext(MyContext);
    const [count, setCount] = useState(item);
    return (

        <div className="basket__product">
            <div className='basket__product-left'>
                <p className='basket__product-mark' onClick={() => deleteCart(item.id, item.color, item.size)}><ImCross/></p>
                <Link className='shop__card-link' to={`/product/${item.id}`}>
                    {/* КОСТЫЛЬ НЕПОНЯТНЫЙ В ИСТОЧНИКЕ КАРТИНКИ НО ВСЕ РАБОТАЕТ находит картинку по id но всегда берет первую так как 0 стоит */}
                    <img className='basket__product-img' src={`../${item.image[Object.keys(item.image)[0]]}`} alt={item.title}/>
                </Link>
                <p className='basket__product-name'>{item.title}</p>
            </div>
            <ul className="basket__info-list">
                <li className="basket__info-item">&#8381;{item.price}</li>
                <li className="basket__info-item">
                    <input className='product__content-input'  min='1'  value={count} onChange={(e) => {
                        setCount(e.target.value >= product.inStock ? product.inStock : e.target.value);
                        updateCart(item.id,  e.target.value)
                    }} type="number"/>
                </li>
{/* доработать  */}
                <li className="basket__info-item">&#8381;{product.inStock >= item.count ? item.price * +item.count : item.price * item.count}</li>
            </ul>
        </div>
    );
};

export default BasketCard;