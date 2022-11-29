import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        // Navbar
        <nav className="text-lg font-semibold hidden md:block navbar">                    
            <NavLink className="px-4 nav-item" to="/home">Home</NavLink>
            <NavLink className="px-4 nav-item" to="/about">About</NavLink>
            <NavLink className="px-4 nav-item" to="/courses">Courses</NavLink>
            <NavLink className="px-4 nav-item" to="/Services">Services</NavLink>
            <NavLink className="px-4 nav-item" to="/contact">Contact</NavLink> 
        </nav>
    );
};

export default Navbar;