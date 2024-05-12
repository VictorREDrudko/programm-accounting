import logoImage from './../../assets/logo.png'
import { S } from './Header_Styles'

export const Logo = () => {
  return (
    <a href='#'>
      <S.Logo src={logoImage} alt="Логотип программы" />
    </a>
  )
}