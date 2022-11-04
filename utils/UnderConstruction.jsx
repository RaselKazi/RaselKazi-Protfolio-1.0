import React from 'react'
import  style  from './UnderConstruction.module.css'
export default function UnderConstruction() {
    return (<> 
        <div className={style.back}>
            <div className={style.icon}></div>
            <div className={style.kaj}>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
            </div>
        </div>
      </>  
      )
}
