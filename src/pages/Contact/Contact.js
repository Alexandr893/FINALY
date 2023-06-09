import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import "./Contact.scss"

export default function Contact() {

  const defaultState = {
    center: [58.425428, 92.268631],
    zoom: 8,
    options: {
  
      size: 'large',
     
      provider: 'yandex#search'
  }
    
  }
  return (

    <div className='container'> 
        <div className='p-top'> 
    <div className='flexbogs'> 
    <div className='d-letf'> 
    <YMaps>
    
      <Map defaultState={defaultState} style={{ height: '500px', width:'800px'}}>

        <Placemark geometry={[58.425428, 92.268631]}  />

      </Map>
    </YMaps>
    </div>
    

    <div className='d-right'>
      <div className='d-title'>
        Данные
      </div>
      <div className='stroke'> 
      <p className='inn'>ИНН:</p> <span classname="mod">2412006904</span>
      </div>
      <div className='stroke'> 
      <p className='ogrn'>ОГРН:</p><span classname="mod">1022401273840</span>
      </div>
      <div className='stroke'> 
      <p className='kpp'> КПП:</p> <span classname="mod">244701001</span>
      </div>

      <p className='adress'>	663148, Красноярский Край , р-н Енисейский, с.<br/> Верхнепашино, ул. Советская, д.24 </p>
    </div>
    </div>
     </div>
     </div>
  );
}

