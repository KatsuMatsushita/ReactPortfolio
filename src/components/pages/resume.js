import React from 'react';

export default function resume() {
    return (
        <div
        style={{
            backgroundColor: 'white'
        }}>
            <h2>Resume</h2>
            <a href="/files/Katsu Matsushita Resume.pdf" download>
            <i class="fas fa-file-download fa-3x fa-border"></i>
            </a>
            <h2>Proficiencies</h2>
            <h3>Front-End</h3>
            <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>CSS</li>
            </ul>
            <h3>Back-End</h3>
            <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
            </ul>
        </div>
    );
}