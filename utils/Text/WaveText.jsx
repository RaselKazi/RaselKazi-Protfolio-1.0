import React from 'react'
import  style  from './WaveText.module.css'
export default function WaveText() {
  return (
    <><div className={style.body}><div id={style.ui}>
   
    {[...Array(26).fill(`RASEL_KAZI`)].map((value,i)=><div key={i} className={style.text}>{value}</div>)}
  
  
</div></div> </>
  )
}
