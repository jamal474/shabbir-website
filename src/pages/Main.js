import profilePic from '../assets/image/new.jpg'
import SEO from './SEO'
import Skills from './Skills'
import PersonSchema from './PersonSchema'

function Main() {
    return (
        <div className = "mainIntro">
            <PersonSchema/>
            <section className="main" name="myElements" id="About">

                <SEO
                    title="Md Shabbir Jamal - Portfolio"
                    description="Hi, I am a CS undergrad with a strong enthusiasm for web development, machine learning, and competitive programming. Explore my interests on this website."
                    name="@lamajribbahs"
                    image="../assets/image/picture.jpg" />
                <div className="main-text">
                    <div className="main-text-iam">Hello I' am</div>
                    <div className="main-text-name">Md Shabbir Jamal</div>
                    <div className="main-text-desc"> Software Engineer, Competitive Programming enthusiast</div>
                    <a href="https://drive.google.com/file/d/11IG-Ln7WZ7djEvHy1eRimlkPxs_aemXl/view?usp=drive_link" target="_blank" rel="noreferrer"><button className="resume">RESUME</button></a>
                </div>
                <div className="main-profile">
                    <div className="profile-back"></div>
                    <div className="profile-back-2"></div>
                    <div className="profile-border"><img className="profile" src={profilePic} alt="profile visual" /></div>
                </div>
            </section>
            <div className = "skillSubpart">
                <Skills />
            </div>
        </div>
    )
}

export default Main;
