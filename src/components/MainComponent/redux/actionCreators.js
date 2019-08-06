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
        const payload = {
          code: 0,
          msg: {error}
        }
        dispatch(errorFetchingAllUsers(actionTypes.ERROR_FETCHING_ALL_USERS, payload))
      })
  }
}

export function fetchAllUsers(type, payload) {
  return {
    type,
    payload
  }
}


export function errorFetchingAllUsers(type, payload){
  return {
    type,
    payload
  }
}
