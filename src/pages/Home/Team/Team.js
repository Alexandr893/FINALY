import React from 'react';
import kombain from "../../../assets/kombinet.jpg"

import "./team.scss"


const Team = () => {
  
    return (
        <section className='team'>
            <div className="container">
                <h2 className="team__title">{"Другие виды деятельности"}</h2>
                <div className="team__content">
                    <img src={kombain}/> 
                    <div className="team__content-right">
                        <p className="team__content-text"> 	Предоставление услуг в области растениеводства</p>
                        <p className="team__content-text"> 	Предоставление услуг в области животноводства</p>
                        <p className="team__content-text"> 	Производство хлеба и мучных кондитерских изделий, тортов и пирожных недлительного хранения</p>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;