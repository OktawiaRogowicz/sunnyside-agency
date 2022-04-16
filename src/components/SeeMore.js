import React from "react";
import styled from 'styled-components';
import DesktopHeader from '../images/desktop/image-header.jpg';
import MobileHeader from '../images/mobile/image-header.jpg';
import Arrow from '../images/icon-arrow-down.svg';
import LogoSrc from "../images/logo.svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: var(--white);

  justify-content: center;
  align-items: center;

  h1 {
    margin: 5rem 0 5rem;
    font-family: 'Fraunces', serif;
    font-size: 3.5rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 900;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  img {
    z-index: 1;
    -webkit-animation: action 1s infinite alternate;
    animation: action 1s infinite alternate;
  }

  @-webkit-keyframes action {
    0% {
      transform: translateY(0);
      opacity: 100%;
    }
    100% {
      transform: translateY(-10px);
      opacity: 80%;
    }
  }

  @keyframes action {
    0% {
      transform: translateY(0);
      opacity: 100%;
    }
    100% {
      transform: translateY(-10px);
      opacity: 80%;
    }
  }
`

const SeeMore = () => {

    return (
        <Container>
            <h1>We are creatives</h1>
            <img src={Arrow} alt={"Arrow down"}/>
        </Container>
    )
}

export default SeeMore;