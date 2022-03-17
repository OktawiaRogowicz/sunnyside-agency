import React from "react";
import {Contact, Side, SideA, SideContainer, SideElement, SideMenu} from "./SidebarElements";

const Sidebar = ( {isOpen, toggle} ) => {

    return (
        <Side isOpen={isOpen} onClick={toggle}>
            <SideContainer>
                <SideMenu>
                    <SideElement><SideA className="navItem" href="#welcome">About</SideA></SideElement>
                    <SideElement><SideA className="navItem" href="#welcome">Services</SideA></SideElement>
                    <SideElement><SideA className="navItem" href="#welcome">Projects</SideA></SideElement>
                    <SideElement><Contact className="navItem" href="#welcome">Contact</Contact></SideElement>
                </SideMenu>
            </SideContainer>
        </Side>
    )
}

export default Sidebar;