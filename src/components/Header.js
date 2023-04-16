import React from 'react';
import './Header.css';

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
