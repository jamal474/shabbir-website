import SEO from './SEO'
import '../style/Project.css'
import quizton_img from '../assets/image/quizton.jpg'
import portfolio_img from '../assets/image/portfolio.png'
import depression_img from '../assets/image/deprT.jpg'
import emotion_img from '../assets/image/emotion.png'
import noteracy_img from '../assets/image/noteracy.png'
import eye from '../assets/icon/eye.svg'
import code from '../assets/icon/code.svg'

function Project()
{
    return(
        <section className = "project syncscroll" name="myElements" id = "Project">
            <SEO
                title="Projects - Md Shabbir Jamal"
                description="Hi, I am a CS undergrad with a strong enthusiasm for web development, machine learning, and competitive programming. Explore my interests on this website."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
            <h2 className = "project-section-title">Projects</h2>
            <div className="project-style-2">
                <div className = "project-image-2">
                    <div className = "project-profile-back-2"></div>
                    <img className = "project-profile" src = {noteracy_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Noteracy</h1>
                        <p style = {{"font-size" : "40px", "margin" : "0px 20px 0px 20px", }}>~</p>
                        <a className = "proj-link" href = "https://github.com/jamal474/NoteracyApp" target = "_blank" rel="noreferrer"><img className = "code" src = {code} alt = "code-logo"/></a>
                        <a className = "proj-link" href = "https://noteracy.cyclic.app" target = "_blank" rel="noreferrer"><img className = "eye" src = {eye} alt = "eye-logo"/></a>
                    </div>
                    <div className = "skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className = "skill-comp">Express.js</div>
                        <div className = "skill-comp">Node.js</div>
                        <div className = "skill-comp">MongoDB</div>
                        <div className = "skill-comp">React.js</div>
                        <div className = "skill-comp">Passport.js</div>
                        <div className = "skill-comp">HTML</div>
                        <div className = "skill-comp">CSS</div>
                    </div>
                    <div className = "proj-desc">Noteracy is an all-in-one solution for seamless note-taking and organization.</div>
                    <div className = "proj-desc-points">
                        <ul>
                            <li className = "proj-desc-point">
                            backend was developed following <span style = {{color : "blue"}}>REST API</span> principles, utilizing Express.js, Node.js, and MongoDB for data storage
                            </li>
                            <li className = "proj-desc-point">
                            Created the frontend with React.js and implemented secure authentication using Passport.js with <span style = {{color : "blue"}}>google-oauth-20 strategy</span> and deployed using <span style = {{color : "blue"}}>cyclic.sh</span>
                            </li>
                            <li className = "proj-desc-point">
                            Designed an attractive and functional user interface for note <span style = {{color : "blue"}}>creation, updates, deletions, and efficient search</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-style-1">
                <div className = "project-image-1">
                    <div className = "project-profile-back-1"></div>
                    <img className = "project-profile" src = {depression_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Depression using Twitter</h1>
                        <p style = {{"font-size" : "40px", "margin" : "0px 20px 0px 20px", }}>~</p>
                        <a className = "proj-link" href = "https://github.com/jamal474/Depression-from-Twitter" target = "_blank" rel="noreferrer"><img className = "code" src = {code} alt = "code-logo"/></a>
                    </div>
                    <div className = "skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className = "skill-comp">Machine Learning / Deep Learning</div>
                        <div className = "skill-comp">pandas</div>
                        <div className = "skill-comp">numpy</div>
                        <div className = "skill-comp">scikit-Learn</div>
                        <div className = "skill-comp">Keras</div>
                        <div className = "skill-comp">SNScrape</div>
                        <div className = "skill-comp">Vader Sentiment</div>
                    </div>
                    <div className = "proj-desc">Analysing Depression Patterns on Twitter and Comparative Study between Developing and Developed Countries</div>
                    <div className = "proj-desc-points">
                        <ul>
                            <li className = "proj-desc-point">
                            Extracted data using <a href = "https://github.com/JustAnotherArchivist/snscrape" target = "_blank" rel="noreferrer" className = "lia">SNScraper</a> and processed it for training
                            </li>
                            <li className = "proj-desc-point">
                            Models like <span style = {{color : "blue"}}>Bi-LSTM with attention</span>, <span style = {{color : "blue"}}>lightGBM</span> and others were used with WAE for classifcation of previously unseen data.
                            </li>
                            <li className = "proj-desc-point">
                            Using predicted classifications we compared the Depression prevalence among <span style = {{color : "blue"}}>Developed and Developing Countries</span>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-style-2">
                <div className = "project-image-2">
                    <div className = "project-profile-back-2"></div>
                    <img className = "project-profile" src = {quizton_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Quizton</h1>
                        <p style = {{"font-size" : "40px", "margin" : "0px 20px 0px 20px", }}>~</p>
                        <a className = "proj-link" href = "https://github.com/jamal474/quizton" target = "_blank" rel="noreferrer"><img className = "code" src = {code} alt = "code-logo"/></a>
                        <a className = "proj-link" href = "https://quizton.mdshabbirjamal.one/" target = "_blank" rel="noreferrer"><img className = "eye" src = {eye} alt = "eye-logo"/></a>
                    </div>
                    <div className = "skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className = "skill-comp">HTML</div>
                        <div className = "skill-comp">CSS</div>
                        <div className = "skill-comp">JavaScript</div>
                        <div className = "skill-comp">ReactJS</div>
                    </div>
                    <div className = "proj-desc">A website to check your Knowledge on various topics like Computer Science, Mathematics, Sports, History, and Animals .</div>
                    <div className = "proj-desc-points">
                        <ul>
                            <li className = "proj-desc-point">
                                Question data is obtained form <a href = "https://opentdb.com/" target = "_blank" rel="noreferrer" className = "lia">Open Trivia Database</a> API
                            </li>
                            <li className = "proj-desc-point">
                                Uses tokens gernerated by opentdb's API to access new set of questions each time
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-style-1">
                <div className = "project-image-1">
                    <div className = "project-profile-back-1"></div>
                    <img className = "project-profile" src = {portfolio_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Portfolio</h1>
                        <p style = {{"font-size" : "40px", "margin" : "0px 20px 0px 20px", }}>~</p>
                        <a className = "proj-link" href = "https://github.com/jamal474/portfolio" target = "_blank" rel="noreferrer"><img className = "code" src = {code} alt = "code-logo"/></a>
                        <a className = "proj-link" href = "https://www.mdshabbirjamal.one" target = "_blank" rel="noreferrer"><img className = "eye" src = {eye} alt = "eye-logo"/></a>
                    </div>
                    <div className = "skills-comp-used">
                        {/* <div>Skills  :  </div> */}
                        <div className = "skill-comp">HTML</div>
                        <div className = "skill-comp">CSS</div>
                        <div className = "skill-comp">JavaScript</div>
                        <div className = "skill-comp">ReactJS</div>
                    </div>
                    <div className = "proj-desc">A Porfolio for my academic information, projects etc</div>
                    <div className = "proj-desc-points">
                        <ul>
                            <li className = "proj-desc-point">
                            <span style = {{color : "blue"}}>Fully Responsive</span> Website, designed and implemented using React.js
                            </li>
                            <li className = "proj-desc-point">
                                Deployed using the <span style = {{color : "blue"}}>Netlify</span> platform
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-style-2">
                <div className = "project-image-2">
                    <div className = "project-profile-back-2"></div>
                    <img className = "project-profile" src = {emotion_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Emotion Detection</h1>
                        <p style = {{"font-size" : "40px", "margin" : "0px 20px 0px 20px"}}>~</p>
                        <a className = "proj-link" href = "https://github.com/jamal474/emotiontest" target = "_blank" rel="noreferrer"><img className = "code" src = {code} alt = "code-logo"/></a>
                        <a className = "proj-link" href = "https://textemotion.mdshabbirjamal.one/" target = "_blank" rel="noreferrer"><img className = "eye" src = {eye} alt = "eye-logo"/></a>
                    </div>
                    <div className = "skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className = "skill-comp">PyScript.js</div>
                        <div className = "skill-comp">sklearn</div>
                        <div className = "skill-comp">pandas</div>
                        <div className = "skill-comp">ML</div>
                        <div className = "skill-comp">python</div>
                        <div className = "skill-comp">HTML</div>
                        <div className = "skill-comp">CSS</div>
                        <div className = "skill-comp">ReactJS</div>
                    </div>
                    <div className = "proj-desc">Detect Emotions like Joy, Sad, Anger, etc from texts using Machine Learning</div>
                    <div className = "proj-desc-points">
                        <ul>
                            <li className = "proj-desc-point">
                            The website uses machine learning, specifically Scikit-learn's <span style = {{color : "blue"}}>LinearSVC</span>
                            </li>
                            <li className = "proj-desc-point">
                            It's trained on data from thecleverprogrammer.com and uses a <span style = {{color : "blue"}}>tfidf vectorizer</span> with 2-gram feature extraction
                            </li>
                            <li className = "proj-desc-point">
                            <span style = {{color : "blue"}}>Accuracy : 61 %</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;