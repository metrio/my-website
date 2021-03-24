import React,{ useState }  from 'react'
import axios from 'axios'
import PropTypes from "prop-types"


const ContactForm = (props) => {

    const [ sent, setSent ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ formData, setFormData ] = useState({})

    const handleEmailChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const emailSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    
    return (
        <form className="contact-form" onSubmit={ (e) => emailSubmit(e)}>

            <label className="message-name" >Your Name</label>
            <input onChange={ (e) => handleEmailChange(e) } name="name" type="text" placeholder="Your Name" value={formData.name}/>

            <label className="message-email" >Your Email</label>
            <input onChange={ (e) => handleEmailChange(e) } name="email"  type="email" placeholder="your@email.com" required value={formData.email} />

            <label className="message-subject" >Subject of Email</label>
            <input onChange={ (e) => handleEmailChange(e) } name="subject" type="text" placeholder="Subject" value={formData.subject}/>

            <label className="message" >Your Message</label>
            <textarea onChange={ (e) => handleEmailChange(e) } name="message"  type="text" placeholder="Please write your message here" value={formData.message} required/>
      

        <div className="button--container">
            <button type="submit">Send Email</button>
        </div>
      </form>
    )
}

export default ContactForm
