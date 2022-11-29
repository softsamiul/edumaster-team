import React from 'react';
import CoursesComp from '../components/Courses/CoursesComp';
import ServicesComp from '../components/Services/ServicesComp';
import ShowCase from '../components/ShowCase/ShowCase';
import WeProudOf from '../components/WeProudOf/WeProudOf';

const Home = () => {
    
    // console.log(images[0].img1);
    
    return (
        <>
         <div className="w-4/5 mx-auto">
             {/* Showcase component added */}
            <ShowCase></ShowCase>   
            {/* Services components added */}
            <ServicesComp></ServicesComp>
            {/* Courses components added */}
            <CoursesComp></CoursesComp>
            {/* We are proud of components added */}
            <WeProudOf></WeProudOf>
         </div>
        </>
    );
};

export default Home;