import React from 'react';
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import coverImage from '../../images/cover.jpg';
import useCourses from '../../Hooks/useCourses';
import PremiumCourse from '../PremiumCourse/PremiumCourse';
import useTeachers from '../../Hooks/useTeachers';
import Teacher from '../Teacher/Teacher';


const Home = () => {
    // assign custom hook varibale for local use
    const [ courses ] = useCourses();
    const premiumCourses = courses.filter( course => course.premium === true );
    const [ teachers ] = useTeachers();
    const premiumTeachers = teachers.filter( teacher => teacher.premium === true );

    return (
        <div className="m-5">
            {/* header section - image and header tagline */ }
            <header className='m-5'>
                <Row>
                    <Col xs={ 12 } md={ 7 }>
                        <img className="img-fluid" src={ coverImage } alt="coverImage" />
                    </Col>
                    <Col xs={ 6 } md={ 5 }>
                        <div className="mt-5 p-5 me-5 text-start bg-dark rounded-3">
                            <h1 className="text-info mb-3">Sami's <span className="text-warning fw-bold">Educare</span></h1>
                            <hr className="text-info" />
                            <h2 className="text-warning">Academic <span className="text-info fw-bold">Excellence.</span> Educational <span className="text-info fw-bold">Innovation.</span> Professional <span className="text-info fw-bold">Skills.</span></h2>
                            <hr className="text-info" />
                            <h3 className="me-3 mb-4 text-warning">Learn for <span className="text-info fw-bold">PASSION</span>, not for <span className="text-info fw-bold">PROFESSION</span></h3>
                        </div>
                    </Col>
                </Row>
            </header>

            {/* Premium courses section */ }
            <section>
                <hr className="text-secondary" />
                <h1 className="text-center text-info bg-dark p-3 rounded-3">Let's <span className="text-warning fw-bold">Start</span> Learning Our <span className="text-warning fw-bold">Premium</span> Courses</h1>
                <hr className="text-secondary" />
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {
                        premiumCourses.map( course => <PremiumCourse
                            key={ course.id }
                            course={ course }>
                        </PremiumCourse> )
                    }
                </div>
                <hr className="text-secondary mt-5" />
                <h1 className="text-center text-info bg-dark p-3 rounded-3">Our <span className="text-warning fw-bold">Most Valuable</span> Instructors</h1>
            </section>

            {/* Premium instructors section */ }
            <section className="m-5 container mx-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        premiumTeachers.map( teacher => <Teacher
                            key={ teacher.id }
                            teacher={ teacher }>
                        </Teacher> )
                    }
                </div>
            </section>

            {/* Subscribe us section */ }
            <section className="container mx-auto w-50 m-5 bg-dark p-5 text-warning">
                <h2 className="mb-3">Subscribe Us</h2>
                <Form className="">
                    <FormControl
                        type="email"
                        placeholder="Email"
                        className="mt-2"
                        aria-label="Email"
                    />
                    <Button className="mt-3" variant="outline-warning">Subscribe</Button>
                </Form>
            </section>
        </div>
    );
};

export default Home;