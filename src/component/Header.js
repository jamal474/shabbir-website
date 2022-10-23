import React from 'react'
import '../style/Header.css'
function Header() {
  
  return (
    <div className="header">
      <div className="option">
        <h2 id="logo">MDSJ</h2>
        <a href = "#About"><h4 id="option-About">About</h4></a>
        <a href = "#Education"><h4 id="option-Education">Education</h4></a>
        <a href = "#Project"><h4 id="option-Project">Projects</h4></a>
        <a href = "#Skills"><h4 id="option-Skills">Skills</h4></a>
        <a href = "#Contacts"><h4 id="option-Contacts">Contacts</h4></a>
      </div>
    </div>
  );
}

export default Header;
