import React from 'react'
import {Link} from 'react-scroll'
import '../style/Header.css'
function Header() {

  const [color,setColor] = React.useState(false)
  const changeColor = () => {
    if(window.scrollY >=60) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className="option syncscroll" name="myElements">
        <Link to="App" spy={true} smooth={true} offset={-60} duration={500} className = "logo" >MDSJ</Link>
        <Link to="About" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">About</Link>
        <Link to="Education" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Education</Link>
        <Link to="Project" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Projects</Link>
        <Link to="Skills" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Skills</Link>
        <Link to="Contacts" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Contacts</Link>
      </div>
    </div>
  );
}

export default Header;
