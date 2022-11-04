import React from 'react'
import  style  from './Button11.module.css'
export default function Button11({title,link}) {
  return (
    <a target="_blank"
    href={link}
    
     className={` ${style.btn11} ${style.customBtn}`} rel="noreferrer">{title}<div className={style.dot}></div></a>
  )
}
