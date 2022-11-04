import React from 'react'
import  style  from './WaveTextAnimation.module.css'
export default function WaveTextAnimation() {
  return (
    <div className={style.container}>
  <div className={style.coast}>
    <div className={style.waveRelWrap}>
      <div className={style.wave}></div>
    </div>
  </div>
  <div className={`${style.coast} ${style.delay}`}>
    <div className={style.waveRelWrap}>
      <div className={`${style.wave} ${style.delay}`}></div>
    </div>
  </div>
  <div className={`${style.text} ${style.textW}`}>a</div>
  <div className={`${style.text} ${style.textA}`}>c</div>
  <div className={`${style.text} ${style.textV}`}>e</div>
  <div className={`${style.text} ${style.textE}`}>l</div>
</div>
  )
}
