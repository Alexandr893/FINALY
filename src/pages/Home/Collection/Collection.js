import React from 'react';
import {Link} from "react-router-dom"
import CollectionCard from "./CollectionCard";
import semena from "../../../assets/home/semena.jpg";
import korm from "../../../assets/home/korm.jpg";
import wood from "../../../assets/home/wood.jpg";

import "./Collection.scss"

const Collection = () => {
    

    return (
        <section className='collection'>
            <div className="container">
                <h2 className="collection__title">Виды продукций</h2>
                <div className="collection__content">
                    <CollectionCard img={semena} title={"Семена"} priceThrough={<span className='collection__content-price collection__content-through'>&#8381;1500000</span>}/>
                    <CollectionCard img={korm} title={"Корма"} />
                    <CollectionCard img={wood} title={"Пиломатериалы"} />
                </div>
                <Link to='shop'>
                <button type='button' className="collection__btn">
                    В каталог
                </button>
                </Link>
            </div>
        </section>
    );
};

export default Collection;