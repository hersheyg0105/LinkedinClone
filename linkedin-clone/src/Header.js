import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>

        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={GroupsIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar='https://media.licdn.com/dms/image/D4E35AQFeDddiTTCLNw/profile-framedphoto-shrink_200_200/0/1624372522297?e=1675234800&v=beta&t=NVVVw4-uBnaa9UIZfs23TNnf4RUZ0xrQ61iEMSvmIgM' title='me' />

        </div>

    </div>
  )
}

export default Header