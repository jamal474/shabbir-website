import React from 'react'
import quizton_img from '../assets/image/quizton.jpg'
import portfolio_img from '../assets/image/portfolio.png'
import noteracy_img from '../assets/image/noteracy.png'
import eye from '../assets/icon/eye.svg'
import code from '../assets/icon/code.svg'

const WebD = () => {
    return (
        <div>
            <div className="project-style-2">
                <div className="project-image-2">
                    <div className="project-profile-back-2"></div>
                    <img className="project-profile" src={noteracy_img} alt="project preview shot"></img>
                </div>
                <div className="description">
                    <div className="overview">
                        <h1 className="desc-name">Noteracy</h1>
                        <p style={{ "font-size": "40px", "margin": "0px 20px 0px 20px", }}>~</p>
                        <a className="proj-link" href="https://github.com/jamal474/NoteracyApp" target="_blank" rel="noreferrer"><img className="code" src={code} alt="code-logo" /></a>
                        <a className="proj-link" href="https://noteracy.cyclic.app" target="_blank" rel="noreferrer"><img className="eye" src={eye} alt="eye-logo" /></a>
                    </div>
                    <div className="skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className="skill-comp">Express.js</div>
                        <div className="skill-comp">Node.js</div>
                        <div className="skill-comp">MongoDB</div>
                        <div className="skill-comp">React.js</div>
                        <div className="skill-comp">Passport.js</div>
                        <div className="skill-comp">HTML</div>
                        <div className="skill-comp">CSS</div>
                    </div>
                    <div className="proj-desc">Noteracy is an all-in-one solution for seamless note-taking and organization.</div>
                    <div className="proj-desc-points">
                        <ul>
                            <li className="proj-desc-point">
                                backend was developed following <span style={{ color: "blue" }}>REST API</span> principles, utilizing Express.js, Node.js, and MongoDB for data storage
                            </li>
                            <li className="proj-desc-point">
                                Created the frontend with React.js and implemented secure authentication using Passport.js with <span style={{ color: "blue" }}>google-oauth-20 strategy</span> and deployed using <span style={{ color: "blue" }}>cyclic.sh</span>
                            </li>
                            <li className="proj-desc-point">
                                Designed an attractive and functional user interface for note <span style={{ color: "blue" }}>creation, updates, deletions, and efficient search</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-style-1">
                <div className="project-image-1">
                    <div className="project-profile-back-1"></div>
                    <img className="project-profile" src={quizton_img} alt="project preview shot"></img>
                </div>
                <div className="description">
                    <div className="overview">
                        <h1 className="desc-name">Quizton</h1>
                        <p style={{ "font-size": "40px", "margin": "0px 20px 0px 20px", }}>~</p>
                        <a className="proj-link" href="https://github.com/jamal474/quizton" target="_blank" rel="noreferrer"><img className="code" src={code} alt="code-logo" /></a>
                        <a className="proj-link" href="https://quizton.mdshabbirjamal.one/" target="_blank" rel="noreferrer"><img className="eye" src={eye} alt="eye-logo" /></a>
                    </div>
                    <div className="skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className="skill-comp">HTML</div>
                        <div className="skill-comp">CSS</div>
                        <div className="skill-comp">JavaScript</div>
                        <div className="skill-comp">ReactJS</div>
                    </div>
                    <div className="proj-desc">A website to check your Knowledge on various topics like Computer Science, Mathematics, Sports, History, and Animals .</div>
                    <div className="proj-desc-points">
                        <ul>
                            <li className="proj-desc-point">
                                Question data is obtained form <a href="https://opentdb.com/" target="_blank" rel="noreferrer" className="lia">Open Trivia Database</a> API
                            </li>
                            <li className="proj-desc-point">
                                Uses tokens gernerated by opentdb's API to access new set of questions each time
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-style-2">
                <div className="project-image-2">
                    <div className="project-profile-back-2"></div>
                    <img className="project-profile" src={portfolio_img} alt="project preview shot"></img>
                </div>
                <div className="description">
                    <div className="overview">
                        <h1 className="desc-name">Portfolio</h1>
                        <p style={{ "font-size": "40px", "margin": "0px 20px 0px 20px", }}>~</p>
                        <a className="proj-link" href="https://github.com/jamal474/portfolio" target="_blank" rel="noreferrer"><img className="code" src={code} alt="code-logo" /></a>
                        <a className="proj-link" href="https://www.mdshabbirjamal.one" target="_blank" rel="noreferrer"><img className="eye" src={eye} alt="eye-logo" /></a>
                    </div>
                    <div className="skills-comp-used">
                        {/* <div>Skills  :  </div> */}
                        <div className="skill-comp">HTML</div>
                        <div className="skill-comp">CSS</div>
                        <div className="skill-comp">JavaScript</div>
                        <div className="skill-comp">ReactJS</div>
                    </div>
                    <div className="proj-desc">A Porfolio for my academic information, projects etc</div>
                    <div className="proj-desc-points">
                        <ul>
                            <li className="proj-desc-point">
                                <span style={{ color: "blue" }}>Fully Responsive</span> Website, designed and implemented using React.js
                            </li>
                            <li className="proj-desc-point">
                                Deployed using the <span style={{ color: "blue" }}>Netlify</span> platform
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebD