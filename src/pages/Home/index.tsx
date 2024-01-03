import {
  Container,
  ContainerIcon,
  ContainerInfo,
  ContentInfo,
  ContentTitle,
  BoxIcon,
  CartIcon,
  StopwatchIcon,
  Subtitle,
  Title,
  CupIcon,
  ContainerList,
  CardCoffe,
  ContentList,
  ContentCard,
  TextType,
  TitleCard,
  SubTitleCard,
  CartContainer,
  CardCart,
  ButtonCart,
  ContainerSpiner,
  NegativeIcon,
  PositiveIcon,
  ContainerCards,
  ContentTag,
  ButtonContainerIcon,
} from './styles'
import CoffeImg from '../../assets/Imagem.svg'
import { useContext, useState } from 'react'
import { Coffes } from './utils'
import { CartContext } from '../../contexts/CartContext'

export interface CardTypes {
  key: number
  img: string
  name: string
  description: string
  price: string
  category: string[]
  qtd: number
}

export function Home() {
  const { carts, updateCarts } = useContext(CartContext)

  const [coffesList, setCoffesList] = useState(Coffes)

  function renderTags(tags: string[]) {
    return tags.map((item, index) => {
      return <TextType key={index}>{item}</TextType>
    })
  }

  function qtdCoffe(key: number, addCoffeQtd: boolean): void {
    const newCoffesList = [...coffesList]

    const indexCoffeSelected = newCoffesList.findIndex(
      (coffe) => coffe.key === key,
    )

    let newQtd = newCoffesList[indexCoffeSelected].qtd

    if (addCoffeQtd) {
      newQtd = newQtd + 1

      newCoffesList[indexCoffeSelected] = {
        ...newCoffesList[indexCoffeSelected],
        qtd: newQtd,
      }

      setCoffesList(newCoffesList)
      return
    }

    newQtd = newQtd > 0 ? newQtd - 1 : newQtd

    newCoffesList[indexCoffeSelected] = {
      ...newCoffesList[indexCoffeSelected],
      qtd: newQtd,
    }

    setCoffesList(newCoffesList)
  }

  function addCart(coffeSelected: CardTypes) {
    setCoffesList(Coffes)

    if (!carts) {
      updateCarts([coffeSelected])
      return
    }

    const indexCoffeSelected = carts.findIndex(
      (coffe) => coffe.key === coffeSelected.key,
    )

    if (indexCoffeSelected < 0) {
      const newCart = [...carts, coffeSelected]

      updateCarts(newCart)
      return
    }

    carts[indexCoffeSelected] = {
      ...carts[indexCoffeSelected],
      qtd: carts[indexCoffeSelected].qtd + coffeSelected.qtd,
    }

    updateCarts(carts)
  }

  return (
    <>
      <Container>
        <div>
          <ContentTitle>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <p>
              <Subtitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </Subtitle>
            </p>
          </ContentTitle>

          <ContainerInfo>
            <ContentInfo>
              <ContainerIcon color="#C47F17">
                <CartIcon />
              </ContainerIcon>

              <p>Compra simples e segura</p>
            </ContentInfo>
            <ContentInfo>
              <ContainerIcon color="#574F4D">
                <BoxIcon />
              </ContainerIcon>
              <p>Embalagem mantém o café intacto</p>
            </ContentInfo>
            <ContentInfo>
              <ContainerIcon color="#DBAC2C">
                <StopwatchIcon />
              </ContainerIcon>
              <p>Entrega rápida e rastreada</p>
            </ContentInfo>
            <ContentInfo>
              <ContainerIcon color="#8047F8">
                <CupIcon />
              </ContainerIcon>

              <p>O café chega fresquinho até você</p>
            </ContentInfo>
          </ContainerInfo>
        </div>
        <img src={CoffeImg} alt="Coffe img" />
      </Container>
      <ContainerList>
        <h1>Nossos cafés</h1>

        <ContainerCards>
          {coffesList.map((coffe) => (
            <ContentList key={coffe.key}>
              <CardCoffe>
                <img src={coffe.img} alt="coffe" />
                <ContentCard>
                  <ContentTag>{renderTags(coffe.category)}</ContentTag>
                  <TitleCard>{coffe.name}</TitleCard>
                  <SubTitleCard>{coffe.description}</SubTitleCard>
                  <ButtonCart>
                    <span>
                      R$ <b>{coffe.price}</b>
                    </span>

                    <ContainerSpiner>
                      <ButtonContainerIcon>
                        <NegativeIcon
                          onClick={() => qtdCoffe(coffe.key, false)}
                        />
                      </ButtonContainerIcon>
                      <b>{coffe.qtd | 0}</b>
                      <ButtonContainerIcon>
                        <PositiveIcon
                          onClick={() => qtdCoffe(coffe.key, true)}
                        />
                      </ButtonContainerIcon>
                    </ContainerSpiner>
                    <CartContainer
                      disabled={coffe.qtd <= 0}
                      onClick={() => addCart(coffe)}
                    >
                      <CardCart />
                    </CartContainer>
                  </ButtonCart>
                </ContentCard>
              </CardCoffe>
            </ContentList>
          ))}
        </ContainerCards>
      </ContainerList>
    </>
  )
}
