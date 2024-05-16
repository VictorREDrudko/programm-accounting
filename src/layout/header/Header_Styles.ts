import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Header = styled.header`
  background-color: ${Theme.colors.mainBg};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 10px 0;
  /* font-family: "NotoSans"; */
`

const Logo = styled.img`
  width: 150px;
  transition: ${Theme.animation.transition};

  &:hover {
    transform: scale(1.1);
  }
`

const Nav = styled.nav`
  & ul {
    height: 100%;
  }

  & img {
    width: 30px;
    position: absolute;
    top: -5px;
    left: -40px;
    transition: ${Theme.animation.transition};;
    
    &:hover {
      transform: scale(1.1);
    }
  }

  & a {
    display: inline-block;
    text-transform: uppercase;
    position: relative;
    transition: ${Theme.animation.transition};;
  }

  & a::after {
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
    background-color: ${Theme.colors.fontHover};
    transform: scale(0);
    position: absolute;
    top: 25px;
    left: 0;
    transition: ${Theme.animation.transition};;
  }

  & a:hover {
    color: ${Theme.colors.fontHover};

    &::after {
      transform: scale(1);
    }
  }
`

const LoginContainer = styled.div`
  & img {
    width: 40px;
    transition: ${Theme.animation.transition};

    &:hover {
      transform: scale(1.2);
    }
  }


`

export const S = {
  Header,
  Logo,
  Nav,
  LoginContainer
}