import { render } from "jsx-email";
import { Template as WelcomeEmail } from "@/emails/WelcomeEmail";
import { FROM_EMAIL, SITE_NAME } from "@/lib/constants";
import { SES } from "@aws-sdk/client-ses";
import { Transporter } from "nodemailer";

let ses: SES;
let transporter: Transporter;

// Custom logger definition
const logger = {
  info: (msg: string) => console.log(msg),
  warn: (msg: string) => console.warn(msg),
  error: (msg: string) => console.error(msg),
  debug: (msg: string) => console.debug(msg),
};

// Use nodemailer in dev, so we can trap and test transactional email easily.
if (process.env.NODE_ENV === "development") {
  const nodemailer = await import("nodemailer");
  transporter = nodemailer.createTransport({
    host: "0.0.0.0",
    port: 1025,
    secure: false, // true for 465, false for other ports
    ignoreTLS: true, // do not fail on invalid certs
    tls: {
      rejectUnauthorized: false,
    },
  });
} else {
  ses = new SES({ region: "us-east-2", logger: logger });
}

if (!process.env.SITE_BASE_URL) {
  throw new Error("SITE_BASE_URL is not set.");
}

export async function sendWelcomeEmail(firstName: string, email: string) {
  const subject = `${firstName}, Welcome to ${SITE_NAME}`;

  const html = await render(<WelcomeEmail name={firstName} email={email} />);

  return await sendEmail({
    subject,
    html,
    to: [email],
  });
}

/*
  Sends an email using either SES or Nodemailer.
  In development, it uses Nodemailer to trap and test transactional emails with maildev.
  In production, it uses SES to send the emails.
*/
export async function sendEmail({
  subject,
  html,
  to,
  from = FROM_EMAIL,
}: {
  from?: string;
  subject: string;
  html: string;
  to: string[];
}) {
  if (process.env.NODE_ENV == "development") {
    return await transporter.sendMail({
      from,
      subject,
      html,
      to: to.join(","),
    });
  }

  return await ses.sendEmail({
    Source: from,
    Destination: {
      ToAddresses: to,
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
  });
}
