import React from 'react';
import { Link } from 'react-router-dom';
import './desktopNav.scss'

const DesktopNav = () => {
    return (
        <nav>
            This is the Nav
            <Link to={ '/' }>Home</Link>
            <Link to={ '/card' }>Card</Link>
        </nav>
    );
}

export default DesktopNav;
