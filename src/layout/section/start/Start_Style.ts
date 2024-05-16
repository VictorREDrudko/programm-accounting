import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

const StartStyles = styled.div`
  display: flex;
  flex-direction: column;
`
const StartTitle = styled.h1`
  font-family: ${Theme.font.fontTextCursive};
  font-size: 48px;
  letter-spacing: 5px;
  font-weight: 600;
  color: ${Theme.colors.mainBg};
  margin: 20px 0 10px 0;
`

const StartText = styled.span`
  font-family: ${Theme.font.fontTextCursive};
  font-size: 28px;
  letter-spacing: 3px;
  font-weight: 500;
  color: ${Theme.colors.mainBg};
`

const StartSmallText = styled.span`
  font-family: ${Theme.font.fontText};
  font-size: 14px;
  font-weight: 400;
  color: ${Theme.colors.mainBg};
  margin-top: 20px;
`

export const S = {
  StartStyles,
  StartTitle,
  StartText,
  StartSmallText,
}