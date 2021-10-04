import React from 'react';
import { Button } from 'react-bootstrap';

const PremiumCourse = ( props ) => {
    const { name, teacher, price, duration, image } = props.course;

    return (
        <div className="col" >
            <div className="card h-100 p-3 rounded-3 text-center">
                <img style={ { width: '300px', height: '200px' } } src={ image } className="card-img-top img-fluid ms-5" alt="..." />
                <div className="card-body">
                    <h6 className="card-title fw-bold text-primary">{ name }</h6>
                    <p className="card-text"><b>Instructor:</b> { teacher }</p>
                    <p className="card-text"><b>Duration:</b> { duration }</p>
                    <h4 className="card-text fw-bold">Price: ${ price }</h4>
                </div>
                <div className="card-footer">
                    <Button className="w-100">Buy</Button>
                </div>
            </div>
        </div >
    );
};

export default PremiumCourse;