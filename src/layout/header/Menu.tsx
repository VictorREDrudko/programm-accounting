import { FlexWrapper } from "../../components/FlexWrapper"
import { Icon } from "../../components/Icon"
import accountingIcon from './../../assets/icon/accounting.png'
import classificationIcon from './../../assets/icon/classification.png'
import statementIcon from './../../assets/icon/statement.png'
import { S } from "./Header_Styles"

export const Menu = () => {
  return (
    <S.Nav>
      <ul>
        <FlexWrapper gaps="100px" align="center">
          <li>
            <a href="#">
              <Icon path={classificationIcon}/>
              Классификация
            </a>
          </li>
          <li>
            <a href="#">
              <Icon path={accountingIcon}/>
              Учетные данные
            </a>
          </li>
          <li>
            <a href="#">
              <Icon path={statementIcon}/>
              Ведомости
            </a>
          </li>
        </FlexWrapper>
    </ul>
    </S.Nav>
  )
}