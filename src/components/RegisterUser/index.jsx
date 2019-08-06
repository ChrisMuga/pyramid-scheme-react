import React from "react"
import "./sub-components/RegisterUser.css"
function RegisterUser(props){
    return (
    <div className = "row d-flex justify-content-center mid-level">
        <div className = "col-md-6">
            <div className = "alert alert-success">Register User</div>
            <div className = "row">
                <div className = "col-md-6">
                    <input type = "text" className = "form-control my-1" placeholder = "First Name"/>
                </div>
                <div className = "col-md-6">
                    <input type = "text" className = "form-control my-1" placeholder = "Last Name"/>
                </div>
            </div>    
            <input type = "text" className = "form-control my-1" placeholder = "Email Address"/>
            <input type = "text" className = "form-control my-1" placeholder = "Phone Number"/>
            <hr/>
            <div className = "row">
                <div className = "col-md-6">
                    <button type = "text" className = "form-control btn-success btn my-2">Enter</button>
                </div>
                <div className = "col-md-6">
                    <button type = "text" className = "form-control btn-secondary btn my-2">Clear</button>
                </div>
            </div>   
            
        </div>
    </div>)
}

export default RegisterUser