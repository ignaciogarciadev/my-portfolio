import emailjs from '@emailjs/browser';

require('../../dotenv.config');


const sendEmail = (templateParams) => {
  emailjs.send(process.env.SERVICE_ID ,process.env.TEMPLATE_ID, templateParams, 'oGwz_hmab08VP6yDS')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}

export default sendEmail;