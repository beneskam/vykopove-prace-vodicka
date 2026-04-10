import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json()

  if (!name || !phone || !message) {
    return Response.json({ error: 'Vyplňte povinná pole.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.seznam.cz',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'petrvodas@seznam.cz',
    subject: `Nová poptávka od ${name}`,
    text: [
      `Jméno: ${name}`,
      `Telefon: ${phone}`,
      email ? `E-mail: ${email}` : '',
      ``,
      `Zpráva:`,
      message,
    ]
      .filter(Boolean)
      .join('\n'),
    html: `
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      ${email ? `<p><strong>E-mail:</strong> ${email}</p>` : ''}
      <p><strong>Zpráva:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return Response.json({ ok: true })
}
