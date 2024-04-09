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

import { NegativeIcon, PositiveIcon } from '../Home/styles'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatToNumberBr } from '../../utils/formatToNumber'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { toast } from 'react-toastify'

export enum EnumPayment {
  credito = 1,
  debito = 2,
  dinheiro = 3,
}

const newOrderAddressSchema = zod.object({
  cep: zod.string().max(9, 'Cep não pode ser ter mais do que 9 caracteres'),
  street: zod.string().min(5, 'Digite a sua rua'),
  number: zod.number().min(1, 'Digite o numero da sua casa'),
  complement: zod.string(),
  neighborhood: zod.string().min(5, 'Digite a seu bairro'),
  city: zod.string().min(5, 'Digite a sua cidade'),
  state: zod
    .string()
    .min(2, 'Digite apenas a sigla do estado')
    .max(2, 'Digite apenas a sigla do estado'),
  PaymentMathod: zod.number().positive('Selecione a forma de pagamento'),
})

export type NewOrderCart = zod.infer<typeof newOrderAddressSchema>

export function OrderPayment() {
  const { carts, updateCarts } = useContext(CartContext)

  const { register, handleSubmit, setValue, reset, formState, watch } =
    useForm<NewOrderCart>({
      resolver: zodResolver(newOrderAddressSchema),
      defaultValues: {
        cep: '',
        city: '',
        complement: '',
        neighborhood: '',
        number: 0,
        state: '',
        street: '',
        PaymentMathod: 0,
      },
    })

  const navigate = useNavigate()

  const priceDelivery = 3.5

  useEffect(() => {
    const erros = Object.values(formState.errors)
    if (erros.length) {
      erros.map((err) => toast.error(err.message))
    }
  }, [formState.errors])

  function updateQtdCoffe(key: number, addCoffeQtd: boolean): void {
    const newCoffesList = [...carts]

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

      updateCarts(newCoffesList)

      return
    }

    newQtd = newQtd > 0 ? newQtd - 1 : newQtd

    newCoffesList[indexCoffeSelected] = {
      ...newCoffesList[indexCoffeSelected],
      qtd: newQtd,
    }

    updateCarts(newCoffesList)
  }

  function removeCoffeToCart(key: number) {
    const newCoffes = carts.filter((cart) => cart.key !== key)

    updateCarts(newCoffes)
    toast.success('Removido do carrinho com sucesso')
  }

  function totalPriceCart() {
    const initialValue = 0

    const totalPriceCart = carts.reduce((acc, current) => {
      return acc + current.price * current.qtd
    }, initialValue)

    return totalPriceCart
  }

  function handleOrderAddress(order: NewOrderCart) {
    navigate('/order-success', {
      state: {
        order,
      },
    })

    updateCarts([])
    reset()
  }

  const selectedPayment = watch('PaymentMathod')

  return (
    <Container onSubmit={handleSubmit(handleOrderAddress)} action="">
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
              <Input
                type="text"
                placeholder="CEP"
                {...register('cep')}
                onChange={(e) => {
                  const removingLetters = e.target.value.replace(/\D/g, '')
                  const valueFormattedToCep = removingLetters.replace(
                    /^(\d{5})(\d{3})$/,
                    '$1-$2',
                  )
                  setValue('cep', valueFormattedToCep)
                }}
                maxLength={9}
              />
            </Row>

            <Row>
              <Input
                type="text"
                placeholder="Rua"
                width="100%"
                {...register('street')}
              />
            </Row>

            <Row>
              <Input
                type="number"
                placeholder="Número"
                min={0}
                {...register('number', { valueAsNumber: true })}
              />
              <Input
                type="text"
                placeholder="Complemento"
                width="100%"
                {...register('complement')}
              />
            </Row>

            <Row>
              <Input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <Input
                type="text"
                placeholder="Cidade"
                width="100%"
                {...register('city')}
              />
              <Input
                type="text"
                placeholder="UF"
                width="4rem"
                minLength={2}
                maxLength={2}
                {...register('state')}
              />
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
              <ButtonPayment
                type="button"
                onClick={() => setValue('PaymentMathod', EnumPayment.credito)}
                selected={selectedPayment === EnumPayment.credito}
              >
                <CreditCardIcon />
                Cartão de crédito
              </ButtonPayment>
              <ButtonPayment
                type="button"
                onClick={() => setValue('PaymentMathod', EnumPayment.debito)}
                selected={selectedPayment === EnumPayment.debito}
              >
                <BankIcon />
                Cartão de débito
              </ButtonPayment>
              <ButtonPayment
                type="button"
                onClick={() => setValue('PaymentMathod', EnumPayment.dinheiro)}
                selected={selectedPayment === EnumPayment.dinheiro}
              >
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
          {carts.map((cart) => (
            <CoffeItem key={cart.key}>
              <CoffeItemInfo>
                <img src={cart.img} alt="coffe" />

                <CoffeItemInfoDetail>
                  <CoffeItemInfoText>{cart.name}</CoffeItemInfoText>

                  <CoffeItemInfoDetailAction>
                    <ContainerSpiner>
                      <NegativeIcon
                        onClick={() => updateQtdCoffe(cart.key, false)}
                      />
                      <b>{cart.qtd}</b>
                      <PositiveIcon
                        onClick={() => updateQtdCoffe(cart.key, true)}
                      />
                    </ContainerSpiner>

                    <ButtonItemInfoDetail
                      onClick={() => removeCoffeToCart(cart.key)}
                    >
                      <TrashIcon />
                      Remover
                    </ButtonItemInfoDetail>
                  </CoffeItemInfoDetailAction>
                </CoffeItemInfoDetail>
              </CoffeItemInfo>

              <ValueText>{formatToNumberBr(cart.price)}</ValueText>
            </CoffeItem>
          ))}

          <ContentValues>
            <PaymentContent>
              <p>Total de itens</p>
              <p>{formatToNumberBr(totalPriceCart())}</p>
            </PaymentContent>

            <PaymentContent>
              <p>Entrega</p>
              <p>{formatToNumberBr(priceDelivery)}</p>
            </PaymentContent>

            <PaymentContentTotal>
              <p>Total</p>
              <p>{formatToNumberBr(totalPriceCart() + priceDelivery)}</p>
            </PaymentContentTotal>
          </ContentValues>

          <ConfirmPayment type="submit">Confirmar pedido</ConfirmPayment>
        </CardCoffeSelected>
      </ContainerCoffee>
    </Container>
  )
}
