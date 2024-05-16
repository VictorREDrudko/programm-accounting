import React from "react"
import { S } from "./Footer_styles"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" align="center">
          <S.Name>Victor Rudzko</S.Name>
          <S.Copyright>@ 2024 Victor Rudzko, All Rights Reserved</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  )
}