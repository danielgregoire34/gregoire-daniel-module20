import React from 'react';

const appStyles = {
  backgroundColor: 'black', 
};


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={appStyles}>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
          href="#home" style={{fontFamily:'Courier',color:'white'}}
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"style={{fontFamily:'Courier',color:'white'}}
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"style={{fontFamily:'Courier',color:'white'}}
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"style={{fontFamily:'Courier',color:'white'}}
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portofolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"style={{fontFamily:'Courier',color:'white'}}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
