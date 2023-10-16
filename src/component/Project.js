import SEO from './SEO'
import '../style/Project.css'
import quizton_img from '../assets/image/quizton.png'
import portfolio_img from '../assets/image/portfolio.png'
import depression_img from '../assets/image/deprT.jpg'
import github_icon from '../assets/icon/Github.svg'
import website_icon from '../assets/icon/Website.svg'


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
            <div className="project-style-1">
                <div className = "project-image-1">
                    <div className = "project-profile-back-1"></div>
                    <img className = "project-profile" src = {depression_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Depression using Twitter</h1>
                        <a className = "proj-link" href = "https://github.com/jamal474/Depression-from-Twitter" target = "_blank" rel="noreferrer"><img src = {github_icon} alt = "github logo"></img></a>
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
                            Models like Bi-LSTM with attention, lightGBM and others were used with WAE for classifcation of previously unseen data.
                            </li>
                            <li className = "proj-desc-point">
                            Using predicted classifications we compared the Depression prevalence among Developed and Developing Countries.
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
                        <a className = "proj-link" href = "https://github.com/jamal474/quizton" target = "_blank" rel="noreferrer"><img src = {github_icon} alt = "github logo"></img></a>
                        <a className = "proj-link" href = "https://quizton.mdshabbirjamal.one/" target = "_blank" rel="noreferrer"><img src = {website_icon} alt = "globe logo"></img></a>
                    </div>
                    <div className = "skills-comp-used">
                        {/* <div className = "skills-heading" >Skills  :  </div>  */}
                        <div className = "skill-comp">HTML</div>
                        <div className = "skill-comp">CSS</div>
                        <div className = "skill-comp">JavaScript</div>
                        <div className = "skill-comp">ReactJS</div>
                    </div>
                    <div className = "proj-desc">A website to check your Knowledge on Computer Science's some known and some obscure facts</div>
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
                        <a className = "proj-link" href = "https://github.com/jamal474/portfolio" target = "_blank" rel="noreferrer"><img src = {github_icon} alt = "github logo"/></a>
                        <a className = "proj-link" href = "https://www.mdshabbirjamal.one" target = "_blank" rel="noreferrer"><img src = {website_icon} alt = "globe logo"/></a>
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
                                Fully Responsive Website
                            </li>
                            <li className = "proj-desc-point">
                                Deployed using the Netlify platform
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;