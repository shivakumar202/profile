import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { username, email, phone, message, recipientEmail } = await request.json()

    // Validate required fields
    if (!username || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email credentials first
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailUser || !emailPassword) {
      console.error('Missing email credentials', {
        hasUser: Boolean(emailUser),
        hasPassword: Boolean(emailPassword),
      })

      return Response.json(
        {
          error: 'Missing email credentials',
          details: 'EMAIL_USER and EMAIL_PASSWORD must be set in environment variables',
        },
        { status: 500 }
      )
    }

    // Create transporter (configure with your email service)
    // For Gmail, you'll need to use an App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${username}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your portfolio website contact form.</em></p>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return Response.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
