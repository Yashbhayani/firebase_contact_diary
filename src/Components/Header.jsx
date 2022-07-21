import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/add">Add</Link>
                                </li>
                                {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                                </li> */}
                            </ul>
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Header