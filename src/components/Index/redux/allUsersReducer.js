import actionTypes from "../../../redux/actionTypes"

export function allUsersReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case actionTypes.ERROR_FETCHING_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export const fetchAllUsers = state => {
  return state.allUsers
}
