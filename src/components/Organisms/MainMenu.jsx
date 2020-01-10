import React from "react"
import { NavLink } from "react-router-dom"

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://icon-library.net/images/xmas-tree-icon/xmas-tree-icon-6.jpg" />
                </a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="item-active">Home</NavLink></li>
                        <li><NavLink to="/courses" activeClassName="item-active">Courses</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="item-active">Contact Us</NavLink></li>
                        <li><NavLink to="/users" activeClassName="item-active">Users</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu"></div>
            </div>
        </div>
    </header>
)

export default MainMenu