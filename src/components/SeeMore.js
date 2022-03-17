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
`

const TextContainer = styled.div`
  height: 50%;
  display: inline-block;
`

const ContainerElement = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.h1`
  margin: 0;
  font-family: 'Fraunces', serif;
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const SeeMore = () => {

    return (
        <Container>
            <TextContainer>
                <ContainerElement>
                    <Text>We are creatives</Text>
                </ContainerElement>
                <ContainerElement>
                    <img src={Arrow} alt={"Arrow down"}/>
                </ContainerElement>
            </TextContainer>
        </Container>
    )
}

export default SeeMore;