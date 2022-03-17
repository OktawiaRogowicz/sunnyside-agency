import styled from 'styled-components';

export const Side = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  box-sizing: border-box;
  top: 130px;
  padding: 0 32px;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 24px solid #fff;
    border-top: 20px solid transparent;
    border-bottom: 12px solid #fff;
    top: -30px;
    right: 32px;
  }
`

export const SideContainer = styled.div`
  align-items: center;
  display: block;
  background-color: var(--white);
  padding: 32px 0;
`

export const SideMenu = styled.div`

`

export const SideElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SideA = styled.a`
  height: 50px;
  width: 125px;
  color: var(--dark_grayish_blue);
  text-decoration: none;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 10px;

  &:active, &:focus, &:hover {
    background-color: rgba(250, 250, 250, 0.3);
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
    font-size: 15px;
    color: var(--white);
  }
`

export const Contact = styled(SideA)`
  background-color: var(--yellow);
  text-transform: uppercase;
  font-family: 'Fraunces', serif;
  font-size: 15px;
  color: var(--very_dark_desaturated_blue);
`;