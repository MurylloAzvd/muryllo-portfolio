import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "muryllo.dev.portfolio@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "muryllo.dev.portfolio@gmail.com",
    to: "muryllo.dev@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }

  return res.status(200).send("sucess");
}
