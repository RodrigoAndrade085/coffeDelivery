import styled from 'styled-components'
import { TiLocationOutline } from 'react-icons/ti'
import { BiDollar } from 'react-icons/bi'

import { CiMoneyBill } from 'react-icons/ci'
import { AiOutlineBank, AiOutlineCreditCard } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  padding-top: 4vh;
  justify-content: space-between;

  h3 {
    font-family: 'Baloo 2';
  }
`

export const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  background: #f3f2f2;
`

export const CardCoffeSelected = styled(Card)`
  border-radius: 0.375rem 2.75rem;
`

export const ContainerOrder = styled.div`
  display: flex;
  width: 50rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`

export const ContainerCoffee = styled.div`
  display: flex;
  width: 38rem;
  padding: 0 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1 0 0;
`
export const LocationIcon = styled(TiLocationOutline)`
  color: #c47f17;
  font-size: 1.375rem;
`
export const DollarIcon = styled(BiDollar)`
  color: #8047f8;
  font-size: 1.375rem;
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #403937;
`

export const Subtitle = styled.p`
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #574f4d;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

export const Input = styled.input<{ width?: string }>`
  display: flex;
  width: ${({ width }) => width || '12.5rem'};
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;

  color: var(--base-text, #574f4d);

  /* Text/Regular S */
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.1375rem */

  border-radius: 0.25rem;
  border: 1px solid var(--base-button, #e6e5e5);
  background: var(--base-input, #ededed);
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`

export const ButtonPayment = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  cursor: pointer;

  color: var(--base-text, #574f4d);

  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  border-radius: 0.25rem;
  border: 1px solid var(--base-button, #e6e5e5);
  background: var(--base-input, #ededed);

  :hover {
    border-radius: 0.375rem;
    background: var(--base-hover, #d7d5d5);
  }

  :active {
    border-radius: 0.375rem;
    border: 1px solid var(--brand-purple, #8047f8);
    background: var(--brand-purple-light, #ebe5f9);
  }
`

export const BankIcon = styled(AiOutlineBank)`
  color: #8047f8;
  font-size: 1.375rem;
`

export const CreditCardIcon = styled(AiOutlineCreditCard)`
  color: #8047f8;
  font-size: 1.375rem;
`

export const MoneyIcon = styled(CiMoneyBill)`
  color: #8047f8;
  font-size: 1.375rem;
`

export const ConfirmPayment = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  cursor: pointer;
  border: none;

  color: var(--base-white, #fff);

  /* Components/Button G */
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 1.4rem */
  text-transform: uppercase;

  border-radius: 0.375rem;
  background: var(--brand-yellow, #dbac2c);
`

export const CoffeItem = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

export const ValueText = styled.div`
  color: var(--base-text, #574f4d);
  text-align: right;

  /* Text/Bold M */
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.3rem */
`

export const CoffeItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    display: flex;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    align-items: center;
  }
`

export const CoffeItemInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

export const CoffeItemInfoText = styled.p`
  color: var(--base-subtitle, #403937);

  /* Text/Regular M */
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.3rem */
`

export const CoffeItemInfoDetailAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ContainerSpiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;

  font-size: 1.25rem;
  padding: 8px;
  gap: 4px;
  border-radius: 10px;
  background-color: #e6e5e5;
`

export const ButtonItemInfoDetail = styled.button`
  display: flex;
  height: 2rem;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: var(--base-button, #e6e5e5);
  border: none;
  cursor: pointer;

  color: var(--base-text, #574f4d);
  font-family: 'Roboto';
`
export const TrashIcon = styled(FaRegTrashAlt)`
  color: #8047f8;
  font-size: 1rem;
`
export const ContentValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`

export const PaymentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  color: var(--base-text, #574f4d);
  text-align: right;

  /* Text/Regular M */
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.3rem */
`

export const PaymentContentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  color: var(--base-subtitle, #403937);
  text-align: right;

  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`
