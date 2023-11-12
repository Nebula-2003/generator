import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

// Use sensible defaults for SMTP connection pooling
const emailConfig = {
    host: process.env.SMTP_HOST,
    secureConnection: process.env.SMTP_SECURE_CONNECTION === 'true' ? true : false,
    port: parseInt(process.env.SMTP_PORT),
    auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASSWORD
    }
};

const SOURCE_EMAIL = process.env.SMTP_SOURCE_EMAIL;

const transporter = nodemailer.createTransport(smtpTransport(emailConfig));

const sendMail = async (data) => {
    const fromEmail = `<${SOURCE_EMAIL}>`;

    const mailOptions = {
        from: fromEmail,
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
        ses: {},
        attachments: []
    };

    if (data.cc) {
        mailOptions.cc = data.cc;
    }

    if (data.bcc) {
        mailOptions.bcc = data.bcc;
    }

    // send mail with defined transport object
    return await transporter.sendMail(mailOptions);
};

export { sendMail };
