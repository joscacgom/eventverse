import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/config/sendgrid'

type EmailApiResponse = {message: string} | { error: any };

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<EmailApiResponse>
) {
  const formData = req.body
  const formDataJSON = JSON.parse(formData)

  try {
    await sendEmail('eventversehelp@gmail.com', `Submission from ${formDataJSON.name}`, 'Name: ' + formDataJSON.name + '\nEmail: ' + formDataJSON.email + '\nMessage: ' + formDataJSON.message)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
