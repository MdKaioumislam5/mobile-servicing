import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light m-2 border">
            <a class="navbar-brand" href="#">Fixtech</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        {/* <a class="nav-link mr-5" href="#">Home</a> */}
                        <Link className="nav-link mr-5" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link mr-5" href="#">About</a> */}
                        <Link className="nav-link mr-5" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link mr-5" href="#">Projects</a> */}
                        <Link className="nav-link mr-5" to="/project">Projects</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link mr-5" href="#">Contact Us</a> */}
                        <Link className="nav-link mr-5" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link mr-5" href="#">Dashboard</a> */}
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link mr-5" href="#">Login</a> */}
                        <Link className="nav-link mr-5" to="/login">Login</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;