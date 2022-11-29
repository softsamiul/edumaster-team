import React from 'react';
import accunture from '../../images/company-logo/accenture.png';
import cognizint from '../../images/company-logo/cognizint.png';
import flipkart from '../../images/company-logo/flipkart.png';
import infosys from '../../images/company-logo/infosys.png';
import mahindra from '../../images/company-logo/mahindra.webp';
import tata from '../../images/company-logo/tata.png';
import wipro from '../../images/company-logo/wipro.png';

const TrustedCompanies = () => {
    return (
        <div>
            {/* Trusted Company section start */}
            <div className="py-12 trusted-wrap mb-6">
                <h2 className="text-4xl font-bold text-center mb-10">Trusted Company</h2>
                <div className="w-3/4 mx-auto grid grid-cols-7 gap-2 h-24">
                    <div>
                        <img className="h-16 rounded-full" src={wipro} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={accunture} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={tata} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={infosys} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={cognizint} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={flipkart} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={mahindra} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompanies;