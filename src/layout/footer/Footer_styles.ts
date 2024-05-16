import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
  position: relative;
  background-color: ${Theme.colors.mainBg};
  padding: 30px 0;
  flex-shrink: 0;
`

const Name = styled.span`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 14px;
  color: ${Theme.colors.font};
`

export const S = {
  Footer,
  Name,
  Copyright
}