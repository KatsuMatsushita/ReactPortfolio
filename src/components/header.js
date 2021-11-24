import React from 'react';

// using object destructuring we get the variables from the props, and assign them their own names
function header({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <h3 style={{color:'white'}}>Katsunori Matsushita</h3>
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
                >About Me</a>
            </li>
            <li className="nav nav-item">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                //this ternary check is copied from a class activity
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
            </li>
            <li className='nav nav-item'>
                <a href="#contact" onClick={() => handlePageChange('Contact')}
                //this ternary check is copied from a class activity
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </li>
            <li className='nav nav-item'>
                <a href="#resume" onClick={() => handlePageChange('Resume')}
                //this ternary check is copied from a class activity
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>
        </ul>
    );
}

export default header;