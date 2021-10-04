import React from 'react';
import { Button } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses.js';

const Courses = () => {
    const [ courses ] = useCourses();

    return (
        <section className="m-5 text-center">
            <h2>We have only { courses.length } courses right now. Please stay tuned for more...</h2>
            <div className="row row-cols-1 row-cols-md-3 g-5 m-5">
                {
                    courses.map( course =>
                        <div className="col" >
                            <div className="card h-100 w-75 p-3 rounded-3">
                                <img src={ course.image } className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-primary">{ course.name }</h5>
                                    <p className="card-text">{ course.description }</p>
                                    <p className="card-text"><b>Duration:</b> { course.duration }</p>
                                    <h3 className="card-text fw-bold">Price: ${ course.price }</h3>
                                </div>
                                <div className="card-footer">
                                    <Button className="w-100">Course Details</Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section >
    );
};

export default Courses;