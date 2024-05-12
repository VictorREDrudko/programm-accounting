import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const ClassificationSection = styled.section`
  background-color: ${Theme.colors.secondBg};
  color: ${Theme.colors.mainBg};
  padding: 20px 0;
  position: relative;
  top: 90px;
`
const SecondTitle = styled.span`
  text-align: center;
  letter-spacing: 2px;
  font-family: ${Theme.font.fontTitle};
  font-size: 18px;
`

const SmallTitle = styled.span`
  text-align: center;
  letter-spacing: 2px;
  font-family: ${Theme.font.fontTitle};
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
  font-family: ${Theme.font.fontTitle};
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

export const S = {
  ClassificationSection,
  SecondTitle,
  SmallTitle,
  List,
  ItemList,
}