import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-center p-5">
            <h1 className="text-info"><span className="text-warning">SAMI'S</span> EDUCARE</h1>
            <h6 className="text-info">LEARN FOR PASSION, NOT FOR PROFESSION</h6>
            <p className="text-info">Follow Us On:</p>
            <p>
                <a href="https://www.facebook.com/" target="_blank"><i aria-hidden="true" className="fa fa-facebook text-warning me-3" data-toggle="tooltip" title="Facebook"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i aria-hidden="true" className="fa fa-twitter text-warning me-3" data-toggle="tooltip" title="Twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i aria-hidden="true" className="fa fa-linkedin text-warning me-3" data-toggle="tooltip" title="Linkedin"></i></a>
                <a href="https://www.github.com/" target="_blank"><i aria-hidden="true" className="fa fa-github text-warning me-3" data-toggle="tooltip" title="Github"></i></a>
            </p>
            <p className="text-secondary">&copy;Sami Meadad Choudhury</p>
        </footer>
    );
};

export default Footer;