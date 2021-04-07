import React from 'react'
import './Header.css'
import logo from "../Mshoping.png"
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
           
           <div class="header__left">
           <img src={logo} alt="Logo" />
           <div class="header__input">
               <SearchIcon/>
               <input placeholder="Search Plan" type="text"/>
           </div>
</div>
<div class="header__center">
    <div class="header__option">
<HomeIcon fontSize="large"/>
    </div>
    <div class="header__option">
<DashboardIcon fontSize="large"/>
    </div>
    <div class="header__option">
    <CloudUploadIcon fontSize="large"/>
    </div>
    <div class="header__option">
    <ChatIcon fontSize="large"/>
    </div>
</div>

<div class="header__right"></div>
<div class="header__info">
<Avatar/> 

</div>

        </div>
    )
}

export default Header