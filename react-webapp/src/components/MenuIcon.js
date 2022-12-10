import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity, hideOnMobile, hideOnTablet }) => {
  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "hidden" : ""} ${hideOnTablet ? "hidden" : ""}`}  to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon