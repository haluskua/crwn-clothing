import { createStore, applyMiddleware } from "redux";

//receives action in does something then moves it along to root reducer

import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up middleware

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
