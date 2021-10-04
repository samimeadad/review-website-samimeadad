import React from 'react';
import { Col, Row } from 'react-bootstrap';
import coverImage from '../../images/cover.jpg';

const Home = () => {
    return (
        <div className="m-5">
            <header className='m-5'>
                <Row>
                    <Col xs={ 12 } md={ 7 }>
                        <img className="img-fluid" src={ coverImage } alt="coverImage" />
                    </Col>
                    <Col xs={ 6 } md={ 5 }>
                        <div className="mt-5 p-5 me-5 h-75 text-start bg-dark rounded-3">
                            <h1 className="text-info mb-3">Sami's <span className="text-warning fw-bold">Educare</span></h1>
                            <hr className="text-info" />
                            <h2 className="text-warning">Academic <span className="text-info fw-bold">Excellence,</span> Educational <span className="text-info fw-bold">Innovation,</span> Social <span className="text-info fw-bold">Justice.</span></h2>
                            <hr className="text-info" />
                            <h3 className="me-3 mb-4 text-warning">Learn for <span className="text-info fw-bold">PASSION</span>, not for <span className="text-info fw-bold">PROFESSION</span></h3>
                        </div>
                    </Col>
                </Row>
            </header>
            <h1 className="text-center text-info bg-dark p-3 rounded-3">Our Premium Courses</h1>
        </div>
    );
};

export default Home;