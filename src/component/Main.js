import profilePic from '../assets/image/profile-pic.png'
import SEO from './SEO'
function Main()
{
    return (
        <section className = "main" name="myElements" id = "About">
            <SEO
                title="Md Shabbir Jamal - Portfolio"
                description="Hi, I am a CS undergrad with a strong enthusiasm for web development, machine learning, and competitive programming. Explore my interests on this website."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
            <div className = "main-text">
                <div className = "main-text-iam">Hello I' am</div>
                <div className = "main-text-name">Md Shabbir Jamal</div>
                <div className = "main-text-desc"> Engineer, Web developer, Competitive Programming enthusiast</div>
                <a href = "https://drive.google.com/file/d/1no29W2DXg15Rl0BbXqfGmCoSNCwEuGjx/view?usp=drive_link" target = "_blank" rel="noreferrer"><button className = "resume">Résumé</button></a>
            </div>
            <div className = "main-profile">
                <div className = "profile-back"></div>
                <img className = "profile" src ={profilePic} alt = "profile visual"/>
            </div>
        </section>
    )
}

export default Main;
