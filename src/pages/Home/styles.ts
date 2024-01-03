import {
  FaShoppingCart,
  FaStopwatch,
  FaCoffee,
  FaPlus,
  FaMinus,
} from 'react-icons/fa'

import { BiMinus, BiPlus } from 'react-icons/bi'
import { BsBoxSeamFill, BsCupHotFill } from 'react-icons/bs'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-top: 4vh;
  justify-content: space-between;
`

export const ContentTitle = styled.div`
  max-width: 588px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`
export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: #272221;
`

export const Subtitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
`

export const ContainerInfo = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 40px 0;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const ContainerIcon = styled.div<{ color: string }>`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 1000rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`

export const CartIcon = styled(FaShoppingCart)`
  color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 1000rem;
`

export const StopwatchIcon = styled(FaStopwatch)`
  color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 1000rem;
`
export const BoxIcon = styled(BsBoxSeamFill)`
  color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 1000rem;
`

export const CupIcon = styled(FaCoffee)`
  color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 1000rem;
`
export const ContainerList = styled.div`
  margin-top: 7rem;

  h1 {
    font-family: 'Baloo 2';
  }
`

export const ContentList = styled.div`
  margin-top: 3.3rem;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 3rem;
  justify-content: flex-start;
  flex-direction: row;
`

export const CardCoffe = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f2f2;
  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;

    position: relative;
    bottom: 10%;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 1.5rem 1.5rem;

  position: relative;
  bottom: 10%;
`

export const ContentTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

export const TextType = styled.span`
  padding: 4px 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #c47f17;
  background: #f1e9c9;
  border-radius: 100px;
  margin-bottom: 1rem;
`

export const TitleCard = styled.h3`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  margin-bottom: 0.5rem;
`
export const SubTitleCard = styled.span`
  color: #8d8686;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;

  margin-bottom: 2rem;
`

export const ButtonCart = styled.div`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #574f4d;

    b {
      font-size: 20px;
    }
  }
`

export const CartContainer = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;

  background-color: #4b2995;

  :disabled {
    background-color: ${({ disabled }) => disabled && '#7356b7'};
    cursor: not-allowed;
  }
`
export const CardCart = styled(FaShoppingCart)`
  color: #f3f2f2;
  font-size: 1.3rem;
`

export const NegativeIcon = styled(BiMinus)`
  color: #8047f8;
  cursor: pointer;
  font-size: 1.5rem;
`

export const PositiveIcon = styled(BiPlus)`
  color: #8047f8;
  cursor: pointer;
  font-size: 1.5rem;
`

export const ContainerSpiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 0.5rem;

  font-size: 1.25rem;
  padding: 8px;
  gap: 4px;
  border-radius: 10px;
  background-color: #e6e5e5;
`

export const ButtonContainerIcon = styled.button`
  display: flex;
  border: none;
  background: transparent;
`
