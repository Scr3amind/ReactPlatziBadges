import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../images/logo.svg';

export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <Link to="/" className="Navbar__brand">
                    <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link> 
            </div>
        </div>
    )
}
