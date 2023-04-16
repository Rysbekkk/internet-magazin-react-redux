import { ADD_ITEM, DECREASE_ITEM, CHANGE_STATUS, DELETE_ITEM, SELECT_PRODUCT } from "./types"


export const addItem = (item) => {
    return { type: ADD_ITEM, payload: item }
}

export const decreaseItem = (item) => {
    return { type: DECREASE_ITEM, payload: item }
}

export const changeStatus = (id) => {
    return { type: CHANGE_STATUS, payload: id }

}

export const deleteItem = (item) => {
    return { type: DELETE_ITEM, payload: item }
}

export const selectProduct = (item) => {
    return {
        type: SELECT_PRODUCT,
        payload: item
    };
};