import React, { FC } from 'react';
import {NavLink} from 'react-router-dom'
import './tests.css'

const Nav : FC = () => {
    return(
        <div className="nav_div">
            <div className="text_nav">
                <NavLink to="/home" className="nav_item">
                    <h1 className="nav_text">Home</h1>
                </NavLink>
                <div className="nav_item_main">
                    <h1 className="nav_text">Tests</h1>
                    <div className="triangle"></div>
                </div>
                <NavLink to="/converter" className="nav_item">
                    <h1 className="nav_text">Converter</h1>
                </NavLink>
                <NavLink to="/calculator" className="nav_item">
                    <h1 className="nav_text">Calculator</h1>
                </NavLink>
                <NavLink to="/contacts" className="nav_item">
                    <h1 className="nav_text">Contacts</h1>
                </NavLink>
            </div>
            <div className="band"/>
        </div>
    )
}

export default Nav