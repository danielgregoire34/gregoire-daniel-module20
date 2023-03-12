import React from 'react';
import codeimage from './images/codeimage2.png';
import codeimage1 from './images/htmlcode.png';
import lightbulb from './images/projectslightbulb.png'
import bluecode from './images/bluecodeimage.png'

import 'bootstrap/dist/css/bootstrap.min.css'

import {Card, Container, Row, } from 'react-bootstrap';

export default function Portofolio() {
  return (
    
    <div>
      <h1>Portofolio</h1>

      <Container>
<Row className = "rows">
  <Card style ={{color: "#000", marginBottom:1, width:"50%"}}>
    <a href="https://github.com/danielgregoire34/gregoire-daniel-module20" target="_blank" rel="noreferrer">
    <Card.Img src={codeimage}/>
      <Card.Body>
        <Card.Title>
          Project1
        </Card.Title>
        <Card.Text>
          Example Project
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
