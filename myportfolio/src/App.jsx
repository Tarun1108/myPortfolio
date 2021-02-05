import  React  from  'react';
import './App.css';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import  TitleMessage from  "./components/title-message/title-message-component";
import About from './pages/about/about.component'
import Container from "react-bootstrap/Container";

import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

const App=()=> {
  return (
      <div className="App" style={{ position: "relative" }} >
        <MyNavbar />
        <MyCarousal/>
        <TitleMessage />

        <div>
            <Parallax>
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                                <About />
                        </Fade>    
                    </Container>
                      
            </Parallax>
            
        </div>
       
  
        </div>
    );
};

export default App;
