import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Header.css'
function Header() {

  

  return (
    <section className= 'header' >
      <div className="option" name="myElements">
        <h1 className = "logo" id = "logo">jamal474</h1>
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        
          <div className = "nav">
            <Link to="/" className = "nav-option">About</Link>
            <Link to="/Education"  className = "nav-option">Education</Link>
            <Link to="/Projects" className = "nav-option">Projects</Link>
            <Link to="/Skills"  className = "nav-option">Skills</Link>
            <Link to="/Contact" className = "nav-option">Contacts</Link>
          </div>
       
      </div>
    </section>
  );
}

export default Header;
