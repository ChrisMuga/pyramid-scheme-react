import fetch from "node-fetch"
import actionTypes from "../../../redux/actionTypes"

import {endpoints} from "../../../config"
export function registerNewUserAction(userData) {
  
  return dispatch => {
    console.log(userData)
    let {firstName, lastName, emailAddress, phoneNumber} = userData
    console.log(endpoints.newUser)
    const body = {
        first_name: firstName,
        last_name : lastName,
        email_address: emailAddress,
        phone_number: phoneNumber
    }
    fetch(endpoints.newUser, {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
    })
      .then(user => user.json())
      .then(user => {
        dispatch(registerUser(actionTypes.REGISTER_USER, user))
      })
      .catch(error => {
        const payload = {
          code: 0,
          msg: {error}
        }
        dispatch(errorRegisteringUser(actionTypes.ERROR_REGISTERING_USER, payload))
      })
  }
}

export function registerUser(type, payload) {
  return {
    type,
    payload
  }
}


export function errorRegisteringUser(type, payload){
  return {
    type,
    payload
  }
}
