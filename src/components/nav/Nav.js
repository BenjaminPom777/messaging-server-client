import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <Link style={navStyle} to="/">
                <h3>{props.name}</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/compose'>
                    <li>Compose Email</li>
                </Link>
                <Link style={navStyle} to='/manage'>
                    <li>Manage Emails</li>
                </Link>
            </ul>
        </nav>
    )
}
