import React from 'react';
import { Link, Router } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md custom-navbar">
                <a className="navbar-brand">MyBlog</a>
                <div className="collapse navbar-collapse" id="slide">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tutorials" className="nav-link">Tutorials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Blog</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;