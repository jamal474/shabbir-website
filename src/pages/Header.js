import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation} from 'react-router-dom';
import '../style/Header.css'

function Header() {
  const [isActive, setIsActive] = React.useState(true);
  const location = useLocation();
  console.log(location.pathname);
  const handleClick = () => {
    setIsActive(!isActive);
  }

  const className = isActive ? "side-menu" : "remside-menu";

  return (
    <section className= 'header' >
      <div className="option" name="myElements">
        <h1 className = "logo" id = "logo"><a href = "https://mdshabbirjamal.one">jamal474</a></h1>
        <input className = {className} type="checkbox" id="side-menu" onClick={handleClick}/>
        <label className ="hamb" for="side-menu"><span className ="hamb-line"></span></label>
        
          <div className = "nav">
            
            <Link to="/" className = {location.pathname === "/" ? "nav-option current-option": "nav-option" } onClick={handleClick}>About</Link>
            <Link to="/Experience"  className = {location.pathname === "/Experience" ? "nav-option current-option": "nav-option" } onClick={handleClick}>Experience</Link>
            <Link to="/Education"  className = {location.pathname === "/Education" ? "nav-option current-option": "nav-option" } onClick={handleClick}>Education</Link>
            <Link to="/Projects" className = {location.pathname === "/Projects" ? "nav-option current-option": "nav-option" } onClick={handleClick}>Projects</Link>
            {/* <Link to="/Skills"  className = {location.pathname === "/Main" ? "nav-option current-option": "nav-option" } onClick={handleClick}>Skills</Link> */}
            {/* <Link to="/Contact" className = {location.pathname === "/Contact" ? "nav-option current-option": "nav-option" } onClick={handleClick}>Contacts</Link> */}
          </div>
       
      </div>
      
    </section>
  );
}

export default Header;
