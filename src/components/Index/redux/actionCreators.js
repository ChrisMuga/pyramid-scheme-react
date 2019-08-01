import fetch from "node-fetch"

import actionTypes from "../../../redux/actionTypes"

export function fetchAllUsersAction() {
  return dispatch => {
    fetch("http://localhost:4000/people")
      .then(users => users.json())
      .then(users => {
        dispatch(fetchAllUsers(actionTypes.FETCH_ALL_USERS, users))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function fetchAllUsers(type, payload) {
  return {
    type,
    payload
  }
}
