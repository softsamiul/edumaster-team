import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './FooterComp.css';
const FooterComp = () => {
    const element = <FontAwesomeIcon style={{marginRight:'15px'}} icon={faUserGraduate} />
    return (
        <div className="bg-blue-900 text-white">
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 py-2 border-b-2">
                <div>
                    <NavLink to="/">
                        <h2 className="text-4xl font-bold">{element}EDUMASTER</h2>
                        <p className="text-base hidden md:block">A modern, global school for a modern, global academic experience.</p>
                    </NavLink>
                </div>
                <div className="hidden md:block">
                    <Link className="block" to="/">Home</Link>
                    <Link className="block" to="/courses">Courses</Link>
                    <Link className="block" to="/services">Services</Link>
                    <Link className="block" to="/about">About</Link>
                    <Link className="block" to="/contact">Contact</Link>
                </div>
                <div className="hidden md:block">
                    <p>Carrers</p>
                    <p>Blogs</p>
                    <p>Affiliate</p>
                    <p>Helps &bsp; Support</p>
                </div>
                <div className="hidden md:block">
                    <p>Terms</p>
                    <p>Privacy &bsp; Policy</p>
                    <p>SiteMap</p>
                </div>
            </div>
            <p className="text-center text-sm font-semibold py-2">&copy; All Right Reserved | Made with &hearts; by Samiul Islam</p>
        </div>
    );
};

export default FooterComp;