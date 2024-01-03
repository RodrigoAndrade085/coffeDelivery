import { CardTypes } from '../pages/Home'

interface CartState {
  carts: CardTypes[]
}

export enum ActionTypes {
  ADD_NEW_CART = 'ADD_NEW_CART',
}

export function cartsReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CART:
      return {
        ...state,
        carts: action.payload.newCarts,
      }
    default:
      return state
  }
}
