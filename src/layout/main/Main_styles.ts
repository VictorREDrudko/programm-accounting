import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const MainStyles = styled.main`
  background-color: ${Theme.colors.secondBg};
  flex-grow: 1;
  padding-top: 100px;
  position: relative;
`

const MainImg = styled.img`
  width: 450px;
  position: absolute;
  bottom: 0;
  right: 200px;
`

export const S = {
  MainStyles,
  MainImg,
}