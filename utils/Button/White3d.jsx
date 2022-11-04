import React from 'react'
import  style  from './White3d.module.css'
export default function White3d({setOpenModule}) {
  return (<button onClick={()=>setOpenModule(true)} className={style.btn} >Default</button>
    
  )
}
