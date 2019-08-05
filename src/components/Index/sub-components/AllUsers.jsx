import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { fetchAllUsersAction } from "../redux/actionCreators"
import { fetchAllUsers } from "../redux/allUsersReducer"

function AllUsers(props) {
  const { fetchAllUsers, users } = props
  let allUsers = users.users
  useEffect(() => fetchAllUsers(), [fetchAllUsers])
  let users_
  if (allUsers && allUsers.code !== 0) {
    users_ = allUsers.map(user => {
      return (
        <div className="alert alert-success" key={user.id}>
          <h4>{user.first_name} {user.last_name}</h4>
          <hr/>
          {user.email_address}
          <br/>
          {user.phone_number}
          <h5 className = "text-right">{user.id}</h5>
        </div>
      )
    })
  } else if(allUsers && allUsers.code === 0) {
    console.log(allUsers.code)
    users_ = <div className="alert alert-danger">{allUsers.msg.error.message}</div>
  }
  return (
    <div className="col-md-6">
      <div className="alert alert-primary my-1">
        <h3>Users</h3>
      </div>
      {users_}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: fetchAllUsers(state)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllUsers: fetchAllUsersAction
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers)
