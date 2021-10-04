import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container m-5 mx-auto">
            <h2 className="text-center mb-5 fw-bold">Why Sami's Educare?</h2>
            <div className="d-flex">
                <div className="me-5 border p-4 bg-primary text-light">
                    <h4 className="fw-bold">Learn together</h4>
                    <hr />
                    <p>
                        Join millions of people from around the world learning together. Online learning is as easy and natural as chatting with a group of friends.
                    </p>
                </div>
                <div className="me-5 border p-4 bg-success text-light">
                    <h4 className="fw-bold">Learn anything</h4>
                    <hr />
                    <p>
                        Whether you want to develop as a professional or discover a new hobby, there's an online course for that. You can even take your learning further with online programs and degrees.
                    </p>
                </div>
                <div className="me-5 border p-4 bg-danger text-light">
                    <h4 className="fw-bold">Learn with experts</h4>
                    <hr />
                    <p>
                        Meet educators from top universities and cultural institutions, who'll share their experience through videos, articles, quizzes and discussions.
                    </p>
                </div>
            </div>
            <hr className="mt-5" />
            <div className="container mx-auto w-50 m-5 bg-success p-5 text-light">
                <h2 className="mb-3">Contact Us</h2>
                <Form className="">
                    <FormControl
                        type="text"
                        placeholder="Name"
                        className="mb-2"
                        aria-label="Text"
                    />
                    <FormControl
                        type="email"
                        placeholder="Email"
                        className="mt-2"
                        aria-label="Email"
                    />
                    <FormControl
                        type="text"
                        placeholder="Phone"
                        className="mt-2"
                        aria-label="Number"
                    />
                    <textarea rows="10" cols="50" className="mt-4 rounded-3 ps-2" placeholder="Your Queries">

                    </textarea>
                    <Button className="mt-3" variant="outline-light">Send</Button>
                </Form>
            </div>
            <hr />
        </div>
    );
};

export default About;