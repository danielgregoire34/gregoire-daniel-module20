import React from 'react';
import '../Header.css';

import pfp from './images/pfp.jpeg';

import weather from './images/weatherAPIScreenshot.png';
import game from './images/boldnewcity.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import unittest from './images/UnitTest.PNG';
import ecommerceimg from './images/EcommerceBackEndImage.PNG'

import {Card, Container, Row, } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';

const appStyles = {
  backgroundColor: 'black', 
};

export default function Home() {

  return (
    <div style={appStyles}>
      <Header></Header>
      <Container>
      <Row>
      </Row>
      </Container>

<div>
      <h1 className="home"style={{fontFamily:'Courier',marginTop:20,marginLeft:90}}>About Me</h1>
      <Card.Img src={pfp} className="pfp"
      style={{width:"300px",height:"300px",marginLeft:600,padding:50}}/>
      <p className="home"style={{fontFamily:'Courier',marginTop:20, paddingLeft: 120, paddingRight: 120,borderRadius: 6}}>
      My Name is Daniel Gregoire, I have a AA degree graphic design, BA in Digital Arts and Sciences and a 
      certificate in UCF's Coding Boot Camp (Full-Stack Web Development). I have skills in 
      demonstrating a fundamental working knowledge of HTML, CSS, Javascript, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js).
      I also have comprehensive abilities in Maya, The Adobe Suite, C#, C++, Unity, and Unreal Engine.
      </p>
    </div>

    
    <div>
      <h1 className="home"style={{fontFamily:'Courier',marginTop:70}}>Portfolio</h1>

      <Container>
<Row className = "rows">
  <Card style ={{backgroundColor: "#343a40", marginBottom:1,marginTop:50, width:"50%"}}>
    <Card.Img src={weather}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>
          Weather Dashboard
        </Card.Title>
        <Card.Text style={{color:'white'}}>
        The application utlizes a weather API to track what the forcast will be within the next 5 days of any location you enter into the search bar
        </Card.Text>
        <Card.Link href="https://danielgregoire34.github.io/weather-dashboard/" style={{color:'#6495ED', marginLeft:250} }>Project Demo</Card.Link>
      </Card.Body>
  </Card>

  <Card style ={{backgroundColor: "#343a40", marginBottom:1,marginTop:50, width:"50%"}}>
    <Card.Img src={game}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>
        Bold New City 
        </Card.Title>
        <Card.Text style={{color:'white'}}>
        Unity project 3D Project that utlizes C#, Maya 3D modeling and advance phyics to make a First Person Parkour Game demo.
        </Card.Text>
        <Card.Link href="https://aayo.itch.io/the-bold-new-city" style={{color:'#6495ED', marginLeft:250} }>Project Link</Card.Link>
      </Card.Body>
  </Card>


  <Card style ={{backgroundColor: "#343a40", marginBottom:1,marginTop:50, width:"50%"}}>
    <Card.Img src={unittest}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>
        Unit Test
        </Card.Title>
        <Card.Text style={{color:'white'}}>
        An application that utilizes a unit test that creates a team profile generator. It utilizes Jest, Node, and Inquirer.  
        </Card.Text>
        <Card.Link href="https://github.com/danielgregoire34/unit-test" style={{color:'#6495ED', marginLeft:250} }>Github Link</Card.Link>
      </Card.Body>
  </Card>

  <Card style ={{backgroundColor: "#343a40", marginBottom:1,marginTop:50, width:"50%"}}>
    <Card.Img src={ecommerceimg}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>
        Ecommerce Back-End
        </Card.Title>
        <Card.Text style={{color:'white'}}>
        Back end of an e-commerce application, it utilizes SQL, Express and sequelize.
        </Card.Text>
        <Card.Link href="https://github.com/danielgregoire34/ecommerce-backend" style={{color:'#6495ED', marginLeft:250} }>Github Link</Card.Link>
      </Card.Body>
  </Card>


</Row>
      </Container>
<Footer></Footer>
    </div>
    </div>
    

    
  );
}