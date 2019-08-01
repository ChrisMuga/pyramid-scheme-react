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
  if (allUsers) {
    users_ = allUsers.map(user => {
      return (
        <div className="alert alert-success" key={user.id}>
          {user.firstName || user.organizationName}
        </div>
      )
    })
  } else {
    users_ = <div className="alert alert-danger">Nothing to see here....</div>
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
