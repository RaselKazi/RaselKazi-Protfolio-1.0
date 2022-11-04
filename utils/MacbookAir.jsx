import React from 'react'
import  style  from './MacbookAir.module.css'
export default function MacbookAir() {
    return (<> <div className={style.macbook}>
        <div className={style.inner}>
          <div className={style.screen}>
            <div className={style.faceOne}>
              <div className={style.camera}></div>
              <div className={style.display}>
                <div className={style.shade}></div>
              </div>
              <span>Rasel kazi</span>
            </div>
            <span  className={style.logo} >RASEL</span>
          </div>
          <div className={style.body}>
            <div className={style.faceOne}>
              <div className={style.touchpad}>
              </div>
              <div className={style.keyboard}>
                {[...Array(5)].map((i)=><div key={i} className={style.key}></div>)}
                <div className={`${style.key} ${style.space}`}></div>
      
                {[...Array(53)].map((i)=><div key={i} className={style.key}></div>)}
                {[...Array(16)].map((i)=><div key={i} className={`${style.key} ${style.f}`}></div>)}
             
              </div>
            </div>
            <div className={`${style.pad} ${style.one}`}></div>
            <div className={`${style.pad} ${style.two}`}></div>
            <div className={`${style.pad} ${style.three}`}></div>
            <div className={`${style.pad} ${style.four}`}></div>
          </div>
        </div>
        <div className={style.shadow}></div>
      </div></>
      
          
        )
}
