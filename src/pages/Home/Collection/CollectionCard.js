import React from 'react';
import {Link} from 'react-router-dom'


const CollectionCard = ({img, title, priceThrough}) => {
    return (
        <div className="collection__content-card">
            <Link to={`/shop`} className='shop__card-link'>
                

                <img src={img} alt={title}/> 
               
            </Link>
            <p className='collection__content-text'>
                {title}
            </p>
            <div className='collection__content-prices'>
                <span className='collection__content-price collection__content-through'>{priceThrough}</span>
                <span className='collection__content-price'>&#8381;129 000</span>
            </div>
        </div>
    );
};

export default CollectionCard;