import React from 'react';

import './New.scss' 
import {Link} from "react-router-dom";

const New = () => {
    return (

        <section className="newpost ">
          
            <div className="container">
                <div className="newpost__row">
                    <div className="newpost__left">
                        <h2 className="newpost__left-title">Сотрудничество с <br/>  ООО Верхнепашинское</h2>
                        <p className="newpost__left-desc">оказание сельскохозяйственных услуг</p>
                        <div className='d-flex'>
       
                            <div className="newpost__left-card">
                                <div className='card__title'>26 лет</div>
                                <div className='card__subtitle'>Организаций</div>
                            </div>

                            <div className="newpost__left-card">
                                <div className='card__title'>30+</div>
                                <div className='card__subtitle'>Видов услуг</div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default New;