import React from 'react'
import "./InputOption.css" 
 
const InputOption = ({ Icon, title, color, onClick, liked }) => {
  return (
    <div className={`inputOption ${liked ? 'liked' : ''}`} onClick={onClick}>
      <Icon style={{ color: liked ? "#1B98F5" : color }} />
      <p>{title}</p>
    </div>
  )
}

export default InputOption