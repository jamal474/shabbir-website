import SEO from './SEO'
import '../style/Project.css'
import quizton_img from '../assets/image/quizton.png'
import portfolio_img from '../assets/image/portfolio.png'
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
                    <div className = "project-profile-back"></div>
                    <img className = "project-profile" src = {quizton_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Quizton</h1>
                        <a className = "proj-link" href = "https://github.com/jamal474/quizton" target = "_blank" rel="noreferrer"><img src = {github_icon} alt = "github logo"></img></a>
                        <a className = "proj-link" href = "https://quizton.mdshabbirjamal.one/" target = "_blank" rel="noreferrer"><img src = {website_icon} alt = "globe logo"></img></a>
                    </div>
                    <div className = "skills-comp-used">
                        <h3>Skills  :  </h3> 
                        <h3 className = "skill-comp">HTML</h3>
                        <h3 className = "skill-comp">CSS</h3>
                        <h3 className = "skill-comp">JavaScript</h3>
                        <h3 className = "skill-comp">ReactJS</h3>
                    </div>
                    <h3 className = "proj-desc">A website to check your Knowledge on Computer Science's known and unknown facts</h3>
                </div>
            </div>
            <div className="project-style-2">
                <div className = "project-image-2">
                    <div className = "project-profile-back"></div>
                    <img className = "project-profile" src = {portfolio_img} alt = "project preview shot"></img>
                </div>
                <div className = "description">
                    <div className = "overview">
                        <h1 className="desc-name">Portfolio</h1>
                        <a className = "proj-link" href = "https://github.com/jamal474/portfolio" target = "_blank" rel="noreferrer"><img src = {github_icon} alt = "github logo"/></a>
                        <a className = "proj-link" href = "https://www.mdshabbirjamal.one" target = "_blank" rel="noreferrer"><img src = {website_icon} alt = "globe logo"/></a>
                    </div>
                    <h3 className = "skills-comp-used">
                        <h3>Skills  :  </h3>
                        <h3 className = "skill-comp">HTML</h3>
                        <h3 className = "skill-comp">CSS</h3>
                        <h3 className = "skill-comp">JavaScript</h3>
                        <h3 className = "skill-comp">ReactJS</h3>
                    </h3>
                    <h3 className = "proj-desc">A Porfolio for my academic information, projects etc</h3>
                </div>
            </div>
        </section>
    );
}

export default Project;