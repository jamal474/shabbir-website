import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Header.css'

function Header() {
  const [isActive, setIsActive] = React.useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const className = isActive ? "side-menu" : "remside-menu";

  return (
    <section className= 'header' >
      <div className="option" name="myElements">
        <h1 className = "logo" id = "logo">jamal474</h1>
        <input className = {className} type="checkbox" id="side-menu" onClick={handleClick}/>
        <label className ="hamb" for="side-menu"><span className ="hamb-line"></span></label>
        
          <div className = "nav">
            
            <Link to="/" className = "nav-option" onClick={handleClick}>About</Link>
            <Link to="/Education"  className = "nav-option" onClick={handleClick}>Education</Link>
            <Link to="/Projects" className = "nav-option" onClick={handleClick}>Projects</Link>
            <Link to="/Skills"  className = "nav-option" onClick={handleClick}>Skills</Link>
            <Link to="/Contact" className = "nav-option" onClick={handleClick}>Contacts</Link>
          </div>
       
      </div>
      
    </section>
  );
}

export default Header;
