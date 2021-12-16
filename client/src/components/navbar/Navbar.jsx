import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <Link to="/users" className='nav-links'>User</Link>
            <Link to="/upload" className='nav-links'>User Upload</Link>
        </div>
    )
}

export default Navbar;