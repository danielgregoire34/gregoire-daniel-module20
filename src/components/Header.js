import React from 'react';
import './Header.css';

const styles = {
headerStyle: {
    background: 'teal',
},
headingStyle: {
    fontSize: '100px',
},
};



function Header() {
return (
    <header style={styles.headerStyle} className="header">
    <h1 style={styles.headingStyle}>Daniel Gregoire</h1>
    </header>
);
}

export default Header;
