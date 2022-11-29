import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundComp.css';
const NotFoundComp = () => {
    return (
        <div className="mx-auto w-3/5 text-center py-14">
            <div>
                {/* <img src={errorImg} className="w-full" alt="" /> */}
                <h2 className="text-red-500 text-7xl font-extrabold">Opps!</h2>
                <h4 className="text-red-500 text-2xl font-bold py-6">404 not found!</h4>
                <p className="text-lg uppercase font-base pb-12 pt-2">You're beyond the borders :)</p>
            </div>
            <NavLink to="/">
            <button className="py-2 px-4 bg-blue-900 rounded-lg text-center text-white font-medum text-base mx-auto">Back To Home</button>
            </NavLink>
        </div>
    );
};

export default NotFoundComp;