import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7a5b4bbf494d4a",
    pass: "c7fc6ed721a763"
  }
});

export default async (email,resetUrl) => {
  const info = await transport.sendMail({
    from: '"Profile manager" <info53@gmail.com>',
    to: `${email}@gmail.com`,
    subject: "According to Password Reset",
    text: "Hello world?", // plain‑text body
    html: `<a href =${resetUrl}>click here</a>`, // HTML body
  });

  console.log("Message sent:", info.messageId);
};