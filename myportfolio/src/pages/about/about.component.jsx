import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.webp.jpg";
import "./about.style.css";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id='about'>
             <div className="about">
            <h1  className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                      <Col xs={12}md={6}>
                         {/*profile picture */}
                          <Row className="justify-content-center mb-2 mr-2 ">
                          <Image className="profile justify-content-end" src={Profile} thumbnail fluid/>
                          </Row>
                     </Col >
                     {/* Abour me Description */}
                     <Col xs={12}md={6}>
                         <Row className=" align-items-start p-2 my-details rounded">
                                {/*  Description */}
                                Hi there! I am <strong>&nbsp;Tarun Rajpoot.</strong>
                                <br />A passionate  Software Developer, born and brought up in India. I am a  Web Developer with React.js, Express.js, Node.js, and Mongodb as my tech stack.
                                <br />Also have a Knowledge of Python , Java, SQL, MySql.
                                 <br />
                                In 2019, I successfully completed my Engineering with specialization in 'Information Technology'.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                 
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />
                         </Row>

                         <Row>
                                {/*  Buttons */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                         <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                    Let's talk
                                             </Button>
                                        </a>
                                </div>
                                <div>
                                        <a href="https://drive.google.com/file/d/15ocBjxsOhiVQB55gfqTn_pFe4BmJ8DbZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                              <Button className="m-2" variant="outline-success">
                                                       My Resume
                                             </Button>
                                         </a>
                                </div>

                                 <div>
                                         <a href="https://github.com/Tarun1108" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                       GitHub
                                            </Button>
                                        </a>
                                 </div>

                                    <div>
                                        <a href="https://www.linkedin.com/in/tarun-rajpoot-81bbb7136/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                            </Col>
                         </Row>
                     
                     </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default About
