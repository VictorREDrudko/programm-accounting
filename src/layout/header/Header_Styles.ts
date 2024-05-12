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
`

const Logo = styled.img`
  width: 150px;
`

const Nav = styled.nav`
  & ul {
    height: 100%;
  }

  & img {
    width: 40px;
    position: absolute;
    top: -10px;
    left: -50px;
    
  }

  & a {
    display: inline-block;
    text-transform: uppercase;
    position: relative;
  }
`

const LoginContainer = styled.div`
  & img {
    width: 60px;
  }
`

export const S = {
  Header,
  Logo,
  Nav,
  LoginContainer
}