import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import SeeMore from "./components/SeeMore";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import styled from "styled-components";
import DesktopHeader from "./images/desktop/image-header.jpg";
import Gallery from "./components/Gallery";
import Footer from "./components/footer/Footer";

const Container = styled.div`
  height: 100vh;
  max-height: 1135px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-image: url(${DesktopHeader});
  background-color: var(--blue);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 140%;
  color: var(--white);

  @media screen and (max-width: 425px) {
    background-size: 220%;
  }
`

function App() {
  return (
    <div className="App">
        <Container>
            <Navbar/>
            <SeeMore/>
        </Container>
        <Products/>
        <Testimonials/>
        <Gallery/>
        <Footer/>
    </div>
  );
}

export default App;
