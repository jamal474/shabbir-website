import React from 'react'
import emailjs from '@emailjs/browser';
import '../style/Contacts.css'
import gmailimg from '../assets/icon/mailGoogle.svg'
import locationimg from '../assets/icon/location.svg'
import SEO from './SEO'

export default function Contacts() {
    const form = React.useRef();
    const sendEmail = (e) => {
        alert("Message Sent - :)")
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
        <section className="contacts" name="myElements" id="Contacts">
            <SEO
                title="Contacts - Md Shabbir Jamal"
                description="If you want to reach out to me, feel free to do so."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
            <h2 className="contacts-section-title">Contacts</h2>
            <div className="contacts-section">
                <div className="front-card">
                    <div className="email">
                        <a href="mailto:wesdssar@gmail.com"><img src={gmailimg} className="contact-logos" alt="google logo" /></a>
                        <a href="mailto:wesdssar@gmail.com"><h4 className="contact-val">wesdssar@gmail.com</h4></a>
                    </div>
                    <div className="location">
                        <a href="https://goo.gl/maps/z2rYbtV6idLyeRDF8" target="_blank" rel="noreferrer"><img src={locationimg} className="contact-logos" alt="location pin logo" /></a>
                        <a href="https://goo.gl/maps/z2rYbtV6idLyeRDF8" target="_blank" rel="noreferrer"><h4 className="contact-val">Room 337 Hostel 12 BIT Mesra, Ranchi</h4></a>
                    </div>
                </div>
                <div className="back-card">
                    <div className="message-card">
                        <form ref={form} onSubmit={sendEmail} className="form-card">
                            <input type="text" placeholder="Name" name="user_name" required />
                            <input type="email" placeholder="Email" name="user_email" required />
                            <textarea name="message" placeholder="Message" cols="30" rows="10" required />
                            <button type="submit" className="send">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
