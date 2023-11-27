import SEO from './SEO'
import '../style/Skills.css'
import htmlimg from '../assets/icon/html.svg'
import cssimg from '../assets/icon/css.svg'
import javascriptimg from '../assets/icon/js.svg'
import reactimg from '../assets/icon/react.svg'
import cplusplusimg from '../assets/icon/cpp.svg'
import python from '../assets/icon/py.svg'
import node from '../assets/icon/node.svg'
import mysql from '../assets/icon/sql.svg'
import clang from '../assets/icon/c.svg'
import mondb from '../assets/icon/mongo.svg'

function Skills() {
    return (
        <section className="skills" name="myElements" id="Skills">
            <SEO
                title="Skills - Md Shabbir Jamal"
                description="I have skills in problem solving, many tools like html, css, react.js, express.js, and others."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
            <h2 className="skills-section-title">Skills</h2>
            <div className="skills-section">
                <div className="language">
                    <div className="language-title">Languages</div>
                    <div className="skillrow">
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={cplusplusimg} alt="c++ logo" />
                            <h2 className="skills-learned-comp">C++</h2>
                        </div>
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={clang} alt="c++ logo" />
                            <h2 className="skills-learned-comp">C</h2>
                        </div>
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={python} alt="c++ logo" />
                            <h2 className="skills-learned-comp">Python</h2>
                        </div>
                    </div>
                </div>
                <div className="frontend">
                    <div className="frontend-title">Frontend</div>
                    <div className="skillrow"><div className="skills-learned">
                        <img className="skills-learned-logo" src={htmlimg} alt="html logo" />
                        <h2 className="skills-learned-comp">HTML</h2>
                    </div>
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={cssimg} alt="css logo" />
                            <h2 className="skills-learned-comp">CSS</h2>
                        </div>
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={javascriptimg} alt="javaScript logo" />
                            <h2 className="skills-learned-comp">JavaScript</h2>
                        </div>
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={reactimg} alt="react logo" />
                            <h2 className="skills-learned-comp">ReactJS</h2>
                        </div>
                    </div>
                </div>
                <div className="backend">
                    <div className="backend-title">Backend</div>
                    <div className="skillrow">
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={node} alt="c++ logo" />
                            <h2 className="skills-learned-comp">NodeJS</h2>
                        </div>
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={node} alt="c++ logo" />
                            <h2 className="skills-learned-comp">ExpressJS</h2>
                        </div>
                    </div>
                </div>
                <div className="database">
                    <div className="database-title">Database</div>
                    <div className="skillrow">
                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={mysql} alt="c++ logo" />
                            <h2 className="skills-learned-comp">MySQL</h2>
                        </div>

                        <div className="skills-learned">
                            <img className="skills-learned-logo" src={mondb} alt="c++ logo" />
                            <h2 className="skills-learned-comp">MongoDB</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;