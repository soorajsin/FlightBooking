import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
          <div className="navbar">
                    <div className="tab">
                              <div className="button">
                                        <NavLink>Logo</NavLink>
                              </div>
                              <div className="button">
                                        <NavLink>Flight</NavLink>
                              </div>
                    </div>
          </div>
    </>
  )
}

export default Navbar