import { BrevoClient, BrevoError } from '@getbrevo/brevo'

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json()

  if (!name || !phone || !message) {
    return Response.json({ error: 'Vyplňte povinná pole.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Server není nakonfigurován.' }, { status: 500 })
  }

  const apiInstance = new BrevoClient({ apiKey })

  const textContent = [
    `Nová poptávka od: ${name}`,
    `Telefon: ${phone}`,
    email ? `E-mail: ${email}` : '',
    ``,
    `Zpráva:`,
    message,
  ]
    .filter((l) => l !== undefined)
    .join('\n')

  try {
    await apiInstance.transactionalEmails.sendTransacEmail({
      subject: `Nová poptávka — ${name}`,
      textContent,
      sender: {
        name: 'Zemní práce Vodička',
        email: process.env.BREVO_FROM_EMAIL ?? 'noreply@vodickakopani.cz',
      },
      to: [{ email: 'petrvodas@seznam.cz' }],
      replyTo: email ? { email, name } : undefined,
    })
  } catch (err) {
    if (err instanceof BrevoError) {
      console.error(`Brevo error ${err.statusCode}:`, err.message)
    } else {
      console.error('Email send error:', err)
    }
    return Response.json({ error: 'Nepodařilo se odeslat zprávu.' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
