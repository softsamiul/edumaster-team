import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutImg from '../../images/about-us.png';
import whyImg from '../../images/why-choose-us.png';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import WeProudOf from '../WeProudOf/WeProudOf';
import './AboutComp.css';

const AboutComp = () => {
    const rightArrow = <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faArrowAltCircleRight} />
    return (
        <div className="w-4/5 mx-auto mb-10">
            {/* Acheive goals section start */}
            <div className="flex justify-between items-center">
                <div className="w-2/4">
                    <img className="h-80" src={aboutImg} alt="About us img" />
                </div>
                <div className="w-2/4">
                    <h2 className="text-3xl font-semibold mb-2">Achieve Your Goals</h2>
                    <p className="text-basic">We are a modern, global school for a modern, global academic experience. We offer world's top quality education. Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision. Talk with instructors, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</p>
                    <button className="py-2 px-4 bg-blue-900 rounded-lg text-white mt-2">Enroll Now{rightArrow}</button>
                </div>
            </div>
            {/* Trusted Company section start */}
            <TrustedCompanies></TrustedCompanies>
            {/* Why choose us start */}
            <div>
                
                <div >
                
                    <div className="flex justify-between items-center">
                        <ul className="w-2/4">
                            <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
                            <li className="list-disc ml-6">Friendly Environment</li>
                            <li className="list-disc ml-6">Quality Content</li>
                            <li className="list-disc ml-6">Affordable Price</li>
                            <li className="list-disc ml-6">Learn anyting, anytime from anywhere</li>
                            <li className="list-disc ml-6">Structured Curriculum to expand your Knowledge</li>
                            <button className="py-2 px-4 bg-blue-900 rounded-lg text-white mt-2">Know more{rightArrow}</button>
                        </ul>
                        
                        <div className="w-2/4">
                            <img src={whyImg} alt="why choose us img" />
                        </div>
                    </div>
                </div>
            </div>
            {/* We are proud section start */}
            <WeProudOf></WeProudOf>
        </div>
    );
};

export default AboutComp;