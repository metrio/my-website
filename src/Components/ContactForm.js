import React,{ useState }  from 'react'
import * as emailjs from 'emailjs-com'

const ContactForm = () => {

    const [ sent, setSent ] = useState(false)
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleEmailChange = (e) => {
        setFormData({
            [e.target.name]: e.target.value
        })
    }

    const emailSubmit = (e) => {
        e.preventDefault()

        let templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
        }

        emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, templateParams, `${process.env.REACT_APP_EMAILJS_USER_KEY}`)
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
    
    return (
        <form className="contact-form" onSubmit={(e) => emailSubmit(e)}>

            <label>Your Name</label>
            <input onChange={(e) => handleEmailChange(e)} name="name" type="text" placeholder="Your Name" value={formData.name}/>

            <label>Your Email</label>
            <input onChange={(e) => handleEmailChange(e)} name="email"  type="email" placeholder="your@email.com" value={formData.email} required/>

            <label>Subject of Email</label>
            <input onChange={(e) => handleEmailChange(e)} name="subject" type="text" placeholder="Subject" value={formData.subject}/>

            <label>Your Message</label>
            <textarea onChange={(e) => handleEmailChange(e)} name="message"  type="text-area" placeholder="Please write your message here" value={formData.message} required/>
      

        <div className="button--container">
            <button type="submit">Send</button>
        </div>
      </form>
    )
}

export default ContactForm
