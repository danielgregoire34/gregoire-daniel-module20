import React from 'react';
import '../Header.css';

import {Card} from 'react-bootstrap';
import pfp from './images/pfp.jpeg';


export default function Home() {
  return (
    <div>
      <h1 className="home" >Welcome! I'm Daniel Gregoire</h1>
      <h2 className="home">Full Stack Developer</h2>
      <Card.Img src={pfp} className="pfp"/>
    </div>
  );
}