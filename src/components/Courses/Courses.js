import React from 'react';
import useCourses from '../../Hooks/useCourses.js';
import Course from '../Course/Course.js';

const Courses = () => {
    const [ courses ] = useCourses();

    return (
        <section className="m-5 text-center">
            <h2>We have only { courses.length } courses right now. Please stay tuned for more...</h2>
            <div className="row row-cols-1 row-cols-md-3 g-5 m-5">
                {
                    courses.map( course => <Course
                        key={ course.id }
                        course={ course }>
                    </Course> )
                }
            </div>
        </section >
    );
};

export default Courses;