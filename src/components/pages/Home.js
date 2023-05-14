import React from 'react';
import '../Header.css';

import pfp from './images/pfp.jpeg';

import weather from './images/weatherAPIScreenshot.png';
import game from './images/boldnewcity.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import unittest from './images/UnitTest.PNG';
import ecommerceimg from './images/EcommerceBackEndImage.PNG'

import {Card, Container, Row, } from 'react-bootstrap';


export default function Home() {
  return (
    <div>
      <h1 className="home" >Welcome! I'm Daniel Gregoire</h1>
      <h2 className="home">Full Stack Developer</h2>
      <Card.Img src={pfp} className="pfp"
      style={{width:"500px",height:"500px",marginLeft:450,padding:50
    }}/>

<div>
      <h1>About Me</h1>
      <p>
      My Name is Daniel Gregoire, I have a AA degree graphic design, BA in Digital Arts and Sciences and a 
      certificate in UCF's Coding Boot Camp (Full-Stack Web Development). I have skills in 
      demonstrating a fundamental working knowledge of HTML, CSS, Javascript, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js).
      I also have comprehensive abilities in Maya, The Adobe Suite, C#, C++, Unity, and Unreal Engine.
      </p>
    </div>

    
    <div>
      <h1>Portfolio</h1>

      <Container>
<Row className = "rows">
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://danielgregoire34.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
    <Card.Img src={weather}/>
      <Card.Body>
        <Card.Title>
          Weather Dashboard
        </Card.Title>
        <Card.Text>
        The application utlizes a weather API to track what the forcast will be within the next 5 days of any location you enter into the search bar
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://aayo.itch.io/the-bold-new-city" target="_blank" rel="noreferrer">
    <Card.Img src={game}/>
      <Card.Body>
        <Card.Title>
          Bold New City 
        </Card.Title>
        <Card.Text>
          Unity project 3D Project that utlizes C#, Maya 3D modeling and advance phyics to make a First Person Parkour Game demo.
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://github.com/danielgregoire34/unit-test" target="_blank" rel="noreferrer">
    <Card.Img src={unittest}/>
      <Card.Body>
        <Card.Title>
          Unit Test
        </Card.Title>
        <Card.Text>
          An application that utilizes a unit test that creates a team profile generator. It utilizes Jest, Node, and Inquirer.  
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://github.com/danielgregoire34/ecommerce-backend" target="_blank" rel="noreferrer">
    <Card.Img src={ecommerceimg}/>
      <Card.Body>
        <Card.Title>
          Ecommerce Back-End
        </Card.Title>
        <Card.Text>
        Back end of an e-commerce application, it utilizes SQL, Express and sequelize.
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
</Row>
      </Container>

    </div>




    </div>
    

    
  );
}