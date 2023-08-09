import { applyMiddleware, createStore } from "redux";

// Logger with default options
import logger from "redux-logger";
import Reducer from "./reducer";
const store = createStore(Reducer, applyMiddleware(logger));

export default store;
