import React from 'react'
import  style  from './NeonSign.module.css'
export default function NeonSign() {
  return (
     <div className={style.container}>
    <div className={style.sign} id={style.one}>S</div>
    <div className={style.sign} id={style.two}>K</div>
    <div className={style.sign} id={style.three}>I</div>
    <div className={style.sign} id={style.four}>L</div>
    <div className={style.sign} id={style.four}>L</div>   
  </div>
   
  )
}
