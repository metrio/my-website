import React from 'react'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

function Contact() {
    
    return(
        <section className="contact">
            <h1>Want to talk? Need a Mentor? Need a teammate?</h1>
            <ContactForm />
            <Footer />
        </section>
        
    )
}

export default Contact