import counterReducer from "./counter";
import orderReducer from "./order";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    order: orderReducer
});
export default allReducers;