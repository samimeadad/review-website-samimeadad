import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-center p-3">
            <h3 className="text-info"><span className="text-warning">SAMI'S</span> EDUCARE</h3>
            <h6 className="text-info">LEARN FOR <span className="text-warning">PASSION</span>, NOT FOR <span className="text-warning">PROFESSION</span></h6>
            <p className="text-info">Follow Us On:</p>
            <p>
                <Link to={ { pathname: "https://www.facebook.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-warning me-3" data-toggle="tooltip" title="Facebook"></i></Link>
                <Link to={ { pathname: "https://www.twitter.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-warning me-3" data-toggle="tooltip" title="Twitter"></i></Link>
                <Link to={ { pathname: "https://www.linkedin.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-warning me-3" data-toggle="tooltip" title="Linkedin"></i></Link>
                <Link to={ { pathname: "https://www.github.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-github text-warning me-3" data-toggle="tooltip" title="Github"></i></Link>
            </p>
            <small className="text-secondary">&copy;Sami Meadad Choudhury</small>
        </footer>
    );
};

export default Footer;