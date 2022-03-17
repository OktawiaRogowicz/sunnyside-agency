import styled from 'styled-components';


export const Nav = styled.nav`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 32px 0 32px;
  z-index: 1;
`

export const NavLogo = styled.nav`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  filter: invert(100%);
`

export const NavMobileIcon = styled.a`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-self: flex-end;
    cursor: pointer;
    transition: all .5s ease;

    &:hover, &:focus, &:active {
      color: rgba(250, 250, 250, 0.3);
    }
    
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavElement = styled.li`
  height: 80px;
  width: 145px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const NavA = styled.a`
  height: 50px;
  width: 125px;
  color: var(--white);
  text-decoration: none;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  
  &:active, &:focus, &:hover {
    background-color: rgba(250, 250, 250, 0.3);
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
    font-size: 15px;
    color: var(--white);
  }
`

export const Contact = styled(NavA)`
  background-color: var(--white);
  text-transform: uppercase;
  font-family: 'Fraunces', serif;
  font-size: 15px;
  color: var(--very_dark_desaturated_blue);
`;