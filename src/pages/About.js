import React from 'react';
import AboutComp from '../components/About/AboutComp';

const About = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-12">About us</h2>
            {/* About us component added */}
            <AboutComp></AboutComp>
        </div>
    );
};

export default About;