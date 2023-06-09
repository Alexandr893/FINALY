import React, {createContext, useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
// создание контекста
export const MyContext = createContext();


export const Context = (props) => {
    



    const [cart, setCart] = useState([]);
    // стейт юзера
    const [user, setUser] = useState({
        login: ''
    });

    const [ticket, setTicket] = useState([]);

    // просто код картинки костыль
    const [key, setKey] = useState("1");

    const [page, setPage] = useState(1);
// 3.магазин
    const [status, setStatus] = useState('all');

    const [product, setProduct] = useState({});
// 3.магазин
    const [shop, setShop] = useState([]);

//блог
    const [posts,setPosts] = useState([]);
   



    const addCart = (product) => {
        let idx = cart.findIndex(item => item.id === product.id );
        if (idx >= 0) {
            setCart(cart.map(item => {
                if (item.id === product.id && item.key === product.key  ) {
                    return {...item, count: +item.count + +product.count}
                } else {
                    return item
                }
            }))
        } else {
            setCart([...cart, product]);
        }
    };

    const updateCart = (id, count) => {
        setCart(cart.map(item => {
            if (item.id === id ) {
                return {...item, count: count}
            } else {
                return item
            }
        }))
    };

    const deleteCart = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id
        }))
    };

// получить продукты с бека
    const getAllProducts = () => {
        axios('http://localhost:8080/products')
            .then(({data}) => setShop(data))
            
    };
    const getAllPosts = () => {
        axios('http://localhost:8080/posts')
            .then(({data}) => setPosts(data))
            
    };

// получить новости с бека 


        const navigate = useNavigate();

    // отправка юзера на бек
        const regUser = (data) => {
            axios.post('http://localhost:8080/Register', {...data, orders: []})
                .then((res) => {
                    // сохранения юзера
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    setUser(res.data.user)
                    // чтобы сразу на главную кидал
                    navigate('/')
                })
        };


        // авторизация
        const loginUser = (data) => {
            axios.post('http://localhost:8080/login', data)
                .then((res) => {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    setUser(res.data.user);
                    navigate('/')
                })
                .catch((error) => {
                   alert(error);
                   
                    });
        };

     

     // Очистка юзера
     const removeUser = () => {
        // удаляем их хранилища юзера
        localStorage.removeItem('user');
        // очищаем данные о юзере
        setUser({
            login: ''
        })
   

};

         // получение юзера после  обновления страницы просто чтоб держался - КОСТЫЛЬ
         useEffect(() => {
            if (localStorage.getItem('user') !== null) {
                setUser(JSON.parse(localStorage.getItem('user')))
            }
    
            if (localStorage.getItem('cart') !== null) {
                setCart(JSON.parse(localStorage.getItem('cart')))
    
            }
            getAllProducts()
            getAllPosts() 
        }, []);
    
        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart))
        }, [cart]);
    
        useEffect(() => {
            localStorage.setItem('user', JSON.stringify(user));
        }, [user.orders]);


        


    // передаем в значения наши стейты и функций
        const value = {
            user,
            setUser,
            regUser,
            removeUser,
            loginUser,
            getAllProducts,
            shop,
            page,
            setPage,
            setStatus,
            status,
            product,
            setProduct,
            ticket,
            setTicket,
            key,
            setKey,
            addCart,
            cart,
            setCart,
            updateCart,
            deleteCart,
            getAllPosts,
            posts,
            setPosts

        }

    return <MyContext.Provider value={value}>
    {props.children}
</MyContext.Provider>

}