import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', comments: '' })
    const [errors, setErrors] = useState({ nameError: '', emailError: '', commentsErrror: '' })
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const validateName = (name) => {
        var error = null

        if(!name)
            error = "You must enter a name"

        return error;
    }

    const validateEmail = (email) => {
        var error = null
        const regex_email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!email)
            error = "You must enter an email address"
        else if(!regex_email.test(email))
            error = "You must enter a valid email address (eg. name@domain.com"

        return error;
    }

    const validateComments = (comments) => {
        var error = null

        if(!comments)
            error = "You must enter a comment"
        else if(comments.length < 5)
            error = "Your comment must contain at least five characters"

        return error;
    }

    const handleNameChange = (e) => {
        const {id, value} = e.target
        setContactForm({ ...contactForm, [id]: value })
        setErrors({ ...errors, nameError: validateName(value)})
    }

    const handleEmailChange = (e) => {
        const {id, value} = e.target
        setContactForm({ ...contactForm, [id]: value })
        setErrors({ ...errors, emailError: validateEmail(value) })
    }

    const handleCommentsChange = (e) => {
        const {id, value} = e.target
        setContactForm({ ...contactForm, [id]: value })
        setErrors({ ...errors, commentsError: validateComments(value) })
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()

        let name = contactForm.name
        let email = contactForm.email
        let comments = contactForm.comments

        let nameError = validateName(name)
        let emailError = validateEmail(email)
        let commentsError = validateComments(comments)

        setErrors({ nameError: nameError, emailError: emailError, commentsError: commentsError })

        if (nameError === null && emailError === null && commentsError === null)
        {
            var jsonData = JSON.stringify({ name, email, comments })
        
            setContactForm({ name: '', email: '', comments: '' })
            setErrors({ nameError: '', emailError: '', commentsError: '' })
        
            fetch("https://win22-webapi.azurewebsites.net/api/contactform",
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: jsonData
                })
            .then(result => {
                if (result.status === 200) {
                    setSubmitted(true)
                    setFailedSubmit(false)
                }
                else {
                    setSubmitted(false)
                    setFailedSubmit(true)
                }
            })
        }
        else
        {
            setSubmitted(false)
        }
    }

    return (
        <section className="contact-form">
            <div className="container">
                {
                    failedSubmit ?
                    (
                        <div>
                            <div className="alert alert-danger text-center">
                                <h1>Failed to submit!</h1>
                            </div>
                        </div>)
                        :
                        (<></>)
                }

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
                                <div className="errorMessage">{errors.nameError}</div>
                            </div>
                            <div>
                                <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleEmailChange}/>
                                <div className="errorMessage">{errors.emailError}</div>
                            </div>
                            <div className ="textarea">
                                <textarea id="comments" placeholder="Comments" value={contactForm.comments} onChange={handleCommentsChange}></textarea>
                                <div className="errorMessage">{errors.commentsError}</div>
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