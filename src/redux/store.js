import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import allReducers from "./allReducers"

const middlewares = [thunk, logger]
const middleware = applyMiddleware(...middlewares)
const store = createStore(allReducers, middleware)

export default store
