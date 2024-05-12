import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { S } from "./Header_Styles"
import { Login } from "./Login"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          <Menu/>
          <Login/>
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}

