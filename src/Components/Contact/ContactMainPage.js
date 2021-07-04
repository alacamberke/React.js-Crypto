import React, {useState} from 'react'
import Contact from './Contact';
import emailjs from 'emailjs-com';

const ContactMainPage = () => {

    const isMaksLetterFull = (event, maksletter) => {
        if (event.target.value.length < maksletter) {
            return true;
        }
        return false
    }

    const isMessageDeleting = (event, message) => {
        if (event.target.value.length > message.length) {
            return true;
        }
        return false;
    }

    //Check methods that above.
    const check = (message, event, maksletter) => {
        if (isMaksLetterFull(event, maksletter) || !isMessageDeleting(event, message)) {
            return false;
        }
        return true
    }

    const checkEmail = (email, message) => {
        if(email === "" || message === ""){
            return false;
        }
        return true;
    }

    const SendEmail = (event, message, email) => {
        event.preventDefault();
        if (checkEmail(email, message)) {
            return false;
        } else {
            emailjs.sendForm("service_6lseo7t", "template_2wl6tmj", event.target, "user_zbEvKwdDkhsHwwQN5bpIX")
                .then(result => {
                    return true;
                }).catch(error => {
                    return false;
                })
        }
    }

    return (
        <Contact 
            isMessageDeleting={isMessageDeleting}
            isMaksLetterFull={isMaksLetterFull}
            SendEmail={SendEmail}
            check={check}/>
    )

}

export default ContactMainPage
