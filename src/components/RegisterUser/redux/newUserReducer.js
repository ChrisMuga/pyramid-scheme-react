import actionTypes from "../../../redux/actionTypes"

export function newUserReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      return {
        ...state,
        newUser: action.payload
      }
    default:
      return state
  }
}

export const getNewUser = state => {
  return state.newUser
}
