import React from 'react';
import './Header.css';
import codeimage1 from './pages/images/htmlcode.png';
import { Card } from 'react-bootstrap';

const styles = {
headerStyle: {
    background: 'teal',
},
headingStyle: {
    fontSize: '50px',
},
};


function Header() {
return (
    <header style={styles.headerStyle} className="header">
    <h1 style={styles.headingStyle} >Daniel Gregoire Full Stack Web Developer</h1>
    </header>
);
}

export default Header;
