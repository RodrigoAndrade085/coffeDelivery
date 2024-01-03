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

export function OrderSuccess() {
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
                Entrega em <b> Rua João Daniel Marinelli, 102 </b>
              </p>
              <p> Farrapos - Porto Alegre, RS</p>
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
              <b>Cartão de Crédito</b>
            </div>
          </ContentInfo>
        </ContainerInfo>

        <img src={Img} alt="Delivery" />
      </Container>
    </ContainerPage>
  )
}
