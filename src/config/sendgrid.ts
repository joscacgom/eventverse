import sgMail from '@sendgrid/mail'

export const sendEmail = async (to:string, subject:string, text:string) => {
  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY))

  const msg = {
    to,
    from: 'eventversehelp@gmail.com',
    subject,
    text
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error(error)
  }
}
