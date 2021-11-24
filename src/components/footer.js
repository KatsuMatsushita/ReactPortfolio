import React from 'react';

const itemStyle = {
    display:'inline-block',
    padding: '10px'
};

function footer() {
    return (
        <ul className="nav">
            <li style={itemStyle}>
                <span className="nav-item">
                <a href="https://www.linkedin.com/in/katsunori-matsushita-84928b90/">
                    <i class="fab fa-linkedin fa-3x fa-border" alt="link to linkedin profile"></i>
                </a>
                </span>
            </li>
            <li style={itemStyle}>
                <span className="nav-item">
                <a href="mailto:katsu.matsushita@gmail.com">
                    <i class="fas fa-envelope-open-text fa-3x fa-border" alt="email: katsu.matsushita@gmail.com"></i>
                </a>
                </span>
            </li>
            <li style={itemStyle}>
                <span className="nav-item">
                <a href="tel:570-269-0050">
                    <i class="fas fa-phone-square fa-3x fa-border"></i>
                </a>
                </span>
            </li>
            <li style={itemStyle}>
                <span className="nav-item">
                <a href="/files/Katsu Matsushita Resume.pdf" download>
                    <i class="fas fa-file-download fa-3x fa-border"></i>
                </a>
                </span>
            </li>
        </ul>
    );
}

export default footer;