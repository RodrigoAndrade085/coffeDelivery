import {
  BankIcon,
  ButtonItemInfoDetail,
  ButtonPayment,
  Card,
  CardCoffeSelected,
  CoffeItem,
  CoffeItemInfo,
  CoffeItemInfoDetail,
  CoffeItemInfoDetailAction,
  CoffeItemInfoText,
  ConfirmPayment,
  Container,
  ContainerCoffee,
  ContainerOrder,
  ContainerSpiner,
  ContainerTitle,
  ContentTitle,
  ContentValues,
  CreditCardIcon,
  DollarIcon,
  FormContainer,
  Input,
  LocationIcon,
  MoneyIcon,
  PaymentContent,
  PaymentContentTotal,
  Row,
  Subtitle,
  Title,
  TrashIcon,
  ValueText,
} from './styles'

import Coffe1 from '../../assets/Coffes/Image.svg'
import { NegativeIcon, PositiveIcon } from '../Home/styles'

export function OrderPayment() {
  return (
    <Container>
      <ContainerOrder>
        <h3>Complete seu pedido</h3>
        <Card>
          <ContainerTitle>
            <LocationIcon />
            <ContentTitle>
              <Title>Endereço de Entrega</Title>
              <Subtitle>
                Informe o endereço onde deseja receber seu pedido
              </Subtitle>
            </ContentTitle>
          </ContainerTitle>
          <FormContainer>
            <Row>
              <Input type="text" placeholder="CEP" />
            </Row>

            <Row>
              <Input type="text" placeholder="Rua" width="100%" />
            </Row>

            <Row>
              <Input type="number" placeholder="Número" />
              <Input type="text" placeholder="Complemento" width="100%" />
            </Row>

            <Row>
              <Input type="text" placeholder="Complemento" />
              <Input type="text" placeholder="Cidade" width="100%" />
              <Input type="text" placeholder="UF" width="4rem" />
            </Row>
          </FormContainer>
        </Card>

        <Card>
          <ContainerTitle>
            <DollarIcon />
            <ContentTitle>
              <Title>Pagamento</Title>
              <Subtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Subtitle>
            </ContentTitle>
          </ContainerTitle>
          <FormContainer>
            <Row>
              <ButtonPayment>
                <CreditCardIcon />
                Cartão de crédito
              </ButtonPayment>
              <ButtonPayment>
                <BankIcon />
                Cartão de débito
              </ButtonPayment>
              <ButtonPayment>
                <MoneyIcon />
                Dinheiro
              </ButtonPayment>
            </Row>
          </FormContainer>
        </Card>
      </ContainerOrder>

      <ContainerCoffee>
        <h3>Cafés selecionados</h3>
        <CardCoffeSelected>
          <CoffeItem>
            <CoffeItemInfo>
              <img src={Coffe1} alt="coffe" />

              <CoffeItemInfoDetail>
                <CoffeItemInfoText>Expresso Tradicional</CoffeItemInfoText>

                <CoffeItemInfoDetailAction>
                  <ContainerSpiner>
                    <NegativeIcon onClick={() => {}} />
                    <b>{1}</b>
                    <PositiveIcon onClick={() => {}} />
                  </ContainerSpiner>

                  <ButtonItemInfoDetail>
                    <TrashIcon />
                    Remover
                  </ButtonItemInfoDetail>
                </CoffeItemInfoDetailAction>
              </CoffeItemInfoDetail>
            </CoffeItemInfo>

            <ValueText>R$ 9,90</ValueText>
          </CoffeItem>
          <CoffeItem>
            <CoffeItemInfo>
              <img src={Coffe1} alt="coffe" />

              <CoffeItemInfoDetail>
                <CoffeItemInfoText>Expresso Tradicional</CoffeItemInfoText>

                <CoffeItemInfoDetailAction>
                  <ContainerSpiner>
                    <NegativeIcon onClick={() => {}} />
                    <b>{1}</b>
                    <PositiveIcon onClick={() => {}} />
                  </ContainerSpiner>

                  <ButtonItemInfoDetail>
                    <TrashIcon />
                    Remover
                  </ButtonItemInfoDetail>
                </CoffeItemInfoDetailAction>
              </CoffeItemInfoDetail>
            </CoffeItemInfo>

            <ValueText>R$ 9,90</ValueText>
          </CoffeItem>

          <ContentValues>
            <PaymentContent>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </PaymentContent>

            <PaymentContent>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </PaymentContent>

            <PaymentContentTotal>
              <p>Total</p>
              <p>R$ 33,20</p>
            </PaymentContentTotal>
          </ContentValues>

          <ConfirmPayment>Confirmar pedido</ConfirmPayment>
        </CardCoffeSelected>
      </ContainerCoffee>
    </Container>
  )
}
