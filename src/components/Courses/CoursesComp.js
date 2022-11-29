import React from 'react';
import useCourses from '../../hooks/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';
import './CoursesComp.css';
const CoursesComp = () => {
    const [courses] = useCourses();
    return (
        <div className="py-12">
            <div className="courses-section-tagline mb-2 text-center font-bold  py-3">
                <h2 className="text-2xl md:text-4xl">Courses We Offering</h2>
                <blockquote className="italic mt-2">"Learn today to Lead tommorow."</blockquote>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    courses.slice(0,4).map(course => <SingleCourse key={course.courseId} course={course}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default CoursesComp;