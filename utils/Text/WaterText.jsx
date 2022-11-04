import React from 'react'
import  style  from './WaterText.module.css'
export default function WaterText({text,size}) {
  return (
    <div  className={style.liquid}>
  <h1>{text}</h1>
  <h1>{text}</h1>
  <h1>{text}</h1>
  <h1>{text}</h1>
</div>
  )
}
