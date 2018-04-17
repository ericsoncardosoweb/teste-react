import React from 'react';
import { Link } from 'react-router';

const getYear = new Date().getFullYear();

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container small">
                By Beyond © {getYear}
            </div>
        </footer>
    )
};

export default Footer;