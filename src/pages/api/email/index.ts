import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/config/sendgrid'

type EmailApiResponse = {message: string} | { error: any } ;

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<EmailApiResponse>
) {
  const formData = req.body
  try {
    await sendEmail('eventversehelp@gmail.com', `Submission from ${formData.name}`, `From: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    res.status(200).json({ message: 'Email sent' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
