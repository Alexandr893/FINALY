import React,{useContext} from 'react'
import {  Routes,Route, useLocation } from "react-router-dom";
import Aboutproduct from '../pages/AboutProduct/AboutProduct';
import Basket from '../pages/Basket/Basket';
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Notfound from '../pages/Notfound/Notfound';
import Product from '../pages/Product/Product';
import Register from '../pages/Register/Register';
import Shop from "../pages/Shop/Shop";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Order from '../pages/order/Order';
import Success from '../pages/success/Success';
import Blog from '../pages/Blog/Blog';
import {MyContext} from "../Context";

export default function Layout() {

  // 1.хук отвечающий за поиск компонента сайта,сам по себе является объектом с атрибутом путьфайла - грубо говоря где находимся
  const location = useLocation();
  const {user} = useContext(MyContext);

  return (
    <div>

    
            {
                location.pathname !== '/Login' && location.pathname !== '/register' ? <Header/> : ''
               
            }

         

        {/* <Header/>  */}
         <Routes>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/product/:id' element={<Aboutproduct/>}/>
      <Route path='/Basket' element={<Basket/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/blog' element={<Blog/>}/>
  
      {/* 1.1 Кроме 404 */}
      <Route path='*' element={<Notfound/>}/>
      

      </Routes>
   



{
  
}


  



{




  // 1.Добавлять футер к определенным страницам
      location.pathname ===  "/" ||
    location.pathname === "/Contact" || 
    location.pathname === "/Shop" || 
    location.pathname ==="/Basket" ||
    location.pathname === "/Product" ||
    location.pathname === "/product/:id" || 
    location.pathname ==="/Blog" 
    ? <Footer/>:' '
    



}



    </div>
  )



    // 1.
 






}
