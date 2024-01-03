import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function Default() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
