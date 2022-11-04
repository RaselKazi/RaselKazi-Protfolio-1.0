import React from 'react'
import  style  from './MontserratText.module.css'
export default function MontserratText() {
  return (
    <><div className={style.container}>
  <svg className={style.svg} viewBox="0 0 960 300">
    <symbol id="sText">
      <text textAnchor="middle" x="48%" y="90%">RASEL KAZI</text>
    </symbol>

    <g className="gAnts">
      <use xlinkHref="#sText" className={style.textCopy}></use>
      <use xlinkHref="#sText" className={style.textCopy}></use>
      <use xlinkHref="#sText" className={style.textCopy}></use>
      <use xlinkHref="#sText" className={style.textCopy}></use>
      <use xlinkHref="#sText" className={style.textCopy}></use>
    
    </g>
  </svg>
</div> </>
  )
}
