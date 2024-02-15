import React from 'react';
import './Header.css';
import codeimage1 from './pages/images/htmlcode.png';
import { Card, Row } from 'react-bootstrap';

import github from './pages/images/githubcat.png';
import linkedin from './pages/images/linkedin.png';



const styles = {
headerStyle: {
    backgroundImage: `url(${codeimage1})`,
    height: "60vh",
    marginTop: "-20px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
},
headingStyle: {
    fontSize: '50px',
    fontFamily:'Courier',
    paddingLeft: 120, 
    paddingRight: 120,
},
};



function Header() {
return (

    <>
    <div>
    <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Welcome, I'm Daniel Gregoire Full Stack Web Developer</h1>
        <Card style ={{backgroundColor: "black",marginLeft:600,marginBottom:-79,marginTop:10, width:"5%"}}>
    <a href="https://www.linkedin.com/in/daniel-gregoire-4a53661a0/" target="_blank" rel="noreferrer">
    <Card.Img src={linkedin}/>
    </a>
    </Card>
    <Card style ={{backgroundColor: "black",marginLeft:700, marginBottom:1, width:"5%"}}>
    <a href="https://github.com/danielgregoire34" target="_blank" rel="noreferrer">
    <Card.Img src={github}/>
    </a>
    </Card>
    </header>

    </div></>

);
}

export default Header;
