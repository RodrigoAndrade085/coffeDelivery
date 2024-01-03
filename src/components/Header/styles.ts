import styled from 'styled-components'
import { TiLocation } from 'react-icons/ti'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0px;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ebe5f9;
  color: #8047f8;
  padding: 0.5rem;

  gap: 4px;
  border-radius: 6px;

  span {
    font-weight: 500;
    font-size: 0.9rem;
  }
`

export const LocationIcon = styled(TiLocation)`
  color: #8047f8;
  font-size: 1.3rem;
`
export const NavLinkRedirect = styled(NavLink)`
  text-decoration: none;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  background-color: #f1e9c9;
`

export const CartIcon = styled(FaShoppingCart)`
  color: #c47f17;
  font-size: 1.3rem;
`
export const Badge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 20px;
  height: 20px;

  background: #c47f17;
  color: #fff;
  border-radius: 1000px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
  }
`
