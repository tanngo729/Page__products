import { combineReducers } from 'redux';
import cartReducer from './Cart';


const allReducer = combineReducers({
    cartReducer
});

export default allReducer;