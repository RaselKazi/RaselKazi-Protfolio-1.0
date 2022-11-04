import React from 'react'
import  style  from './PaperFoldText.module.css'
export default function PaperFoldText({text}) {
  return (
    <div className={style.wrapper}>
	<h1 data-heading={text}>{text}</h1>
</div>
  )
}
