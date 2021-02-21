import React from 'react'
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li><NavLink to="/Home">Главная</NavLink></li>
            <li><NavLink to="/Portfolio">Портфолио</NavLink></li>
            <li><NavLink to="/About">Обо мне</NavLink></li>
        </ul>
    )
}

export default Navigation