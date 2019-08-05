import fetch from "node-fetch"
import actionTypes from "../../../redux/actionTypes"

import {endpoints} from "../../../config"
export function fetchAllUsersAction() {
  
  return dispatch => {
    console.log(endpoints.fetchUsers)
    fetch(endpoints.fetchUsers)
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

