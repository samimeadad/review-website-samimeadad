import React from 'react';
import { Button } from 'react-bootstrap';

const Teacher = ( props ) => {
    const { name, age, country, students, image } = props.teacher;
    return (
        <div className="col" >
            <div className="card h-100 w-75 p-3 rounded-3">
                <img style={ { width: '400px', height: '200px' } } src={ image } className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{ name }</h5>
                    <p className="card-text"><b>Age:</b> { age }</p>
                    <p className="card-text"><b>Country:</b> { country }</p>
                    <h6 className="card-text fw-bold">Total Students: { students }</h6>
                </div>
                <div className="card-footer">
                    <Button className="w-100 me-3">Contact Him</Button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;