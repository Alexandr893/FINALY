import React, {useContext} from 'react';
import {MyContext} from "../../Context";
import Collection from './Collection/Collection'

import New from './New/New'
import Team from './Team/Team'

export default function Home() {

// 2.Взять контекст из моего контекста
  const {count,setCount,user,setUser} = useContext(MyContext);

  
  

  return (
    <>
    <New/>
    <Collection/> 
   
    <Team/>
    </>
  )
}
