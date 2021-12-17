import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <h3>This is Logo</h3>
        <ul>
            <li><Link to ='/'>test</Link></li>
            <li><Link to ='/main'>main</Link></li>
            <li>Info</li>
        </ul>
    </nav>
);

export default Nav;