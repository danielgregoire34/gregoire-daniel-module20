import React from "react";
import {
Box,
Container,
FooterLink,
Heading,
} from "./FooterStyles";

import {Card,Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'


//import github from './images/githubcat.png';
import github from './pages/images/githubcat.png';
import linkedin from './pages/images/linkedin.png';

const Footer = () => {
return (
    <Box>

<Container>
<Row className = "rows">
    <Heading>Connect on:</Heading>
    <Card style ={{color: "#000", marginBottom:1, width:"10%"}}>
    <a href="https://github.com/danielgregoire34" target="_blank" rel="noreferrer">
    <Card.Img src={github}/>
    </a>
</Card>
<Card style ={{color: "#000", marginBottom:1, width:"10%"}}>
    <a href="https://www.linkedin.com/in/daniel-gregoire-4a53661a0/" target="_blank" rel="noreferrer">
    <Card.Img src={linkedin}/>
    </a>
</Card>
</Row>
    </Container>


    </Box>
);
};
export default Footer;