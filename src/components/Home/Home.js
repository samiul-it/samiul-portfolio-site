import React from 'react';
import Homepage from '../Homepage/Homepage';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Homepage></Homepage>
            <Projects></Projects>
        </div>
    );
};

export default Home;