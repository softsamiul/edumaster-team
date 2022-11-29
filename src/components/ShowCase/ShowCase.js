import React from 'react';
import image from '../../images/showcase-img.jpeg';
import './ShowCase.css';
const ShowCase = (props) => {
    
    return (
        <div className="flex-none md:flex justify-between items-center  mx-auto py-6">
            <div className="left-section md:w-2/4 w-10/12 mx-auto">
                <h2 className="md:text-6xl text-2xl font-bold md:font-extrabold capitalize">India’s largest education platform</h2>
                <p className="text-lg mt-4">A modern, global school for a modern, global academic experience.</p>
            </div>
            <div className="right-section md:w-2/4 w-10/12 mx-auto">
                <img src={image} className="w-full rounded showcase-img" alt="showcase img" />
            </div>
        </div>
    );
};

export default ShowCase;