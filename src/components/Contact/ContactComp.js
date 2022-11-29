import { faCompass, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactComp.css';
const ContactComp = () => {
    const location = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faCompass} />
    const emailIcon = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faVoicemail} />
    const phoneIcon = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faPhone} />
    return (
        <div className="grid grid-cols-2 gap-4 w-4/5 mx-auto py-12">
            <div className=" contact-details p-6">
                <h2 className="text-3xl font-semibold mb-2">Get In Touch</h2>
                <div className="flex w-4/5">
                    <input type="text" className="outline-none border-2 w-2/4 rounded border-blue-900 py-1 px-2 mr-2" placeholder="Enter name"/>
                    <input className="outline-none border-2 rounded w-2/4 border-blue-900 py-1 px-2" type="email" placeholder="Enter email"/>
                </div>
                <div>
                    <input type="text" className="outline-none border-2 rounded border-blue-900 py-1 w-4/5 px-2 mt-2 block" placeholder="Subject"/>
                </div>
                <textarea name="" id="" cols="30" className="outline-none border-2 rounded border-blue-900 py-1 px-2 w-4/5 mt-2 block" placeholder="Enter your Message" rows="5"></textarea>
                <button className="py-2 px-6 bg-blue-900 rounded mt-2 text-white">Send Message</button>
            </div>
            <div className=" text-left p-6 location-details">
                <div className="flex mb-2">
                    <div>
                        {location}
                    </div>
                    <div>
                        <h6 className="font-medium text-lg">New Town, Kolkata, India, 700 139</h6>
                    </div>
                </div>
                <div className="flex mb-2">
                    <div>
                        {emailIcon}
                    </div>
                    <div className="font-medium text-base">
                        <p>info@emumaster.com</p>
                        <p>admin@emumaster.com</p>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        {phoneIcon}
                    </div>
                    <div className="font-medium text-base">
                        <p>+91 2345678901</p>
                        <p>+91 2345673459</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComp;