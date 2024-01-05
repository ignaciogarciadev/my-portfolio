// sendEmail.js
import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;

const sendEmail = (templateParams) => {
  emailjs.send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });
};

export default sendEmail;
