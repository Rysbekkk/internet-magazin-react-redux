import { ADD_ITEM, DECREASE_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
    cartItems: []
}


const cartReducer = (state = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case ADD_ITEM:


            const index = state.cartItems.findIndex(el => el.id === payload.id)
            console.log(index, 'ЭТО ПОЗИЦИЯ СУЩЕСТВУЮЩЕГО ТОВАРА')
            if (index >= 0) {
                // const copy = JSON.parse(JSON.stringify(state.cartItems))
                const copy = structuredClone(state.cartItems)
                copy[index].quantity += 1
                return { ...state, cartItems: copy }
            } else {
                return { ...state, cartItems: [...state.cartItems, { ...payload, quantity: 1 }] }
            }

        case DECREASE_ITEM:
            const indexD = state.cartItems.findIndex(el => el.id === payload.id)
            if (state.cartItems[indexD].quantity > 1) {
                const copy = structuredClone(state.cartItems)
                copy[indexD].quantity -= 1
                return { ...state, cartItems: copy }
            } else {
                const filteredData = state.cartItems.filter(el => el.id !== payload.id)
                return { ...state, cartItems: filteredData }
            }
        case DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(el => el.id !== payload.id)

            }
        default:
            return state
    }
}
export default cartReducer