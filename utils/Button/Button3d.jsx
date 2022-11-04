import React from 'react'
import  style  from './Button3d.module.css'
export default function Button3d({title,link}) {
  return (
    <a  className={` ${style.btn12} ${style.customBtn}`}><span>Click!</span><span>{title}</span></a>
  )
}
