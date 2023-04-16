import { data } from "../../utils/constants"
import { CHANGE_STATUS } from "../actions/types"

const initialState = {
    mainData: data
}
// [{id,select,price},{}]
const mainReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case CHANGE_STATUS:
            const changedStatusInData = state.mainData.map(el => {
                if (el.id === payload) {
                    return { ...el, select: !el.select }
                }
                return el
            })
            return { ...state, mainData: changedStatusInData }
        default:
            return state
    }
}
export default mainReducer