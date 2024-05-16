import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const ClassificationSection = styled.section`
  background-color: ${Theme.colors.secondBg};
  color: ${Theme.colors.mainBg};
  padding: 20px 0;
  position: relative;
  top: 90px;
  display: none;
`
const SecondTitle = styled.span`
  text-align: center;
  letter-spacing: 2px;
  /* font-family: ${Theme.font.fontTitle}; */
  font-size: 18px;
`

const SmallTitle = styled.span`
  text-align: center;
  letter-spacing: 2px;
  /* font-family: ${Theme.font.fontTitle}; */
  font-size: 18px;
  text-transform: uppercase;
`

const List = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ItemList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  /* font-family: ${Theme.font.fontTitle}; */
  color: ${Theme.colors.font};
  text-align: left;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
  background-color: ${Theme.colors.mainBg};
  /* width: 500px; */

  & span {
    display: inline-block;
    margin-right: 10px;
  }

  & img {
    width: 40px;
    display: inline-block;
    margin-right: 10px;
  }
`


const CategoryTitle = styled.h3`
  margin: 50px 0 0 0;
  text-align: center;
  letter-spacing: 2px;
  /* font-family: ${Theme.font.fontTitle}; */
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${Theme.colors.mainBg};
`


// Карточки материальных средств
const Cards = styled.div`
  padding: 30px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Card = styled.div`
  background-color: ${Theme.colors.mainBg};
  width: 200px;
  height: 250px;
  padding: 10px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: ${Theme.animation.transition};

  & img {
    width: 130px;
  }

  &:hover {
    transform: scale(0.95);
    background-color: ${Theme.colors.hoverBg}
  }
`

const TitleCard = styled.h4`
  text-align: center;
  letter-spacing: 2px;
  font-family: ${Theme.font.fontTitle};
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${Theme.colors.font};
`

const SmallText = styled.span`
  text-align: center;
  letter-spacing: 1px;
  font-family: ${Theme.font.fontTitle};
  font-size: 12px;
  text-transform: uppercase;
  color: ${Theme.colors.font};
`


export const S = {
  ClassificationSection,
  SecondTitle,
  SmallTitle,
  List,
  ItemList,
  CategoryTitle,
  Cards,
  Card,
  TitleCard,
  SmallText,
}
