import '../style/Skills.css'
import htmlimg from '../assets/icon/html.png'
import cssimg from '../assets/icon/css.png'
import javascriptimg from '../assets/icon/javascript.png'
import reactimg from '../assets/icon/react.png'
import cplusplusimg from '../assets/icon/c++.png'

function Skills()
{
    return(
        <section className = "skills syncscroll" name="myElements" id = "Skills">
            <h2 className = "skills-section-title">Skills</h2>
            <div className = "skills-section">
                <div className = "skills-learned">
                    <img className = "skills-learned-logo" src = {htmlimg} alt = "html logo"/>
                    <h2 className = "skills-learned-comp">HTML</h2>
                </div>
                <div className = "skills-learned">
                    <img className = "skills-learned-logo" src = {cssimg} alt = "css logo"/>
                    <h2 className = "skills-learned-comp">CSS</h2>
                </div>
                <div className = "skills-learned">
                    <img className = "skills-learned-logo" src = {javascriptimg} alt = "javaScript logo"/>
                    <h2 className = "skills-learned-comp">JavaScript</h2>
                </div>
                <div className = "skills-learned">
                    <img className = "skills-learned-logo" src = {reactimg} alt = "react logo"/>
                    <h2 className = "skills-learned-comp">ReactJS</h2>
                </div>
                <div className = "skills-learned">
                    <img className = "skills-learned-logo" src = {cplusplusimg} alt = "c++ logo"/>
                    <h2 className = "skills-learned-comp">C++</h2>
                </div>
            </div>
        </section>
    )
}

export default Skills;