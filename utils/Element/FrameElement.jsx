import React from 'react'
import  style  from './FrameElement.module.css'
export default function FrameElement() {
  return (
    <div id={style.office} className={style.container}>
 
    {/* <!--PHOTOS--> */}
    <div id={style.picture}>
        <div id={style.picture1}></div>
        <div id={style.pictureSoporte}></div>
      </div>
      {/* <!--END OF PHOTOS-->  */}
    
    {/* <!--GALLETAS--> */}
      <div id={style.galletas}>
        <div id={style.plato}>
          <div id={style.sombra}></div>
        </div>
        <div id={style.galleta1}>
          <div id={style.chispa1}></div>
          <div id={style.chispa2}></div>
          <div id={style.chispa3}></div>
        </div>
        <div id={style.galleta2}>
          <div id={style.chispa4}></div>
          <div id={style.chispa5}></div>
          <div id={style.chispa6}></div>
        </div>
    
      </div>
      {/* <!--END OF GALLETAS--> */}
    
    
    {/* <!--PLANT--> */}
      <div id={style.planta}>
        <div id={style.suculenta} className={style.container}>
          <div id={style.hoja1}></div>
          <div id={style.hoja2}></div>
          <div id={style.hoja3}></div>
          <div id={style.hoja4}></div>
          <div id={style.hoja5}></div>
        </div>
        <div id={style.maceta}>
        </div>
      </div>
      {/* <!--END OF PLANT--> */}
    
    
      <div className={style.wall}>
        <div className={style.frame1}>
          <div className={style.reflection}></div>
        </div>
        <div className={style.frame2}>
          <div className={style.reflection}></div>
        </div>
        <div className={style.frame3}>
          <div className={style.reflection}></div>
        </div>
        <div className={style.frame4}>
          <div className={style.reflection}></div>
        </div>
        <div className={style.frame5}>
          <div className={style.reflection}></div>
        </div>
        <div className={style.frame6}>
          <div className={style.reflection}></div>
        </div>
      </div>
    
    
    </div>
    
  )
}
