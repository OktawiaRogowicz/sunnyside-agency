import React from "react";
import styled from "styled-components";
import {Foo, FooA, FooContainer, FooElement, FooIcons, FooLogo, FooMenu} from "./FooterElements";
import LogoSrc from "../../images/logo.svg";
import IconPinterest from "../../images/icon-pinterest.svg";
import IconFacebook from "../../images/icon-facebook.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import IconInstagram from "../../images/icon-instagram.svg";

const Footer = () => {

    return (
        <Foo>
            <FooContainer>
                <FooLogo>
                    <img src={LogoSrc} alt={"Logo"}/>
                </FooLogo>
                <FooMenu>
                    <FooA className="FooItem" href="#welcome">About</FooA>
                    <FooA className="FooItem" href="#welcome">Services</FooA>
                    <FooA className="FooItem" href="#welcome">Projects</FooA>
                </FooMenu>
                <FooIcons>
                    <img src={IconFacebook} alt={"Logo"}/>
                    <img src={IconInstagram} alt={"Logo"}/>
                    <img src={IconTwitter} alt={"Logo"}/>
                    <img src={IconPinterest} alt={"Logo"}/>
                </FooIcons>
            </FooContainer>
        </Foo>
    )
}

export default Footer;