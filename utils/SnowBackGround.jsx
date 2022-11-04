import React from 'react'
import  style  from './SnowBackGround.module.css'
export default function SnowBackGround() {
    return (<> <div className={style.body}>
        {[...Array(200)].map((v,i)=>
        <div key={i} className={style.snow} ></div>)} 
    </div> </>
    
        
      )
}
