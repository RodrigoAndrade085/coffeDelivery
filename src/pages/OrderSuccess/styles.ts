import styled from 'styled-components'
import { TiLocation } from 'react-icons/ti'
import { FaStopwatch } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'

export const ContainerPage = styled.div`
  margin-top: 8vh;
`
export const Title = styled.p`
  color: #c47f17;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
`

export const SubTitle = styled.p`
  color: #403937;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`

export const ContainerInfo = styled.div`
  min-width: 526px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  border: 1px solid transparent;

  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #dbac2c, #8047f8);

  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  border-radius: 6px 36px;
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

export const LocationIcon = styled(TiLocation)`
  color: #fff;
  background-color: #8047f8;
  width: 1rem;
  height: 1rem;
  border-radius: 1000rem;
`

export const StopwatchIcon = styled(FaStopwatch)`
  color: #fff;
  width: 1rem;
  height: 1rem;
  background-color: #dbac2c;
  border-radius: 1000rem;
`
export const DollarIcon = styled(BiDollar)`
  color: #fff;
  width: 1rem;
  height: 1rem;
  background-color: #c47f17;
  border-radius: 1000rem;
`
