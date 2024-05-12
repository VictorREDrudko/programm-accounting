import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { S } from "./Classification_Styles"
import machineIcon from "./../../../assets/icon/machine.png"
import thingsIcon from "./../../../assets/icon/ii.png"
import minesIcon from "./../../../assets/icon/vv.png"
import technicalMeansIcon from "./../../../assets/icon/tsog.png"
import constructionsBarrierIcon from "./../../../assets/icon/isz.png"

const classificationThings = [
  {
    id: 1,
    title: "Инженерная техника",
    icon: machineIcon,
    category: [
      {
        idCategory: 1,
        nameCategory: "Дорожно-строительная техника",
        kind: {}
      },
      {
        idCategory: 2,
        nameCategory: "Лесозаготовительная техника",
        kind: {}
      },
      {
        idCategory: 3,
        nameCategory: "Сельскохозяйственная техника",
        kind: {}
      },
      {
        idCategory: 4,
        nameCategory: "Техника для ремонта и обслуживания",
        kind: {}
      },
    ]
  },
  {
    id: 2,
    title: "Инженерное имущество",
    icon: thingsIcon,
    category: [
      {
        idCategory: 1,
        nameCategory: "Имущество для разведки минно-взрывных заграждений",
        kind: {}
      },
    ]
  },
  {
    id: 3,
    title: "Инженерные боеприпасы",
    icon: minesIcon,
    category: [
      {
        idCategory: 1,
        nameCategory: "Взрывчатые вещества",
        kind: {}
      },
    ]
  },
  {
    id: 4,
    title: "Технические средства охраны границы",
    icon: technicalMeansIcon,
    category: [
      {
        idCategory: 1,
        nameCategory: "Средства освещения местности",
        kind: {}
      },
    ]
  },
  {
    id: 5,
    title: "Инженерные сооружения и заграждения",
    icon: constructionsBarrierIcon,
    category: [
      {
        idCategory: 1,
        nameCategory: "Сооружения для обозначения линии Государственной границы",
        kind: {}
      },
    ]
  },
]

export const Classification: React.FC = () => {
  return (
    <S.ClassificationSection>
      <Container>
        <SectionTitle>Классификация материальных средств</SectionTitle>
        <FlexWrapper direction="column" gaps="10px">
          <S.SecondTitle>по направлению инженерного обеспечения</S.SecondTitle>
          <S.SmallTitle>органов пограничной службы</S.SmallTitle>
        </FlexWrapper>

        <S.List>
          {classificationThings.map(el => {
            return (
              <S.ItemList>
                <Icon path={el.icon}/>
                <span>00{el.id}</span>
                {el.title}
                <ul>
                  {el.category.map(item => {
                    return (
                      <li>
                        <span>00{item.idCategory}</span>
                        {item.nameCategory}
                      </li>
                    )
                  })}
                </ul>
              </S.ItemList>
            )
          })}
        </S.List>

      </Container>
    </S.ClassificationSection>
  )
}