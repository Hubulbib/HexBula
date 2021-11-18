import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import '../tests/tests.css'

const Nav : FC = () => {
    return(
        <div className="nav_div">
            <div className="text_nav">
                <NavLink to="/home" className="nav_item">
                    <h1 className="nav_text">Home</h1>
                </NavLink>
                <NavLink to="/tests" className="nav_item">
                    <h1 className="nav_text">Tests</h1>
                </NavLink>
                <NavLink to="/converter" className="nav_item">
                    <h1 className="nav_text">Converter</h1>
                </NavLink>
                <NavLink to="/calculator" className="nav_item">
                    <h1 className="nav_text">Calculator</h1>
                </NavLink>
                <div className="nav_item_main" style={{paddingRight: 0}}>
                    <h1 className="nav_text">Contacts</h1>
                    <div className="triangle"></div>
                </div>
            </div>
            <div className="band"/>
        </div>
    )
}

export default Nav