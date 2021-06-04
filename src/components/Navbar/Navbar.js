import React from 'react';
import logo from '../../Fakedata/logos/Group 1329.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} width="150" height="40" alt="" />
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signIn">Donation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <button type="button" className="btn btn-primary mr-sm-2 ">Register</button>
                        <button type="button" className="btn btn-secondary">Admin</button>
                        
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;