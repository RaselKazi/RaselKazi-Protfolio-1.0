import React from 'react'
import  style  from './LiquidText3.module.css'
export default function LiquidText3({text}) {
  return (
    <> 
    <svg className={style.five} viewbox="0 0 100 20">
      <text textAnchor="middle" x="50" y="13" fontSize="15" fill="hsl(233, 15%, 22%)" fillOpacity="1">{text}</text>
      <defs>
        <pattern id="wave5" x="0" y="-4" width="100%" height="100%" patternUnits="userSpaceOnUse">
          <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" fill="white">
            <animateTransform attributeName="transform" begin="0s" dur="2.5s" type="translate" from="0,0" to="40,0" repeatCount="indefinite" />
          </path>
        </pattern>
      </defs>
      <text textAnchor="middle" x="50" y="13" fontSize="15" fill="url(#wave5)" fillOpacity="1">{text}</text>
    </svg>
      </>
  )
}
