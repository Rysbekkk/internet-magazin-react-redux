import { combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import mainReducer from './reducers/mainReducer'
import productReducer from './reducers/productReducer'


const rootReducer = combineReducers({
    cart: cartReducer,
    main: mainReducer,
    details: productReducer
})
export default rootReducer