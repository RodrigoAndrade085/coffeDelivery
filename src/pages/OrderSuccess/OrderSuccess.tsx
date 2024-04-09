import {
  Container,
  ContainerIcon,
  ContainerInfo,
  ContainerPage,
  ContentInfo,
  DollarIcon,
  LocationIcon,
  StopwatchIcon,
  SubTitle,
  Title,
} from './styles'

import Img from '../../assets/Delivery.svg'
import { useLocation } from 'react-router-dom'
import { EnumPayment, NewOrderCart } from '../OrderPayment'

export function OrderSuccess() {
  const location = useLocation()

  const orderSuccess: NewOrderCart = location.state?.order

  function renderLabelPayment(typePayment: number) {
    switch (true) {
      case typePayment === EnumPayment.credito:
        return 'Cartão de crédito!'
      case typePayment === EnumPayment.debito:
        return 'Cartão de débito!'
      default:
        return 'Dinheiro!'
    }
  }

  return (
    <ContainerPage>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>

      <Container>
        <ContainerInfo>
          <ContentInfo>
            <ContainerIcon color="#8047f8">
              <LocationIcon />
            </ContainerIcon>
            <div>
              <p>
                Entrega em
                <b>
                  {orderSuccess.street}, {orderSuccess.number}
                </b>
              </p>
              <p>
                - {orderSuccess.city}, {orderSuccess.state}
              </p>
            </div>
          </ContentInfo>
          <ContentInfo>
            <ContainerIcon color="#dbac2c">
              <StopwatchIcon />
            </ContainerIcon>
            <div>
              <p>Previsao de entrega</p>
              <b>20 min - 30 min</b>
            </div>
          </ContentInfo>
          <ContentInfo>
            <ContainerIcon color="#c47f17">
              <DollarIcon />
            </ContainerIcon>
            <div>
              <p>Pagamento na entrega</p>
              <b>{renderLabelPayment(orderSuccess.PaymentMathod)}</b>
            </div>
          </ContentInfo>
        </ContainerInfo>

        <img src={Img} alt="Delivery" />
      </Container>
    </ContainerPage>
  )
}
