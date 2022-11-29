import React from 'react';
import './SingleService.css';
const SingleService = (props) => {
    const {title, strDesc, strImg} = props.service;
    
    return (
        // Single services
        <div className="single-service-wrap p-4">
            <div >
                <img src={strImg} className="md:h-36 h-24 mx-auto rounded-lg" alt="service 1 img" />
            </div>
            <h3 className="text-lg md:text-xl font-medium text-center">{title}</h3>
            <p className="text-base">{strDesc}</p>
        </div>
    );
};

export default SingleService;