import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to DCVS</h2>
            <Link to="/self-registration">
                <button className="blue-button">Self Registration</button>
            </Link>
            <Link to="/enquiry">
                <button className="blue-button">Enquiry</button>
            </Link>
        </div>
    );
};
export default Home;