import React from "react";
import styled from "styled-components";
import DesktopTransform from '../images/desktop/image-transform.jpg';
import DesktopPhotography from '../images/desktop/image-photography.jpg';
import DesktopStandOut from '../images/desktop/image-stand-out.jpg';
import DesktopGraphicDesign from '../images/desktop/image-graphic-design.jpg';

import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  width: 100%;
`

const Section = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;

  @media screen and (max-width: 760px) {
    height: 120vh;
    flex-direction: column;
  }
`

const Subsection = styled.div`
  width: 50%;
  order: 1;
  
  text-align: left;
  display: flex;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media screen and (max-width: 760px) {
    height: 50%;
    width: 100%;
    order: 1;
  }
`

const Text = styled.div.attrs(props => ({
    borColor: props.c,
}))`
  
  width: 80%;
  margin: auto;
  
  display: inline-block;
  
  h1 {
    font-family: 'Fraunces', serif;
    font-size: 2.5rem;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    line-height: 1.5;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  a {
    position: relative;
    z-index: 1;
    font-family: 'Fraunces', serif;
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    
    &:before {
      border-top: 10px solid;
      border-color: ${props => props.c};;
      opacity: 0.5;
      border-radius: 10px;
      content:"";
      margin: 0 auto; /* this centers the line to the full width specified */
      position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
      top: 60%; left: -10%; right: 0; bottom: 0;
      width: 120%;
      z-index: -1;
      
    }
    
    &:active, &:hover, &:focus {
      cursor: pointer;
    }

    &:active:before, &:hover:before, &:focus:before {
      opacity: 1.0;
    }
  }
`

const SubsectionImageWithText = styled(Subsection) `
  text-align: center;
  
  ${Text} {
    margin: 0 auto 0 auto;
    align-self: flex-end;
    height: 40%;
  }
`


const Products = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return (
        <Container>
            <Section>
                <Subsection style={isMobile ? {order: "2"} : {order: "1"}}>
                        <Text c="var(--yellow)">
                            <h1>Transform your brand</h1>
                            <p>
                                We are a full-service creative agency specializing in helping brands grow fast.
                                Engage your clients through compelling visuals that do most of the marketing for you.
                            </p>
                            <a href="#">Learn more</a>
                        </Text>
                </Subsection>
                <Subsection style={isMobile ? {order: "1"} : {order: "2"}}
                            style={{backgroundImage: `url(${DesktopTransform})`, isMobile}}
                >
                </Subsection>
            </Section>
            <Section>
                    <Subsection style={{backgroundImage: `url(${DesktopStandOut})`}}/>
                    <Subsection>
                            <Text c="var(--soft_red)">
                                <h1>Stand out to the right audience</h1>
                                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                                <a href="#">Learn more</a>
                            </Text>
                    </Subsection>
            </Section>
            <Section>
                    <SubsectionImageWithText style={{backgroundImage: `url(${DesktopGraphicDesign})`}}>
                            <Text style={{color: 'var(--dark_desaturated_cyan)'}}>
                                    <h1>Graphic design</h1>
                                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                            </Text>
                    </SubsectionImageWithText>
                    <SubsectionImageWithText style={{backgroundImage: `url(${DesktopPhotography})`}}>
                            <Text style={{color: 'var(--dark_blue)'}}>
                                    <h1>Photography</h1>
                                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                            </Text>
                    </SubsectionImageWithText>
            </Section>
        </Container>
    )
}

export default Products;