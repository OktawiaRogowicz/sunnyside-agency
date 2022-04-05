import React, {useState} from "react";
import {Contact, Nav, NavA, NavContainer, NavElement, NavLogo, NavMenu, NavMobileIcon} from "./NavbarElements";
import LogoSrc from '../../images/logo.svg';
import Hamburger from '../../images/icon-hamburger.svg';
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const close = () => {
        if(isOpen)
            setIsOpen(false);
    }

    return (
        <div>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        <img src={LogoSrc} alt={"Logo"}/>
                    </NavLogo>
                    <NavMobileIcon>
                        <img src={Hamburger} alt={"Logo"} onClick={toggle}/>
                    </NavMobileIcon>
                    <NavMenu>
                        <NavElement><NavA className="navItem" href="#welcome">About</NavA></NavElement>
                        <NavElement><NavA className="navItem" href="#welcome">Services</NavA></NavElement>
                        <NavElement><NavA className="navItem" href="#welcome">Projects</NavA></NavElement>
                        <NavElement><Contact className="navItem" href="#welcome">Contact</Contact></NavElement>
                    </NavMenu>
                </NavContainer>
            </Nav>
            <div>
                <Sidebar isOpen={isOpen} close={close}/>
            </div>
        </div>
    )
}

export default Navbar;