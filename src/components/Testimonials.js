import React from "react";
import styled from "styled-components";
import IconEmily from "../images/image-emily.jpg";
import IconJennie from "../images/image-jennie.jpg";
import IconThomas from "../images/image-thomas.jpg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  flex-flow: column;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10rem 0 5rem 0;

  h1 {
    font-family: 'Fraunces', serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.313rem;
    color: var(--grayish_blue);
    flex: 0 1 auto;
    max-width: 80%;
  }

  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`

const TestimonialsContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;

  @media screen and (max-width: 760px) {
    display: inline-block;
  }
`

const Testimonial = styled.div`
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

  padding: 5% 0 5% 0;

  @media screen and (max-width: 768px) {
    padding: 2% 0 2% 0;
  }

  img {
    border-radius: 100%;
    width: 80px;
    height: 80px;
    top: 50%;
    margin: 0;
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
            <h1>Client testimonials</h1>
            <TestimonialsContainer>
                <Testimonial>
                    <Child>
                        <img src={IconEmily} alt={"Logo"}/>
                    </Child>
                    <Child>
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and
                            deadlines were always hit.</p>
                    </Child>
                    <Child>
                        <h2>Emily R.</h2>
                        <h3>Marketing Director</h3>
                    </Child>
                </Testimonial>
                <Testimonial>
                    <Child>
                        <img src={IconThomas} alt={"Logo"}/>
                    </Child>
                    <Child>
                        <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a
                            satisfying and enjoyable experience.</p>
                    </Child>
                    <Child>
                        <h2>Thomas S.</h2>
                        <h3>Chief Operating Officer</h3>
                    </Child>
                </Testimonial>
                <Testimonial>
                    <Child>
                        <img src={IconJennie} alt={"Logo"}/>
                    </Child>
                    <Child>
                        <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
                            recommended!</p>
                    </Child>
                    <Child>
                        <h2>Jennie F.</h2>
                        <h3>Business Owner</h3>
                    </Child>
                </Testimonial>
            </TestimonialsContainer>
        </Container>
    )
}

export default Testimonials;