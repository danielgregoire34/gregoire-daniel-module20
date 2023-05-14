import React from 'react';

import { Image } from 'primereact/image';
import 'bootstrap/dist/css/bootstrap.min.css'
import resumeupdate from './images/Daniel_Gregoire_Resume.jpg';

import {Card} from 'react-bootstrap';

export default function Resume() {
  return (
    <div>
      <div>
      <Card.Img src={resumeupdate} alt="Daniel Gregoire Resume"
      style={{width: "1000px", height: "1200px",marginLeft:200
    }}/>
    </div>
    </div>
  );
}
