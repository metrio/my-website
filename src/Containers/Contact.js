import React, { useState } from 'react'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

function Contact() {

    const [ sent, setSent ] = useState(false)

    const hideForm = () => {
        let prevState = sent
        setSent(!prevState) 

    }
    
    return(
        <section className="contact-page">
            <div className="contact-container">
                <h1 className="want2chat">Want to talk? Need a Mentor? Need a teammate?</h1>
                <h1 className="want2chat">Send a Message</h1>
                { !sent ? <ContactForm hideForm={hideForm} /> : <h4>Thanks for sending an email</h4> }
            </div>
            <Footer />
        </section>
        
    )
}

export default Contact