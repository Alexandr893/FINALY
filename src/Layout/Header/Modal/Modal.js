import React, { Children } from 'react'
import "./Modal.scss"


export default function Modal({active,setActive,children}) {
  return (
    <div className={active?"modal active":"modal"} onClick={()=>setActive(false)}>
        <div className='modal-content' onClick={e=>e.stopPropagation()}>
            
                {children}
            
        </div>
    </div>
  )
}
