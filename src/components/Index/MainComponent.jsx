import React from "react"

import Navbar from "./sub-components/Navbar.jsx"
import AllUsers from "./sub-components/AllUsers.jsx"
function MainComponent() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <AllUsers />
      </div>
    </div>
  )
}

export default MainComponent
