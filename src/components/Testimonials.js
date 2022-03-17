import React from "react";
import styled from "styled-components";
import IconEmily from "../images/image-emily.jpg";
import IconJennie from "../images/image-jennie.jpg";
import IconThomas from "../images/image-thomas.jpg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Fraunces', serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--grayish_blue);
  }

  @media screen and (max-width: 768px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
`

const ChildContainer = styled.div`
  height: 70%;
`

const Section = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 760px) {
    display: inline-block;
  }
`

const Subsection = styled.div`
  width: 30%;
  margin: auto;
  padding: 5% 0px 5% 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 20% 0 20% 0;
  }
`

const Child = styled.div`

  padding: 20% 0 20% 0;

  @media screen and (max-width: 768px) {
    padding: 2% 0 2% 0;
  }
  
  img {
    border-radius: 100%;
    width: 80px;
    height: 80px;
    top: 50%;
  }
  
  h2 {
    font-family: 'Fraunces', serif;
    font-size: 1.4rem;
    color: var(--very_dark_desaturated_blue);
    margin: 0;
  }
    
  h3 {
    font-size: 1rem;
    color: var(--grayish_blue);
  }
    
  p {
    font-size: 1.2rem;
    color: var(--very_dark_grayish_blue);
    line-height: 1.5;
  }
`

const Testimonials = () => {

    return (
        <Container>
            <ChildContainer>
                <h1>Client testimonials</h1>
                <Section>
                    <Subsection>
                        <Child>
                         <img src={IconEmily} alt={"Logo"}/>
                        </Child>
                        <Child>
                          <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        </Child>
                        <Child>
                            <h2>Emily R.</h2>
                            <h3>Marketing Director</h3>
                        </Child>
                    </Subsection>
                    <Subsection>
                        <Child>
                          <img src={IconThomas} alt={"Logo"}/>
                        </Child>
                        <Child>
                           <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                        </Child>
                        <Child>
                            <h2>Thomas S.</h2>
                         <h3>Chief Operating Officer</h3>
                        </Child>
                    </Subsection>
                    <Subsection>
                        <Child>
                              <img src={IconJennie} alt={"Logo"}/>
                        </Child>
                        <Child>
                             <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        </Child>
                        <Child>
                          <h2>Jennie F.</h2>
                           <h3>Business Owner</h3>
                        </Child>
                    </Subsection>
                </Section>
            </ChildContainer>
        </Container>
    )
}

export default Testimonials;