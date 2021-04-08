import React from 'react'
import './Header.css'
import logo from "../Mshoping.png"
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar } from '@material-ui/core';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import Login from "./Login";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
function Header(props) {
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
    
</div>

<div class="header__right"></div>
<div class="header__info">
<Button variant="outlined" color="primary" onClick={() => props.history.push('Login')}>Logout</Button>

</div>

        </div>
    )
}

export default withRouter(Header);
