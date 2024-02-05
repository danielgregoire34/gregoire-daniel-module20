import React from "react";
import {
Box,
Container,
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
<Row className = "black">
    <Heading>Connect on:</Heading>
    <Card style ={{color: "black", marginBottom:1,marginLeft:10, width:"10%"}}>
    <a href="https://github.com/danielgregoire34" target="_blank" rel="noreferrer">
    <Card.Img src={github}/>
    </a>
</Card>
<Card style ={{color: "black", marginBottom:1,marginLeft:10, width:"10%"}}>
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