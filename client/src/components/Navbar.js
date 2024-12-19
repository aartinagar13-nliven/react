import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <h1>DCVS</h1>
            <Link to="/">Home</Link>
            <Link to="/self-registration">Self Registration</Link>
            <Link to="/enquiry">Enquiry</Link>
        </nav>
    );
};
export default Navbar;