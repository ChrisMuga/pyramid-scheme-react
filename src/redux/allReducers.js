import { combineReducers } from "redux"
import { allUsersReducer } from "../components/MainComponent/redux/allUsersReducer"

const allReducers = combineReducers({
  allUsers: allUsersReducer
})

export default allReducers
