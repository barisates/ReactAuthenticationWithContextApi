import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                <p>Welcome to Home HomePage</p>
                <Link className="App-link" to="/login">Login</Link>
            </header>
        </div>
    );
}

export default HomePage;