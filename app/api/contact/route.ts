import nodemailer from "nodemailer"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, destination, message, website } = body

  // honeypot: bots fill hidden fields, real users leave it blank
  if (website) {
    return Response.json({ ok: true })
  }

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    )
  }

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars")
    return Response.json(
      { ok: false, error: "Email is not configured." },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `Bijou Travel Website <${user}>`,
      to: user,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        destination ? `Destination: ${destination}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${destination ? `<p><strong>Destination:</strong> ${escapeHtml(destination)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return Response.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    )
  }
}
