import profileImage from '../assets/image/profile.jpeg'

function Main()
{
    return (
        <section className = "main syncscroll" name="myElements" id = "About">
            <div className = "main-text">
                <div className = "main-text-iam">Hello I' am</div>
                <div className = "main-text-name">Md Shabbir Jamal</div>
                <div className = "main-text-desc"> Engineer, Web developer, Competitive Programming enthusiast</div>
                <a href = "https://drive.google.com/file/d/1mna2t6lKUPqmqAgvDND7MC1OD07QPXi3/view?usp=sharing" target = "_blank" rel="noreferrer"><button className = "resume">Résumé</button></a>
            </div>
            <div className = "main-profile">
                <div className = "profile-back"></div>
                <img className = "profile" src ={profileImage} alt = "profile picture"/>
            </div>
        </section>
    )
}

export default Main;
