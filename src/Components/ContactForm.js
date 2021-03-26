import React,{ useState }  from 'react'
import * as emailjs from 'emailjs-com'
import EmailIcon from '../Assets/png/email.png'
import SubjectIcon from '../Assets/png/info.png'
import MessageIcon from '../Assets/png/message.png'
import PersonIcon from '../Assets/png/person.png'
import gsap from 'gsap/gsap-core'

const ContactForm = (props) => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const hideThisForm = (e) => {
        props.hideForm()
    }


    const handleEmailChange = (e) => {
        e.persist()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const emailSubmit = (e) => {
        e.preventDefault()

        let templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            subject: formData.subject,
            message: formData.message
        }

        emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, templateParams, `${process.env.REACT_APP_EMAILJS_USER_KEY}`)
        .then((result) => {
            Object.keys(formData).map(key => {
                setFormData({
                    [key]: ''
                })
            })
            hideThisForm()
        }, (error) => {
            alert(`${error.text}` )
        })
    }
    
    return (
        <form className="contact-form" onSubmit={(e) => emailSubmit(e)}>

            <label>Your Name</label>
            <span className="input-line">
                <img src={PersonIcon} alt="person-icon"/>
                <div className="inputs">
                    <input onChange={(e) => handleEmailChange(e)}  name="name" type="text"  value={formData.name}/>
                </div>
            </span>

            <label>Your Email</label>
            <span className="input-line">
                <img src={EmailIcon} alt="email-icon"/>
                <div className="inputs">
                    <input onChange={(e) => handleEmailChange(e)}  name="email"  type="email"  value={formData.email} required/>
                </div>
            </span>
                    

            <label>Subject of Email</label>
            <span className="input-line">
                <img src={SubjectIcon} alt="subject"/>
                <div className="inputs">
                    <input onChange={(e) => handleEmailChange(e)} name="subject" type="text"  value={formData.subject}/>
                </div>
            </span>

            <label>Your Message</label>
            <div className="textbox">
                <img src={MessageIcon} alt="message"/>
                <textarea onChange={(e) => handleEmailChange(e)}  name="message"  type="text-area" value={formData.message} required/>
            </div>
      

        <div className="button--container">
            <button type="submit">Send</button>
        </div>
      </form>
    )
}

export default ContactForm
