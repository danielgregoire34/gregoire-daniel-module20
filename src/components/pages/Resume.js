import React from 'react';

//import resume from './pages/images/danielgresume.png';
import { Image } from 'primereact/image';
//import {Image} from '/pages/images/dgresume.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'

//import {Card, Container, Row, } from 'react-bootstrap';
//import {Image} from 'react-native';
import resume from './images/dgresume.jpg';


export default function Resume() {
  return (
    <div>
      <div>
      <img src={resume} alt="Daniel Gregoire Resume"
      style={{width: 1500, height: 1500,}}/>
    </div>
    </div>
  );
}
