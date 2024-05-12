import { Icon } from "../../components/Icon"
import loginIcon from './../../assets/icon/logIn.png'
import { S } from "./Header_Styles"


export const Login = () => {
  return (
    <S.LoginContainer>
      <a href="#">
        <Icon path={loginIcon}/> 
      </a>
    </S.LoginContainer>
  )
}