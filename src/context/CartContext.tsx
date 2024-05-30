import { createContext } from "react";

interface IContext {
    items: number[]
    totalAmount: number
    addItem: (item: number) => void
    removeItem: (item: number) => void
}

const CartContext = createContext<IContext>({
    items: [],
    totalAmount: 0,
    addItem: () => { },
    removeItem: () => { }
})

export default CartContext;