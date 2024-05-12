import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  letter-spacing: 5px;
  margin: 50px 0 50px 0;
  position: relative;
  font-family: ${Theme.font.fontTitle};
  font-size: 24px;
  text-transform: uppercase;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${Theme.colors.mainBg};
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
`