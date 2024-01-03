import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { CardTypes } from '../pages/Home'
import { ActionTypes, cartsReducer } from '../reducers/carts'

interface CartContextProps {
  carts: CardTypes[]
  updateCarts: (newCarts: CardTypes[]) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartsState, dispatch] = useReducer(
    cartsReducer,
    {
      carts: [],
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffe-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartsState)

    localStorage.setItem('@coffe-delivery:cart-state-1.0.0', stateJSON)
  }, [cartsState])

  const { carts } = cartsState

  function updateCarts(newCarts: CardTypes[]) {
    dispatch({
      type: ActionTypes.ADD_NEW_CART,
      payload: {
        newCarts,
      },
    })
  }

  return (
    <CartContext.Provider value={{ carts, updateCarts }}>
      {children}
    </CartContext.Provider>
  )
}
