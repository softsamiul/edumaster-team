import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WeProudOf = () => {
    
    const usersIcon = <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faUsers} />
    return (
        <div>
            <div className="py-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">We Are Proud Of</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 text-center text-xl md:text-3xl gap-4">
                    <div className="single-wrap p-6">
                        <p className="text-blue-900">{usersIcon}</p>
                        <p className="font-semibold">1500+</p>
                        <h2>Students</h2>
                    </div>
                    <div className="single-wrap p-6">
                        <p className="text-blue-900">{usersIcon}</p>
                        <p className="font-semibold">150+</p>
                        <h2>Total Course</h2>
                    </div>
                    <div className="single-wrap p-6">
                        <p className="text-blue-900">{usersIcon}</p>
                        <p className="font-semibold">5500+</p>
                        <h2>Online Learners</h2>
                    </div>
                    <div className="single-wrap p-6">
                        <p className="text-blue-900">{usersIcon}</p>
                        <p className="font-semibold">10500+</p>
                        <h2>Follower</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeProudOf;