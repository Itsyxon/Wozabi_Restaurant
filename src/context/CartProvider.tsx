import { useReducer } from "react"
import { CartContext, ICart } from "./cartContext"

type CartContextProviderProps = {
    children: React.ReactNode | React.ReactNode[]
}

type stateType = {
    items: any
    totalAmount: number
}


const initialState: stateType = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: stateType, action: any) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount += 1
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return initialState
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState)

    const addItemHandler = (item: any) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item,
        })
    }
    const removeItemHandler = (id: number) => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            id,
        })
    }

    const cartContext: ICart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: () => addItemHandler,
        removeItem: () => removeItemHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}