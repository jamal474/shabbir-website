import React from 'react'
import emailjs from '@emailjs/browser';
import '../style/Contacts.css'
import gmailimg from '../assets/icon/mailGoogle.svg'
import locationimg from '../assets/icon/location.svg' 
import githubimg_c from '../assets/icon/Github.svg'
import linkedinimg_c from '../assets/icon/linkedin.svg'
import instagramimg_c from '../assets/icon/instagram.svg'


export default function Contacts() {
    var d = new Date(); 
    const currentYear = d.getFullYear(); 
    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x6vvvwt', 'template_3ayolkq', form.current, 'h77SqRUuu3eDAdQ3a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
  return (
    <div className = "contacts" id = "Contacts">
        <h2 className = "contacts-section-title">Contacts</h2>
        <div className = "socials">
            <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/md-shabbir-jamal-0620781a0"><img src = {linkedinimg_c} className = "socials-logo" alt = "linkedin logo"/></a>
            <a target = "_blank" rel="noreferrer" href = "https://github.com/jamal474"><img src = {githubimg_c} className = "socials-logo" alt = "github logo"/></a>
            <a target = "_blank" rel="noreferrer" href = "https://www.instagram.com/lamaj.sm/"><img src = {instagramimg_c} className = "instagram" alt = "instagram logo"/></a>
        </div>
        <div className = "contacts-section">
            <div className = "front-card">
                <div className = "email">
                    <a href = "mailto:wesdssar@gmail.com"><img src = {gmailimg} className = "contact-logos" alt = "google logo"/></a>
                    <a href = "mailto:wesdssar@gmail.com"><h4 className = "contact-val">wesdssar@gmail.com</h4></a>
                </div>
                <div className = "location">
                    <a href = "https://goo.gl/maps/z2rYbtV6idLyeRDF8" target = "_blank" rel="noreferrer"><img src = {locationimg} className = "contact-logos" alt = "location pin logo"/></a>
                    <a href = "https://goo.gl/maps/z2rYbtV6idLyeRDF8" target = "_blank" rel="noreferrer"><h4 className = "contact-val">Room B-8 Hostel 13 BIT Mesra, Ranchi</h4></a>
                </div>
            </div>
            <div className = "back-card">
                <div className = "message-card">
                    <form ref = {form} onSubmit = {sendEmail} className = "form-card">
                        <input type="text" placeholder = "Name" name = "user_name" required/>
                        <input type="email" placeholder = "Email" name = "user_email" required/>
                        <textarea name = "message" placeholder = "Message" cols = "30" rows = "10" required/>
                        <button type = "submit" className = "send">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div className = "rights">Made By Md Shabbir Jamal &copy; {currentYear} All Rights Reserved</div>
    </div>
  )
}
