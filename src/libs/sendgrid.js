import * as dotenv from 'dotenv'
import * as sgMail from '@sendgrid/mail'
dotenv.config()

const {
  SENDGRID_API_KEY
} = process.env

const handlerMail = new sgMail.MailService()

handlerMail.setApiKey(SENDGRID_API_KEY)

const sendConfirmationEmail = (to, name, token) => {
  const msg = {
    to: { email: to },
    subject: 'Confirmación de cuenta',
    fromname: 'MOVEBIKE',
    from: { name: 'MOVEBIKE', email: 'movebikeapp@gmail.com' },
    templateId: 'd-e356d0adb76a43829fad752f4bf604aa',
    dynamic_template_data: {
      name,
      link: `https://urlEmpresa/confirm-email/?token=${token}`
    }
  }
  return handlerMail.send(msg)
}

export {
  sendConfirmationEmail
}
