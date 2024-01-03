import Logo from '../../assets/CoffeDelivery.svg'
import {
  Badge,
  CartContainer,
  CartIcon,
  HeaderContainer,
  LocationContainer,
  LocationIcon,
  NavLinkRedirect,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { carts } = useContext(CartContext)

  function qtdCoffe() {
    const initialValue = 0
    const qtdCart = carts.reduce(
      (acc, current) => acc + current.qtd,
      initialValue,
    )

    return qtdCart
  }

  return (
    <HeaderContainer>
      <NavLinkRedirect to="/">
        <img src={Logo} alt="Coffe Delivery" />
      </NavLinkRedirect>
      <nav>
        <LocationContainer>
          <LocationIcon />
          <span>Fortaleza, CE</span>
        </LocationContainer>
        <NavLinkRedirect to="/order-payment" title="Cart">
          <CartContainer>
            <CartIcon />
            <Badge>
              <span>{qtdCoffe()}</span>
            </Badge>
          </CartContainer>
        </NavLinkRedirect>
      </nav>
    </HeaderContainer>
  )
}
