import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navbar.css"
// components
import RegisterUser from "../../RegisterUser/index"
import MainComponent from "../../MainComponent/index"
function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Pyramid Scheme
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/register-user">
                Register
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
      <Route exact path="/register-user" component={RegisterUser} />
      <Route exact path="/" component={MainComponent} />
    </Router>
  )
}

export default Navbar
