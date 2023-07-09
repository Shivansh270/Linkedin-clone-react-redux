import React from 'react'
import "./InputOption.css" 
 
const InputOption = ({title,Icon, color}) => {
  return (
    <div className='inputOption'>
        <Icon style={{color: color}} />
        <p>{title}</p>
    </div>
  )
}

export default InputOption