import React from 'react'
import '../style/Footer.css'
import githubimg_c from '../assets/icon/githubicon.svg'
import linkedinimg_c from '../assets/icon/lkdn.svg'
import instagramimg_c from '../assets/icon/insta.svg'
import twitterimg_c from '../assets/icon/x.svg'
import codeforcesimg_c from '../assets/icon/cforces.svg'

function Footer() {
    var d = new Date();
    const currentYear = d.getFullYear();

    return (
        <section className='footer' >
            <div className="contact-person">
                <div className="contact-name"> Md Shabbir Jamal</div>
                <div className="contact-email"> mdshabbir820141@gmail.com</div>
                <div className="contact-estd"> &copy; 2022 - {currentYear}</div>
            </div>
            <div className="socials">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-shabbir-jamal-0620781a0"><img src={linkedinimg_c} className="socials-logo" alt="linkedin logo" title="Linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/jamal474"><img src={githubimg_c} className="socials-logo" alt="github logo" title="GitHub" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lamaj.sm/"><img src={instagramimg_c} className="instagram" alt="instagram logo" title="Instagram" /></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/lamajribbahs"><img src={twitterimg_c} className="socials-logo" alt="twitter logo" title="twitter" /></a>
                <a target="_blank" rel="noreferrer" href="https://codeforces.com/profile/jamal474"><img src={codeforcesimg_c} className="codeforces-logo" alt="codeforces logo" title="Codeforces" /></a>
            </div>
        </section>
    );
}

export default Footer;
