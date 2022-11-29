import { faClock, faDollarSign, faRobot, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './SingleCOurse.css';
const SingleCourse = (props) => {
    const {classes, courseName, duration, instructor, price, project, thumbnail, type} = props.course;
    
    const user = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faUserCircle} />
    const time = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faClock} />
    const priceIcon = <FontAwesomeIcon style={{marginRight:'5px'}} className="text-blue-900" icon={faDollarSign} />
    const projects = <FontAwesomeIcon style={{marginRight:'5px'}} className="text-blue-900" icon={faRobot} />

    const history = useHistory();
    const courseDetails = (id) => {
        history.push('courses');
    }
    
    return (
        <div className="single-course-wrap p-4 rounded">
            {/* Course thumbnail */}
            <div>
                <img src={thumbnail} className="rounded-lg h-36 md:h-48 mx-auto thumbnail" alt="Course thumbnail" />
            </div>
            {/* Course details */}
            <h2 className="md:text-xl text-lg font-base py-2">{courseName}</h2>
            <h4 className="text-base font-sm">{user}{instructor}</h4>
            <div className="flex text-sm  justify-between">
                <p>{time}{duration} Hours</p>
                <p>{priceIcon}{price}</p>
            </div>
            <div className="flex text-sm justify-between">
                <p>{classes} Classes</p>
                <p>{projects}{project} Projects</p>
                <p className="font-medium">{type}</p>
            </div>
            <div className="md:flex flex-none justify-between mt-2 btn-wrapper ">
                
                <button className="py-2 px-6 bg-blue-900 text-white rounded-lg font-medium">Enroll Now</button>
               
                <button onClick={courseDetails} className="py-2 px-6 md:inline hidden bg-green-700 btn-details text-white rounded-lg font-medium">See Details</button>
               
            </div>
            
        </div>
    );
};

export default SingleCourse;