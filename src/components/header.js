import React from 'react';

// using object destructuring we get the variables from the props, and assign them their own names
function header({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home" onClick={() => handlePageChange('Home')}
                //this ternary check is copied from a class activity
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >Home</a>
            </li>
            <li className="nav nav-item">
                <a href="#about" onClick={() => handlePageChange('About')}
                //this ternary check is copied from a class activity
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About</a>
            </li>
            <li className="nav nav-item">
                <a href="#work" onClick={() => handlePageChange('Work')}
                //this ternary check is copied from a class activity
                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >Work</a>
            </li>
        </ul>
    );
}

export default header;