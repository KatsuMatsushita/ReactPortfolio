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
                <img src="/img/rotten_trailers_logo.jpg" alt="rotten tomato movie projector, logo of Rotten Trailers" style={{width: '75%'}} />
                </a>
            </Col>
            <Col xs={6} md={4}>
                <p>
                Rotten Trailers is an app which searches the OpenIMDB API for movies, and uses the YouTube API to find their trailers.
                </p>
                <p>
                    The app is written mostly in JavaScript and uses Materialize for styling.
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
            </Col>
            <Col xs={12} md={8}>
                <a href="https://cachetag2.herokuapp.com/">
                <img src="/img/CacheTagHome.png" alt="screenshot of the CacheTag Homepage" style={{width: '75%'}} />
                </a>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <a href="https://jeffcela.github.io/Rotten_Trailers/index.html">
                <img src="/img/rotten_trailers_logo.jpg" alt="rotten tomato movie projector, logo of Rotten Trailers" style={{width: '75%'}} />
                </a>
            </Col>
            <Col xs={6} md={4}>
                <p>
                PLACEHOLDER FOR 3RD ITEM
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <p>
                PLACEHOLDER FOR 4TH ITEM
                </p>
                <p>
                    The app is written in JS and uses a MySQL database for keeping track of users and their saved hashtags.
                </p>
            </Col>
            <Col xs={12} md={8}>
                <a href="https://cachetag2.herokuapp.com/">
                <img src="/img/CacheTagHome.png" alt="screenshot of the CacheTag Homepage" style={{width: '75%'}} />
                </a>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <a href="https://jeffcela.github.io/Rotten_Trailers/index.html">
                <img src="/img/rotten_trailers_logo.jpg" alt="rotten tomato movie projector, logo of Rotten Trailers" style={{width: '75%'}} />
                </a>
            </Col>
            <Col xs={6} md={4}>
                <p>
                PLACEHOLDER FOR 5TH ITEM
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={4}>
                <p>
                PLACEHOLDER FOR 6TH ITEM
                </p>
                <p>
                    The app is written in JS and uses a MySQL database for keeping track of users and their saved hashtags.
                </p>
            </Col>
            <Col xs={12} md={8}>
                <a href="https://cachetag2.herokuapp.com/">
                <img src="/img/CacheTagHome.png" alt="screenshot of the CacheTag Homepage" style={{width: '75%'}} />
                </a>
            </Col>
        </Row>
    </Container>
  );
}