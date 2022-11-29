import React from 'react';
import SingleCourse from '../components/SingleCourse/SingleCourse';
import useCourses from '../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div className="w-4/5 mx-auto py-12">
            <div className="courses-section-tagline mb-2 text-center font-bold  py-3">
                <h2 className="text-2xl md:text-4xl">Courses We Offering</h2>
                <blockquote className="italic mt-2">"Learn today to Lead tommorow."</blockquote>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    courses.map(course => <SingleCourse key={course.courseId} course={course}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;