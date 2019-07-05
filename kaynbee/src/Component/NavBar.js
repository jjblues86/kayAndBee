import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return(
        <nav
            className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="navbar-brand" href="#">Kay & Bee Events</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars" style={{color: '#fff'}}></i>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white text-uppercase ml-3" href="#" to="/">Home&nbsp;
                            <i className="fas fa-home" />
                            <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-3" href="#" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-3" href="#" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-3" href="#" to="contacts">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

