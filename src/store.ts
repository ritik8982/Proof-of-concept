import {createStore} from  "redux";
import { reducer } from "./reducers/allReducer";


export const store = createStore(reducer);

