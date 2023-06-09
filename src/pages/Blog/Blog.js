import React ,{useState, useContext} from 'react'
import kapusta from "../../assets/kapusta.jpg"
import {MyContext} from "../../Context";
import "./blog.scss"
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {Pagination} from 'antd';
export default function Blog() {



  const {posts,page, setPage,  status, setStatus} = useContext(MyContext);
  const [sort, setSort] = useState('');
  const showCount = posts.filter(item => status === 'all' ? item : item.category === status).filter((item, idx) => {
    return idx + 1 <= page * 9 && idx >= page * 9 - 9
}).length,
showCountsLength = posts.filter(item => status === 'all' ? item : item.category === status).length;








  return (
    <section className="blog">
          <div className="container">
            <div className='d-flex'>
              <div className="blog__items">

              {
                    showCountsLength <= 0
                        ? 'Выберите категорию'
                        : <>
                            <p>Показано: {showCount} из {showCountsLength} новостей</p>
                     
                                
                                    {
                                        posts.filter(item => status === 'all' ? item : item.category === status).filter((item, idx) => {
                                            return idx + 1 <= page * 9 && idx >= page * 9 - 9
                                            // вывод товаров
                                        }).map((item) => (

                                            <div key={item.id} className='blog__item'>
                                          <div className="blog__item-info">
                                      <span className="blog__item-date"> {item.data}</span> | 
                                         <a href="#" className="blog__item-author">{item.avtor}</a>|
                                          </div>
                                          <h3 className="blog__item-title">
                                          {item.title}
                                          </h3>

                                                    <LazyLoadImage
                                                        className='blog__item-img'
                                                        alt='t-short'
                                                        src={`../${item.image[Object.keys(item.image)[0]]}`}
                                                        effect='blur'
                                                    />
                                              
                                              <p className="blog__item-text">
                                              {item.descr}
                                                  </p>
                                           
                                            </div>
                                        ))
                                    }
                                

                          
                            </>
                }


                  </div>
                 {
                    
                    // пагинация
                        <Pagination simple onChange={setPage} current={page}
                                    total={posts.filter(item => status === 'all' ? item : item.category === status).length}
                                    pageSize={9}/> 
                }
               
              
              
            
          <aside className="aside">
            <form className= "aside__search">
              <input type="text" className="aside__search-input" placeholder="Search"/>
              <button className="aside__search-btn" type="submit">
                <img src="images/Shape.svg" alt="" className=""/>

              </button>
            </form>
            <div  className="blog__category">
              <h6  className="blog__category-title">
                Категорий
              </h6>
              <ul  className="blog__category-list">
              <li  className="blog__category-item"
              
              onClick={()=>{
                setPage(1);
                setStatus('all')

              }}
              >
               
                  Все новости
                  
                </li>
                <li  className="blog__category-item"
                
                onClick={()=>{
                  setPage(1);
                  setStatus('tech')
                }}
                >
                 
                  Cельхоз техника
                  
                </li>
                <li  className="blog__category-item"
                
                   
                onClick={()=>{
                  setPage(1);
                  setStatus('plants')
                }}
                
                >
                
                  Растениеводство
                  
                </li>
                <li  className="blog__category-item"
                   onClick={()=>{
                    setPage(1);
                    setStatus('animal')
                  }}
                >
                
                  Животные
                 
                </li>
              
              </ul>
            </div>

           
            <div  className="blog__tags">
              <h6  className="blog__tags-title">
               Тэги
              </h6>
              <a href=""  className="blog__tags-link">
               #CпасиПланету
              </a>
              <a href=""  className="blog__tags-link">
                #ЭкоБаланс
              </a>
            </div>
          
          </aside>
          </div>
</div>
  
        
          
        </section>

  )
                
}