import React from 'react';

import "./footer.scss"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__nav">


                <div className="footer__info">
                    <div className="footer__card">
                        <p className="footer__card-desc">© Все права защищены</p>
                        <p className="footer__card-desc">Политика конфиденциальности</p>
                        <p className="footer__card-desc">Публичная оферта</p>
                    </div>


                    <ul className='footer__menu'>
                        <li className='footer__menu-item'>Главная</li>
                        <li className='footer__menu-item'>Каталог</li>
                        <li className='footer__menu-item'>О продукте</li>
                        <li className='footer__menu-item'>Контакты</li>
                    </ul>


                <div className="footer__contact"> 
                    <p className="footer__number">
                    Verhnepashinskoe@mail.ru
                    </p>
                
                    <div className="footer__card-icons">
                    Дата образования: 20.05.1997
                        <div className="footer__icon">
                        </div>
                      
                    </div>
                    </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;