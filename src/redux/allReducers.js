import { combineReducers } from "redux"
import { allUsersReducer } from "../components/MainComponent/redux/allUsersReducer"
import { newUserReducer } from "../components/RegisterUser/redux/newUserReducer"

const allReducers = combineReducers({
  allUsers: allUsersReducer,
  newUser: newUserReducer
})

export default allReducers
