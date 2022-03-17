import styled from 'styled-components';

export const Foo = styled.div`
  width: 100%;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--cyan);

  @media screen and (max-width: 760px) {
    min-height: 50vh;
  }
`

export const FooContainer = styled.div`
`

export const FooLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  filter: invert(49%) sepia(37%) saturate(450%) hue-rotate(118deg) brightness(90%) contrast(80%);
`

export const FooMenu = styled.div`
  min-width: 300px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    min-width: 250px;
  }
`

export const FooA = styled.a`
  height: 50px;
  color: var(--dark_moderate_cyan);
  text-decoration: none;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:active, &:focus, &:hover {
    color: var(--white);
  }
`

export const FooIcons = styled.div`
  width: 150px;
  text-align: center;
  justify-content: space-between;
  display: inline-flex;
  align-items: center;
  padding-top: 20px;
`
