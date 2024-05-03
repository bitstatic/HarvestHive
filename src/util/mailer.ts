'use server'
import nodemailer from 'nodemailer'
import User from '@/database/models/userModel'
import bcryptjs from 'bcryptjs'

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //TODO: Conigure nodemailer

    const hashedTokenwithSymbols = await bcryptjs.hash(userId.toString(), 10)
    const hashedToken = hashedTokenwithSymbols.replace(/[\/\.\$]/g, 'X')

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyEmailToken: hashedToken,
        isEmailVerified: false,
        verifyEmailTokenExpiry: Date.now() + 3600000,
      })
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      })
    }

    console.log('Email token: ', hashedToken)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST_PROD!,
      port: parseInt(process.env.SMTP_PORT_PROD!),
      auth: {
        user: process.env.SMTP_USER_PROD!,
        pass: process.env.SMTP_PASS_PROD!,
      },
    })

    const mailOptions = {
      from: 'hi@harvesthive.com',
      to: email,
      subject:
        emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
      // text: "Click the link below ",
      html: `<p>Click the link below to verify your email</p><br> 
            <a href=" ${process.env.DOMAIN}/auth/verifyemail/${hashedToken}">
                ${(emailType = 'VERIFY' ? 'Verify Your Email' : 'Reset Your Password')}
            </a>`,
    }

    const mailResponse = await transporter.sendMail(mailOptions)

    console.log('Message sent: %s', mailResponse.messageId)

    return mailResponse
  } catch (error: any) {
    console.log(error)
    throw new Error('Error sending email: ' + error.message)
  }
}
