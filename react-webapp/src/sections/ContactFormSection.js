import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [commentError, setCommentError] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const validateName = (name) => {
        var error
        if(!name)
            error = "You must enter a name"

        return error;
    }

    const validateEmail = (email) => {
        var error
        const regex_email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!email)
            error = "You must enter an email address"
        else if(!regex_email.test(email))
            error = "You must enter a valid email address (eg. name@domain.com"

        return error;
    }

    const validateComment = (comment) => {
        var error

        if(!comment)
            error = "You must enter a comment"
        else if(comment.length < 5)
            error = "Your comment must contain at least five characters"

        return error;
    }

    const handleNameChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        setNameError(validateName(value))
    }

    const handleEmailChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        setEmailError(validateEmail(value))
    }

    const handleCommentChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        setCommentError(validateComment(value))
    }

   const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {}
        var nameError = validateName(contactForm.name)
        var emailError = validateEmail(contactForm.email)
        var commentError = validateComment(contactForm.comment)

        if(nameError) {
            errors.name = nameError
            setNameError(errors.name)
        }

        if(emailError) {
            errors.email = emailError
            setEmailError(errors.email)
        }

        if(commentError) {
            errors.comment = commentError
            setCommentError(errors.comment)
        }

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else   
            setSubmitted(false)
    }
  


    return (
        <section className="contact-form">
            <div className="container">
                {
                    submitted ? 
                    (<div>
                        <div className ="submit-message">
                            <h1>Thank you for your comment!</h1>
                        </div>
                        </div>)
                    :
                    (
                    <>
                        <h2>Come in Contact with Us</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleNameChange} />
                                <div className="errorMessage">{nameError}</div>
                            </div>
                            <div>
                                <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleEmailChange}/>
                                <div className="errorMessage">{emailError}</div>
                            </div>
                            <div className ="textarea">
                                <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleCommentChange}></textarea>
                                <div className="errorMessage">{commentError}</div>
                            </div>
                            <div className="formBtn">
                                <button type="submit" className="btn-theme">Post Comments</button>
                            </div>
                        </form>
                    </>
                    )  
                }

            </div>
        </section>
    )
}

export default ContactFormSection