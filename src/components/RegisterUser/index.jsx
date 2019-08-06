import React, {useState} from "react"
import "./sub-components/RegisterUser.css"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {registerNewUserAction} from "./redux/actionCreators"
import {getNewUser} from "./redux/newUserReducer"


function RegisterUser(props){
    const {registerUser} = props
    const [userData, setUserData] = useState({})
    let userName
    let {firstName, lastName, emailAddress, phoneNumber} = userData
    let submitBtn
    if(firstName && lastName){
        userName = <div className = "alert alert-warning">{firstName} {lastName}</div>
    }
    if(firstName && lastName && emailAddress){
        userName = <div className = "alert alert-primary">{firstName} {lastName}  <b className = "float-right">{emailAddress}</b></div>
    }
    if(firstName && lastName && emailAddress && phoneNumber){
        userName = (
            <div className = "alert alert-success">
                {firstName} {lastName} <b className = "float-right">All Details available. <span role="img" aria-label = "check">✔️</span></b>
                <hr/>
                <i>{phoneNumber}</i>
            </div>
        )

        submitBtn = <button type = "text" className = "form-control btn-success btn my-2" onClick = {() => registerUser(userData)}>Enter</button>
    }else{
        submitBtn = <button type = "text" className = "form-control btn-danger btn my-2" disabled>Enter All Details To Submit</button>
    }
    if((firstName && lastName && emailAddress && phoneNumber)===false){
        userName = <div className = "alert alert-danger">Enter <b>ALL</b> Details.</div>
    }
    return (
    <div className = "row d-flex justify-content-center mid-level">
        <div className = "col-md-6">
            <div className = "alert alert-primary">Register User</div>
            {userName}
            <div className = "row">
                <div className = "col-md-6">
                    <input type = "text" className = "form-control my-1" placeholder = "First Name" onChange={(e) => setUserData({...userData,firstName : e.target.value})}/>
                </div>
                <div className = "col-md-6">
                    <input type = "text" className = "form-control my-1" placeholder = "Last Name" onChange={(e) => setUserData({...userData,lastName : e.target.value})}/>
                </div>
            </div>    
            <input type = "text" className = "form-control my-1" placeholder = "Email Address" onChange={(e) => setUserData({...userData,emailAddress : e.target.value})}/>
            <input type = "text" className = "form-control my-1" placeholder = "Phone Number" onChange={(e) => setUserData({...userData,phoneNumber : e.target.value})}/>
            <hr/>
            <div className = "row">
                <div className = "col-md-6">
                    {submitBtn}
                </div>
                <div className = "col-md-6">
                    <button type = "text" className = "form-control btn-secondary btn my-2">Clear</button>
                </div>
            </div>   
            
        </div>
    </div>)
}
const mapStateToProps = state => {
    return {
      newUser: getNewUser(state)
    }
  }
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        registerUser: registerNewUserAction
      },
      dispatch
    )
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterUser)
  
