import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const element = <FontAwesomeIcon style={{marginRight:'15px'}} icon={faUserGraduate} />
    return (
        <header className="bg-blue-800 py-4 text-white sticky top-0">
            <div className="w-4/5 mx-auto flex-none md:flex justify-between items-center">
                <div className="brand">
                    {/* Navbar added */}
                <NavLink className="text-4xl font-bold" to="/home">{element}EDUMASTER</NavLink>
                </div>
                <Navbar className=""></Navbar>
            </div>
        </header>
    );
};

export default Header;