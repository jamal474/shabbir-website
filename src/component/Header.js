import React from 'react'
import {Link} from 'react-scroll'
import '../style/Header.css'
function Header() {

  const [color,setColor] = React.useState(false);
  let current = "";
  const sections = document.querySelectorAll("section");
  const Links = document.querySelectorAll(".nav-option");


  const Operation = () => {
    console.log(scroll);
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(window.scrollY >= sectionTop)
      {
        current = section.getAttribute("id");
      }
    })

    Links.forEach(item => {
      item.classList.remove("ap");
      if(item.classList.contains(current)){
        item.classList.add("ap");
      }
    })


    if(window.scrollY >=60) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll',Operation)

  return (
    <section className={color ? 'header header-bg' : 'header'}>
      <div className="option syncscroll" name="myElements">
        <a href = "#App" className = "logo" id = "logo">MDSJ</a>
        <Link to="About" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">About</Link>
        <Link to="Education" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Education</Link>
        <Link to="Project" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Projects</Link>
        <Link to="Skills" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Skills</Link>
        <Link to="Contacts" spy={true} smooth={true} offset={-60} duration={500} className = "nav-option">Contacts</Link>
      </div>
    </section>
  );
}

export default Header;
