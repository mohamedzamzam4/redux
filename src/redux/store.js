import { createStore } from "redux";
import Root from "./reducers/index"
export default createStore(Root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())