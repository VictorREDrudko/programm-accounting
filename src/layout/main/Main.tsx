import { Container } from "../../components/Container"
import { Start } from "../section/start/Start"
import { S } from "./Main_styles"
import startImage from "./../../assets/start-image.png"
import { Button } from "../../components/button/Button"

export const Main = () => {
  const sendData = (num: number) => {
    console.log(num)
  }

  const resetData = () => {
    console.log("It is button 'RESET'")
  }


  return (
    <S.MainStyles>
      <Container>
        <Start/>
        <S.MainImg src={startImage} alt="main-image" />
        <Button callback={() => sendData(100500)} title="SEND"/>
        <Button callback={resetData} title="RESET"/>
      </Container>
    </S.MainStyles>
  )
}