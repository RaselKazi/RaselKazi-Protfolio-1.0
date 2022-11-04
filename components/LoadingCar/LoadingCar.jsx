import React from 'react'
import style from './LoadingCar.module.css'
export default function LoadingCar() {
  return (
    <div className={style.body}>
    <div id={style.truck}>
<div className={style.inner}>
  <h1>RASEL KAZI</h1>
  <div className={style.side}><span></span><span></span></div>
  <div className={style.side}><span></span><span></span></div>
  <div className={style.side}><span></span><span></span></div>
  <div className={style.side}><span></span><span></span></div>
  <div className={style.side}><span></span><span></span></div>
  <div className={style.side}><span></span><span></span></div>
  <div className={style.shadow}></div>
  <div className={style.counter}></div>
  <div className={style.menu}>
  <div className={style.tabletScreen}>
      <div className={style.screenLineNumber}>
        1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>
      </div>
      <div className={style.screenCodeComment}>
        **<br/>&nbsp;*<br/>&nbsp;*<br/>&nbsp;*<br/>&nbsp;*<br/>&nbsp;*/
      </div>
      <div className={style.screenText}>
        <br/>
        <span>Hey!</span><br/>
        <span>My name is Rasel</span><br/>
        <span>and I have a passion for</span><br/>
        <span>the web!</span><br/>
        <br/><br/>
        <div className={style.screenCode}>
          <span className={style.codeBlue}>function</span>&nbsp;<span className={style.codeGreen}>letsDo</span>
        </div>

      </div>
    </div>
  </div>

</div>
</div>
<svg style={{display:"none"}} version='1.1' xmlns='http://www.w3.org/2000/svg'>
<defs>
  <filter id='squiggly'>
    <feturbulence basefrequency='0.05 0.025' id='turbulence' numoctaves='3' result='noise' seed='0'></feturbulence>
    <fedisplacementmap id='displacement' in2='noise' in='SourceGraphic' scale='2'></fedisplacementmap>
  </filter>
  <filter id='squiggly2'>
    <feturbulence basefrequency='0.04 0.015' id='turbulence' numoctaves='3' result='noise' seed='1'></feturbulence>
    <fedisplacementmap in2='noise' in='SourceGraphic' scale='3'></fedisplacementmap>
  </filter>
</defs>
</svg></div>
  )
}
