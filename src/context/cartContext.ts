import { createContext } from 'react'
import { Dish } from '../DishModel/DishModel'

export interface ICart {
  items: string[]
  totalAmount: number
  addItem?: (item: any) => any
  removeItem?: (item: number) => void
}

export const myCartContext: ICart = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
}

export const CartContext = createContext<ICart>(myCartContext)
