import React from 'react';
import { Button } from 'react-bootstrap';

const PremiumCourse = ( props ) => {
    const { name, teacher, description, price, duration, image } = props.course;

    return (
        <div className="col" >
            <div style={ { width: '350px' } } className="card h-100 p-3 rounded-3">
                <img src={ image } className="card-img-top img-fluid h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{ name }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text"><b>Instructor:</b> { teacher }</p>
                    <p className="card-text"><b>Duration:</b> { duration }</p>
                    <h3 className="card-text fw-bold">Price: ${ price }</h3>
                </div>
                <div className="card-footer">
                    <Button className="w-100">Buy</Button>
                </div>
            </div>
        </div>
    );
};

export default PremiumCourse;