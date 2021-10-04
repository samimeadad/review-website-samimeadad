import React from 'react';
import { Button } from 'react-bootstrap';

// component for courses to be displayed on the course page
const Course = ( props ) => {
    const { name, teacher, description, price, duration, image } = props.course;
    return (
        // div for each column
        <div className="col" >
            {/* card for each course */ }
            <div className="card h-100 w-75 p-3 rounded-3">
                <img style={ { width: '400px', height: '200px' } } src={ image } className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{ name }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text"><b>Instructor:</b> { teacher }</p>
                    <p className="card-text"><b>Duration:</b> { duration }</p>
                    <h3 className="card-text fw-bold">Fee: ${ price }</h3>
                </div>
                <div className="card-footer">
                    <Button className="w-50 me-3">Details</Button>
                    <Button className="w-25 btn-danger text-white">Buy</Button>
                </div>
            </div>
        </div>
    );
};

export default Course;