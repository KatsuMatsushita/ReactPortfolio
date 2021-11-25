import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function work() {
  return (
    <Container
        style={{
            backgroundColor: 'white'
        }}>
        <h1>Examples of Work</h1>
        <Row>
            <Col xs={12} md={8}>
                <a href="https://jeffcela.github.io/Rotten_Trailers/index.html">
                <img src="/img/rotten_trailers_logo.jpg" alt="rotten tomato movie projector, logo of Rotten Trailers" title="Rotten Trailers Page" style={{width: '75%'}} />
                </a>
            </Col>
            <Col xs={6} md={4}>
                <p>
                Rotten Trailers is an app which searches the OpenIMDB API for movies, and uses the YouTube API to find their trailers.
                </p>
                <p>
                    The app is written mostly in JavaScript and uses Materialize for styling.
                </p>
                <p>
                    <a href="https://github.com/jeffcela/Rotten_Trailers">GitHub Repo</a>
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <p>
                CacheTag is an app which scrapes the most popular hashtags on social media of a given genre, and then allows the user to save them for later use.
                </p>
                <p>
                    The app is written in JS and uses a MySQL database for keeping track of users and their saved hashtags.
                </p>
                <p>
                    <a href="https://github.com/hudsonhancock/cachetag">GitHub Repo</a>
                </p>
            </Col>
            <Col xs={12} md={8}>
                <a href="https://cachetag2.herokuapp.com/">
                <img src="/img/CacheTagHome.png" alt="screenshot of the CacheTag Homepage" title="CacheTag Deployed Web App" style={{width: '75%'}} />
                </a>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <a href="https://scary-spell-83810.herokuapp.com/">
                <img src="/img/FitnessTracker.jpg" alt="screenshot of the Fitness Tracker Homepage" title="Fitness Tracker Deployed Web App" style={{width: '75%'}} />
                </a>
            </Col>
            <Col xs={6} md={4}>
                <p>
                This is a fitness tracking web app which uses MongoDB to keep track of workout exercises.
                </p>
                <p>
                    <a href="https://github.com/KatsuMatsushita/WorkoutTracker">GitHub Repo</a>
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <p>
                This is a money tracking web app that can run online and offline. It uses a MongoDB database, and JavaScript.
                </p>
                <p>
                    <a href="https://github.com/KatsuMatsushita/BudgetTracker">GitHub Repo</a>
                </p>
            </Col>
            <Col xs={12} md={8}>
                <a href="https://infinite-bastion-74292.herokuapp.com/">
                <img src="/img/budgetTracker.jpg" alt="screenshot of the Budget Tracker Homepage" title="Budget Tracker Deployed Web App" style={{width: '75%'}} />
                </a>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <a href="https://github.com/KatsuMatsushita/EmployeeManager">
                <img src="/img/Main Menu.jpg" alt="screenshot of the Main Menu of the CLI" title="Repo of a database accessing CLI app" style={{width: '75%'}} />
                </a>
            </Col>
            <Col xs={6} md={4}>
                <p>
                    This web app uses JavaScript and MySQL to set up a simple employee database, and allow for the entering and deleting of employees.
                    It is completely on the command line, and is an early example of working with MySQL and JavaScript.
                </p>
                <p>
                    <a href="https://github.com/KatsuMatsushita/EmployeeManager">GitHub Repo</a>
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <p>
                    The Blog CMS is a simple content management system using JavaScript and MySQL. Users can create accounts, create posts, and comment posts.
                </p>
                <p>
                    <a href="https://github.com/KatsuMatsushita/BlogCMS">GitHub Repo</a>
                </p>
            </Col>
            <Col xs={12} md={8}>
                <a href="https://cmdblogcms.herokuapp.com/">
                <img src="/img/CMD Tech Blog.jpg" alt="Title of the Blog CMS" title="Blog CMS Deployed Web App" style={{width: '75%'}} />
                </a>
            </Col>
        </Row>
    </Container>
  );
}