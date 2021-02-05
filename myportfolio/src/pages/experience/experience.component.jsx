import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
//import L_THESPARKSFOUNDATION from "../../assets/img/experience/thesparksfoundation.svg";
import "./experience.style.css";

const Experience = () => {
    return (
      <div id="experience">
        
        <h1  className="pt-3 text-center font-details pb-3">EXPERIENCE</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  {/* <Card.Img variant="top" className="img-resize" src={L_THESPARKSFOUNDATION} alt="TheSparksFoundation logo" /> */}
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">The Sparks Foundation</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style "> Data Science Intern</strong>
                      <br />
                      <strong>Technology:</strong> Data Analysis, Python,  
                      <br />
                      <strong>Duration:</strong> Nov 2020 - Jan 2021
                      <br/>
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li><strong>Developed &amp; enhanced</strong> multiple features and Analysis the code.</li>
                        <li><strong>Analysis</strong>  the code and perform operation on the data, also optimize the Algorithm .
                        </li>
                        <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                        to the business requirements.</li>
                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul> 
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default Experience;
  
