import React from 'react'
import './Header.css'
import logo from "../Mshoping.png"
import SearchIcon from '@material-ui/icons/Search';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
function Header(props) {
    return (
        <Navbar color="light" light expand="md" className='w-100 col-11' >
            <NavbarBrand href="/"><img src={logo} alt="Logo" style={{width: 60, height: 'auto'}} /></NavbarBrand>
            {/* <NavbarToggler /> */}
            {/* <Collapse navbar> */}
                <Nav className="mr-auto" navbar >
                    <NavItem className='header__input'>
                        <SearchIcon color="primary" />
                        <input placeholder="Search Plan" type="text" />
                    </NavItem>
                </Nav>
                <NavbarText className='ml-auto' >
                    <Button outline color="danger" onClick={() => props.history.push('Login')}>Logout</Button>
                </NavbarText>
            {/* </Collapse> */}
        </Navbar>
        // <div className="header" style={{ width: '100%' }} >
        //     <div class="header__left">
        //         <img src={logo} alt="Logo" />
        //         <div class="header__input">
        //             <SearchIcon color="primary" />
        //             <input placeholder="Search Plan" type="text" />
        //         </div>
        //     </div>
        //     <div class="header__center">

        //     </div>

        //     <div class="header__right"></div>
        //     <div class="header__info">
        //         

        //     </div>

        // </div>
    )
}

export default withRouter(Header);
