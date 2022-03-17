import React from "react";
import styled from "styled-components";

import DesktopGalleryCone from '../images/desktop/image-gallery-cone.jpg';
import DesktopGalleryMilk from '../images/desktop/image-gallery-milkbottles.jpg';
import DesktopGalleryOrange from '../images/desktop/image-gallery-orange.jpg';
import DesktopGallerySugar from '../images/desktop/image-gallery-sugarcubes.jpg';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
`

const Photo = styled.div`
  display: block;
  width: 25%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 760px) {
    display: inline-block;
    width: 50%;
  }
`

const Gallery = () => {

    return (
        <Container>
            <Photo style={{backgroundImage: `url(${DesktopGalleryMilk})`}}/>
            <Photo style={{backgroundImage: `url(${DesktopGalleryOrange})`}}/>
            <Photo style={{backgroundImage: `url(${DesktopGalleryCone})`}}/>
            <Photo style={{backgroundImage: `url(${DesktopGallerySugar})`}}/>
        </Container>
    )
}

export default Gallery;