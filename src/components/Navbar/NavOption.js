import React from 'react'
import Navbar from './Navbar'
import "./NavOption.css"
import { Avatar } from '@mui/material';

const NavOption = ({title, Icon, avatar}) => {
  return (
    <div className='nav-option'>
        {Icon && <Icon className="nav-option-icon" />}
        {avatar && <Avatar className="nav-option-icon" src={avatar} />}
        <h3 className="nav-option-title">{title}</h3>
    </div>
  )
}

export default NavOption