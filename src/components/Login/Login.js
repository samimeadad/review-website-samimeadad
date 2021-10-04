import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Login = () => {
    return (
        <div style={ { height: '26.4rem' } } className="container mx-auto w-25 m-5">
            <Form className="">
                <FormControl
                    type="text"
                    placeholder="Enter Login Id"
                    className="mb-2"
                    aria-label="Text"
                />
                <FormControl
                    type="password"
                    placeholder="Enter Password"
                    className="mt-2"
                    aria-label="Password"
                />
                <Button className="mt-3" variant="outline-primary">Login</Button>
            </Form >
        </div >
    );
};

export default Login; <input type="text" name="" id="" placeholder="Enter Login Name" />