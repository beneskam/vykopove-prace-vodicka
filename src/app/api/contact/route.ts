export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json()

  if (!name || !phone || !message) {
    return Response.json({ error: 'Vyplňte povinná pole.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Server není nakonfigurován.' }, { status: 500 })
  }

  const fromEmail = process.env.BREVO_FROM_EMAIL ?? 'kml.benes@gmail.com'

  const textContent = [
    `Nová poptávka od: ${name}`,
    `Telefon: ${phone}`,
    email ? `E-mail: ${email}` : '',
    ``,
    `Zpráva:`,
    message,
  ].filter(Boolean).join('\n')

  const body: Record<string, unknown> = {
    subject: `Nová poptávka — ${name}`,
    textContent,
    sender: { name: 'Zemní práce Vodička', email: fromEmail },
    to: [{ email: 'petrvodas@seznam.cz' }],
  }

  if (email) {
    body.replyTo = { email, name }
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Brevo error:', err)
    return Response.json({ error: 'Nepodařilo se odeslat zprávu.' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
