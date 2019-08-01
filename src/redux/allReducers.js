import { combineReducers } from "redux"
import { allUsersReducer } from "../components/Index/redux/allUsersReducer"

const allReducers = combineReducers({
  allUsers: allUsersReducer
})

export default allReducers
