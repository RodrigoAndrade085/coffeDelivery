import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={8000} />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}
