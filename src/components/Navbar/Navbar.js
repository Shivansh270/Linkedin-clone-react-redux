import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NavOption from './NavOption';


const Navbar = () => {
  return (
    <nav className='navbar'>


        <div className='nav-left'>

          <img src='file:///C:/Users/shiva/Downloads/icons8-linkedin.svg' />

          <div className='nav-search'>
            <SearchIcon />
            <input type='text'/>
          </div>

        </div>

        <div className='nav-right'>
          <NavOption Icon={HomeIcon} title="Home"/>   
          <NavOption Icon={SupervisorAccountIcon} title="My Network"/> 
          <NavOption Icon={BusinessCenterIcon} title="Jobs"/>
          <NavOption Icon={ChatIcon} title="Messaging"/>
          <NavOption Icon={NotificationsIcon} title="Notification"/>
          <NavOption
          avatar="/static/images/avatar/1.jpg"
          title="me"
          // sx={{ width: 20, height: 10 }}
          />
        </div>
    </nav>
  )
}

export default Navbar