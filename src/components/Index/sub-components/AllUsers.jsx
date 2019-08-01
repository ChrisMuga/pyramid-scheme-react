import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { fetchAllUsersAction } from "../redux/actionCreators"
import { fetchAllUsers } from "../redux/allUsersReducer"

function AllUsers(props) {
  const { fetchAllUsers } = props
  useEffect(() => fetchAllUsers(), [fetchAllUsers])
  return (
    <div className="col-md-6">
      <div className="alert alert-primary my-1">
        <h3>Users</h3>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    allUsers: fetchAllUsers(state)
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
