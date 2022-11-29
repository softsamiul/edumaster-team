import React from 'react';
import ServicesComp from '../components/Services/ServicesComp';
import TrustedCompanies from '../components/TrustedCompanies/TrustedCompanies';

const Services = () => {
    return (
        <div className="w-4/5 mx-auto mb-12">
            {/* Services component added */}
            <ServicesComp></ServicesComp>
            <div className="mt-12">
            <TrustedCompanies></TrustedCompanies>
            </div>
        </div>
    );
};

export default Services;