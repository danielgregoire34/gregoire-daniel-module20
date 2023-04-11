import React from 'react';
import codeimage1 from './images/htmlcode.png';
import lightbulb from './images/projectslightbulb.png';
import bluecode from './images/bluecodeimage.png';
import weather from './images/weatherAPIScreenshot.png';

import 'bootstrap/dist/css/bootstrap.min.css'

import {Card, Container, Row, } from 'react-bootstrap';

export default function Portfolio() {
  return (
    
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
    <a href="https://github.com/danielgregoire34/gregoire-daniel-module20" target="_blank" rel="noreferrer">
    <Card.Img src={codeimage1}/>
      <Card.Body>
        <Card.Title>
          Project2
        </Card.Title>
        <Card.Text>
          Example Project
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://github.com/danielgregoire34/gregoire-daniel-module20" target="_blank" rel="noreferrer">
    <Card.Img src={bluecode}/>
      <Card.Body>
        <Card.Title>
          Project3
        </Card.Title>
        <Card.Text>
          Example Project
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://github.com/danielgregoire34/gregoire-daniel-module20" target="_blank" rel="noreferrer">
    <Card.Img src={lightbulb}/>
      <Card.Body>
        <Card.Title>
          Project4
        </Card.Title>
        <Card.Text>
          Example Project
        </Card.Text>
      </Card.Body>
      </a>
  </Card>
</Row>
      </Container>

    </div>



  );
}
