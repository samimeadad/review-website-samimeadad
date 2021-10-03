import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Courses = () => {
    const [ courses, setCourses ] = useState( [] );

    useEffect( () => {
        fetch( './courses.json' )
            .then( res => res.json() )
            .then( data => setCourses( data ) );
    }, [] );

    console.log( courses );

    return (
        <div className="row row-cols-1 row-cols-md-3 g-5 m-5">
            {
                courses.map( course =>
                    <div className="col">
                        <div className="card h-100 w-75 p-3 rounded-3">
                            <img src={ course.image } className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-primary">{ course.name }</h5>
                                <p className="card-text">{ course.description }</p>
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
    );
};

export default Courses;