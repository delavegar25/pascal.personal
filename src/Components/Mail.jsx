import React from 'react'
import '../styles/Mail.css'
import emailjs from 'emailjs-com';

function Mail() {
   const sendEmail = () => {
    const serviceID = 'SERVICE_ID';
    const templateID = 'TEMPLATE_ID';
    const userID = '';

    const templateParams = {
      to_email: 'recipient@example.com',
      message: 'Hello, this is a test email sent from my React app!',
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID)
   .then((response) => {
     console.log('Email sent successfully:', response);
   })

  .catch((error) => {
    console.error('Email sending failed:', error);
  });
   };
  
 
return (
   <div className='btn' onClick={sendEmail}>Send Message</div>
);
}

export default Mail;
