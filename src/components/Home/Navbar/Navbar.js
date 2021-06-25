import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light m-2 border bg-primary">
            <h1 className="p-2 ml-5 bg-warning text-dark">Fixtech</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto text-white h2">
                    <li class="nav-item active  mr-5">
                        <Link className="nav-link mr-5 ml-5 text-white" to="">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link mr-5 ml-5 text-white" to="/about">About</Link>
                    </li>
                     
                    <li class="nav-item">
                        <Link className="nav-link mr-5 ml-5 text-white" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link mr-5 ml-5 text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link mr-5 ml-5 text-dark bg-warning" to="/login">Login</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;